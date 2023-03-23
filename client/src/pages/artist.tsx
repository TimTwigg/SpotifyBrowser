import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "./../components/layout";
import { SpotifyService } from "../services/spotifyService";
import { ArtistData } from "../data/artist-data";
import { TrackData } from "../data/track-data";
import { AlbumData } from "../data/album-data";
import Slider from "../components/carousel";
import TrackList from "../components/trackList";

const service = new SpotifyService();

const ArtistPage = () => {
    React.useEffect(() => {
        init();
    }, []);

    var [artist, SetArtist] = React.useState({
        artistID: "",
        artist: {} as ArtistData
    });

    var [relatedArtists, SetRelatedArtists] = React.useState([] as ArtistData[]);
    var [topTracks, SetTopTracks] = React.useState([] as TrackData[]);
    var [albums, SetAlbums] = React.useState([] as AlbumData[]);

    let id = window.location.hash.substring(1);

    function init() {
        service.getArtist(id).then(data => {
            SetArtist({
                artistID: data.id,
                artist: data
            });
        })
        service.getRelatedArtists(id).then(data => {
            SetRelatedArtists(data);
        })
        service.getTopTracksForArtist(id).then(data => {
            SetTopTracks(data);
        })
        service.getAlbumsForArtist(id).then(data => {
            SetAlbums(data);
        })
    }

    return (
        <Layout title = "Artist">
            <h1>{artist.artist.name}</h1>

            <span className = "four columns">
                <img src = {artist.artist.imageURL} className = "thumb"/>
                <a href = {artist.artist.url} className = "borderless">
                    <button>Open {artist.artist.name} on Spotify</button>
                </a>
            </span>
            <div className = "two columns">
                <h3>Genres</h3>
                <ul>
                    {artist.artistID != "" &&
                        artist.artist.genres.map((v, i) => <li key = {i}>{v}</li>)
                    }
                </ul>
            </div>
            <div className = "six columns">
                <TrackList resources = {topTracks} hideArtist = {true} hideAlbum = {false}/>
            </div>
            
            <div className = "twelve columns">
                <span className = "six columns">
                    <h5>{artist.artist.name}'s Albums</h5>
                    <Slider resources = {albums}/>
                </span>
                <span className = "six columns">
                    <h5>Artists like {artist.artist.name}</h5>
                    <Slider resources = {relatedArtists}/>
                </span>
            </div>
        </Layout>
    );
}

export default ArtistPage;

export const Head: HeadFC = () => <title>Artist</title>