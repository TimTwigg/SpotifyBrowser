import * as React from "react"
import { HeadFC } from "gatsby"
import Layout from "../components/layout"

const NotFoundPage = () => {
    return (
        <Layout title = "Not Found">
            <h1>Page Not Found</h1>
            <hr/>
            <p>
                Oops! Couldn't find that page...
            </p>
        </Layout>  
    );
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
