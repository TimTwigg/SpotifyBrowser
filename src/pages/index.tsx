import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout";

const IndexPage: React.FC<PageProps> = () => {
    return (
        <Layout title = "Home">
            <h1>Spotify</h1>
        </Layout>
    );
}

export default IndexPage

export const Head: HeadFC = () => <title>Spotify Browser Client</title>