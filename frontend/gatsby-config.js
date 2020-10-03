require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})

const importPath = require('path')

module.exports = {
    siteMetadata: {
        title: 'Virginia Otero Perez',
        titleTemplate: '%s',
        description: 'Terapeuta de Crecimiento y Desarrollo Personal',
        url: process.env.API_URL || 'http://localhost:1337', // No trailing slash allowed!
        image: '/uploads/default-image.jpeg', // Path to your image you placed in the 'static' folder
        twitterUsername: '@virllyotero',
        instagramUsername: '@ella.vop',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        `gatsby-plugin-mdx`,
        {
            resolve: 'gatsby-source-strapi',
            options: {
                apiURL: process.env.API_URL || 'http://localhost:1337',
                contentTypes: ['article', 'category', 'user'],
                singleTypes: [`Homepage`],
                queryLimit: 1000,
            },
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'gatsby-starter-default',
                short_name: 'starter',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
            },
        },
        'gatsby-plugin-offline',
        'gatsby-plugin-typescript',
        'gatsby-plugin-styled-components',
        {
            resolve: 'gatsby-plugin-root-import',
            options: {
                src: importPath.join(__dirname, 'src'),
                assets: importPath.join(__dirname, 'src/assets'),
                pages: importPath.join(__dirname, 'src/pages'),
                templates: importPath.join(__dirname, 'src/templates'),
                components: importPath.join(__dirname, 'src/components'),
                utils: importPath.join(__dirname, 'src/utils'),
                styles: importPath.join(__dirname, 'src/styles'),
            },
        },
        {
            resolve: `gatsby-plugin-prefetch-google-fonts`,
            options: {
                fonts: [
                    {
                        family: `Yantramanav`,
                    },
                ],
            },
        },
    ],
}
