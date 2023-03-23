import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "./../components/layout";
import { SpotifyService } from "../services/spotifyService";
import { TrackData } from "../data/track-data";
import { TrackFeature } from "../data/track-feature";
import Thermometer from "../components/thermometer";

const service = new SpotifyService();

const TrackPage = () => {
    React.useEffect(() => {
        init();
    }, []);

    var [track, SetTrack] = React.useState({} as TrackData);
    var [audioFeatures, SetAudioFeatures] = React.useState([] as TrackFeature[]);

    let id = window.location.hash.substring(1);

    function init() {
        service.getTrack(id).then(data => {
            SetTrack(data);
        })
        service.getAudioFeaturesForTrack(id).then(data => {
            SetAudioFeatures(data);
        })
    }

    return (
        <Layout title = "Track">
            <div className = "one-third column">
                <h3>{track.name}</h3>
                <p>Track on <a href = {"/album/#" + track.album?.id}>{track.album?.name}</a></p>
                <p>
                    {audioFeatures.length > 0 &&
                        track.artists?.map((v, i) => <span key = {i}>Artist: <a href = {"/artist/#" + v.id} className = "linkCursor">{v.name}</a></span>)
                    }
                </p>
                <p>Duration: {track.durationStr}</p>
                <a href = {track.url} target = "_blank" className = "borderless">
                    <button>Open {track.name} on Spotify</button>
                </a>
            </div>
            <div className = "two-thirds column">
                <div className = "double spacer"/>
                {
                    audioFeatures?.map((v, i) => <Thermometer key = {i} feature = {v}/>)
                }
            </div>
        </Layout>
    );
}

export default TrackPage;

export const Head: HeadFC = () => <title>Track</title>