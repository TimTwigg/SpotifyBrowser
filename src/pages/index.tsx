import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { GatsbyImage, getImage, IGatsbyImageData, StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

var init = false;

function loadProfile() {

}

function search() {

}

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Home">
            <div className = "one-third column">
                <button id = "loadInfo" onClick = {() => {loadProfile()}}>Load Info About Me</button>
                <h3 id = "user">Please Log In</h3>
                <span id = "profile-image" className = "image-wrapper"><StaticImage src = "./../images/unknown.jpg" alt = "unknown profile"/></span>
                <button onClick = {() => {}}>Open Profile on Spotify</button>
            </div>

            <div className = "two-thirds column">
                <h3>Search Spotify</h3>
                <div className = "content">
                    <input id = "searchBar" type = "text"/>
                    <select>
                        <option value = "artist">Artist</option>
                        <option value = "album">Album</option>
                        <option value = "track">Track</option>
                    </select>
                    <button onClick = {() => {search()}}>Search</button>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage

export const Head: HeadFC = () => <title>Spotify Browser Client</title>