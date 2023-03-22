import * as React from "react"
import { HeadFC, PageProps, Link } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import { SpotifyService } from "../services/spotifyService";

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
        (document.getElementById("unknown-image")?.classList.add("hidden"));
        let image = document.getElementById("profile-image") as HTMLSpanElement;
        image.innerHTML = "<img src = '" + data.imageURL + "' alt = 'profile picture'/>";
    })
}

function search() {
    let target = getFromSelect("searchTarget");
    let searchText = getFromInput("searchBar");
    if (target == "artist") {
        
    }

    else if (target == "album") {

    }

    else if (target == "track") {

    }
}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Home">
            <div className = "one-third column">
                <button id = "loadInfo" onClick = {() => {loadProfile()}}>Load Info About Me</button>
                <h3 id = "user">Please Log In</h3>
                <span id = "unknown-image" className = "image-wrapper"><StaticImage src = "./../images/unknown.jpg" alt = "unknown profile"/></span>
                <span id = "profile-image" className = "image-wrapper hidden"></span>
                <a id = "openProfileLink">
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
                    <div className = "searchResults"/>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage

export const Head: HeadFC = () => <title>Spotify Browser Client</title>