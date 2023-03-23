import * as React from "react";
import { TrackData } from "../data/track-data";
import "./../styling/tracklist.scss";

type TrackListProps = {
    resources: TrackData[],
    hideArtist: boolean,
    hideAlbum: boolean
}

const TrackList = ({ resources, hideArtist, hideAlbum } : TrackListProps) => {
    return (
        <div>
            {resources.length > 0 &&
                <table>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Track</th>
                            <th scope="col">Duration</th>
                            {!hideArtist && <th scope="col">Primary Artist</th>}
                            {!hideAlbum && <th scope="col">Album</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            resources.map((v, i) => (
                                <tr key = {i}>
                                    <td>{i+1}</td>
                                    <td><a href = {"/" + v.category + "/#" + v.id}>{v.name}</a></td>
                                    <td>{v.durationStr}</td>
                                    {!hideArtist && <td><a href = {"/artist/#" + v.primaryArtist.id}>{v.artists[0].name}</a></td>}
                                    {!hideAlbum && <td><a href = {"/album/#" + v.album.id}>{v.album.name}</a></td>}
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            }
        </div>
    );
}

export default TrackList;