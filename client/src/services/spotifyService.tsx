import { ArtistData } from '../data/artist-data';
import { AlbumData } from '../data/album-data';
import { TrackData } from '../data/track-data';
import { ResourceData } from '../data/resource-data';
import { ProfileData } from '../data/profile-data';
import { TrackFeature } from '../data/track-feature';

export class SpotifyService {
    expressBaseUrl: string = "http://localhost:8888";

    constructor() { }

    private sendRequestToExpress(endpoint: string): Promise<any> {
        return fetch(this.expressBaseUrl + endpoint).then((data) => {
            return data.json();
        });
    }

    async aboutMe():Promise<ProfileData> {
        const data = await this.sendRequestToExpress('/me');
        return new ProfileData(data);
    }

    async searchFor(category:string, resource:string):Promise<ResourceData[]> {
        const data = await this.sendRequestToExpress("/search/" + category + "/" + encodeURIComponent(resource));
        if (data == undefined) return null as any;
        return data[category + "s"]["items"].map((ob: Object) => {
            return category == "artist" ? new ArtistData(ob) : category == "album" ? new AlbumData(ob) : new TrackData(ob);
        });
    }

    async getArtist(artistId:string):Promise<ArtistData> {
        const data = await this.sendRequestToExpress("/artist/" + encodeURIComponent(artistId));
        return new ArtistData(data);
    }

    async getRelatedArtists(artistId:string):Promise<ArtistData[]> {
        const data = await this.sendRequestToExpress("/artist-related-artists/" + encodeURIComponent(artistId));
        return data["artists"].map((ob: Object) => {
            return new ArtistData(ob);
        });
    }

    async getTopTracksForArtist(artistId:string):Promise<TrackData[]> {
        const data = await this.sendRequestToExpress("/artist-top-tracks/" + encodeURIComponent(artistId));
        return data["tracks"].map((ob: Object) => {
            return new TrackData(ob);
        });
    }

    async getAlbumsForArtist(artistId:string):Promise<AlbumData[]> {
        const data = await this.sendRequestToExpress("/artist-albums/" + encodeURIComponent(artistId));
        return data["items"].map((ob: Object) => {
            return new AlbumData(ob);
        });
    }

    async getAlbum(albumId:string):Promise<AlbumData> {
        const data = await this.sendRequestToExpress("/album/" + encodeURIComponent(albumId));
        return new AlbumData(data);
    }

    async getTracksForAlbum(albumId:string):Promise<TrackData[]> {
        const data = await this.sendRequestToExpress("/album-tracks/" + encodeURIComponent(albumId));
        return data["items"].map((ob: Object) => {
            return new TrackData(ob);
        });
    }

    async getTrack(trackId:string):Promise<TrackData> {
        const data = await this.sendRequestToExpress("/track/" + encodeURIComponent(trackId));
        return new TrackData(data);
    }

    async getAudioFeaturesForTrack(trackId:string):Promise<TrackFeature[]> {
        const data = await this.sendRequestToExpress("/track-audio-features/" + encodeURIComponent(trackId));
        var arr: TrackFeature[] = [];
        Object.keys(data).forEach((key) => {
            if (TrackFeature.FeatureTypes.includes(key)) {
                arr.push(new TrackFeature(key, data[key]));
            }
        });
        return arr;
    }
}