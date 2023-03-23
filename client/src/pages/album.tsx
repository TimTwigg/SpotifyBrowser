import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "./../components/layout";
import { SpotifyService } from "../services/spotifyService";
import { AlbumData } from "../data/album-data";
import { TrackData } from "../data/track-data";
import TrackList from "../components/trackList";

const service = new SpotifyService();

const AlbumPage = () => {
    React.useEffect(() => {
        init();
    }, []);

    var [album, SetAlbum] = React.useState({} as AlbumData);
    var [tracks, SetTracks] = React.useState([] as TrackData[]);

    let id = window.location.hash.substring(1);

    function init() {
        service.getAlbum(id).then(data => {
            SetAlbum(data);
        })
        service.getTracksForAlbum(id).then(data => {
            SetTracks(data);
        })
    }

    return (
        <Layout title = "Album">
            <div className = "one-third column">
                <h3>{album.name}</h3>
                <img src = {album.imageURL} className = "thumb"/>
                <p>
                    {tracks.length > 0 &&
                        album.artists?.map((v, i) => <span key = {i}>Artist: <a href = {"/artist/#" + v.id} className = "linkCursor">{v.name}</a><br/></span>)
                    }
                </p>
                <a href = {album.url} target = "_blank" className = "borderless">
                    <button>Open {album.name} on Spotify</button>
                </a>
            </div>
            <div className = "one-half column">
                <TrackList resources = {tracks} hideAlbum = {true} hideArtist = {true}/>
            </div>
        </Layout>
    );
}

export default AlbumPage;

export const Head: HeadFC = () => <title>Album</title>