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
                <Link to = "/">
                    <h3>Spotify Browser</h3>
                </Link>
                <span className = "logInSpace">
                    <button id = "logInButton" onClick = {() => {logIn()}}>Log In</button>
                    <p id = "logInP" className = "hidden"/>
                </span>
            </nav>
            <main className = "container">
                {children}
            </main>
            <div className = "double spacer"/>
            <footer>
                This site made with Gatsby <StaticImage src = "./../images/gatsbyIcon.png" alt = "" width = {20}/>.
            </footer>
            <div className = "footer spacer"/>
        </div>
    );
}

export default Layout;