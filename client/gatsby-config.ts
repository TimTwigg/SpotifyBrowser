import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
    pathPrefix: "/spotifyassignment",
    siteMetadata: {
        title: "Spotify Assignment",
        siteUrl: "https://timtwigg.github.io/spotifyassignment"
    },
    graphqlTypegen: true,
    plugins: [
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                "icon": "src/images/spotifyIcon.png"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                "name": "images",
                "path": "./src/images/"
            },
            __key: "images"
        }
    ]
};

export default config;
