const dotenv = require('dotenv');
const path = require("path");
const _ = require("lodash");

if (process.env.ENVIRONMENT !== 'production') {
  dotenv.config();
}

const { spaceId, accessToken } = process.env;

module.exports = {
  siteMetadata: {
    title: 'Manual de Usuario Zauru',
    siteUrl: 'https://docs.zauru.com',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-sitemap',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-1544981-9`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Manual Zauru`,
        short_name: `ZauruDocs`,
        start_url: `/`,
        background_color: `#FFF`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/img/favicon256.png`
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId,
        accessToken,
      },
    },
  ],
};