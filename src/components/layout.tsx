import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import "./../styling/main.scss"

type DataProps = {
    title: string,
    children: any
}

function logIn() {

}

const Layout = ({ title, children } : DataProps) => {
    return (
        <div className = "layout">
            <nav>
                <span className = "nav-img three columns">
                    <StaticImage src = "./../images/spotifyLogo.png" alt = "Spotify" className = ""/>
                </span>
                <h3 className = "five columns">
                    <Link to = "/">
                        Spotify Browser
                    </Link>
                </h3>
                <span className = "three columns offset-by-one column">
                    <button id = "logInButton" onClick = {() => {logIn()}}>Log In</button>
                    <p id = "logInP" className = "hidden"/>
                </span>
            </nav>
            <main>
                {children}
            </main>
            <div className = "double spacer"/>
            <footer>
                This site made with Gatsby <StaticImage src = "./../images/gatsbyIcon.png" alt = "" width = {20}/>.
            </footer>
            <div className = "double spacer"/>
        </div>
    );
}

export default Layout;