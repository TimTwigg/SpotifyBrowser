import * as React from "react";
import { HeadFC } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Slider from "../components/carousel";
import TrackList from "../components/trackList";
import { SpotifyService } from "../services/spotifyService";
import { ResourceData } from "../data/resource-data";
import { TrackData } from "../data/track-data";

const service = new SpotifyService();

function getFromSelect(id: string): string {
    let selector = document.getElementById(id) as HTMLSelectElement;
    return selector.options[selector.selectedIndex].value;
}

function getFromInput(id: string): string {
    let input = document.getElementById(id) as HTMLInputElement;
    return input.value;
}

function loadProfile() {
    service.aboutMe().then((data) => {
        (document.getElementById("user") as HTMLHeadingElement).textContent = "Logged in As: " + data.name;
        let link = document.getElementById("openProfileLink") as HTMLAnchorElement;
        link.href = data.spotifyProfile;
        link.target = "_blank";
        let unknownImg = document.getElementById("unknown-image")!;
        unknownImg.classList.add("hidden");
        unknownImg.classList.remove("block");
        let image = document.getElementById("profile-image") as HTMLSpanElement;
        image.innerHTML = "<img src = '" + data.imageURL + "' alt = 'profile picture'/>";
        image.classList.remove("hidden");
        image.classList.add("block");
    })
}

const HomePage = () => {
    React.useEffect(() => {
        return () => {window.location.reload();}
    }, []);

    let init_rData: ResourceData[] = [];
    let init_tData: TrackData[] = [];

    var [data, SetData] = React.useState({
        rData: init_rData,
        tData: init_tData
    });

    function search() {
        let target = getFromSelect("searchTarget");
        let searchText = getFromInput("searchBar");
        service.searchFor(target, searchText).then(data => {
            if (data == null) console.log("Not Logged In");
            else {
                if (target == "track") SetData({rData: [], tData: data as TrackData[]});
                else SetData({rData: data, tData: []});
            }
        });
    }

    return (
        <Layout title = "Home">
            <div className = "one-third column">
                <button id = "loadInfo" onClick = {() => {loadProfile()}}>Load Info About Me</button>
                <h3 id = "user">Please Log In</h3>
                <span id = "unknown-image" className = "image-wrapper block"><StaticImage src = "./../images/unknown.jpg" alt = "unknown profile"/></span>
                <span id = "profile-image" className = "image-wrapper hidden"></span>
                <a id = "openProfileLink" className = "borderless block">
                    <button onClick = {() => {}}>Open Profile on Spotify</button>
                </a>
            </div>

            <div className = "two-thirds column">
                <h3>Search Spotify</h3>
                <div className = "content">
                    <input id = "searchBar" type = "text"/>
                    <select id = "searchTarget">
                        <option value = "artist">Artist</option>
                        <option value = "album">Album</option>
                        <option value = "track">Track</option>
                    </select>
                    <button onClick = {() => {search()}}>Search</button>
                    <Slider resources = {data.rData}/>
                    <TrackList resources = {data.tData} hideArtist = {false} hideAlbum = {false}/>
                </div>
            </div>
        </Layout>
    );
}

export default HomePage;

export const Head: HeadFC = () => <title>Spotify Browser</title>