/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mathbook`,
    siteUrl: `https://www.yourdomain.tld`,
    menuLinks:[
      {
        name:'Strona główna',
        link:'/'
      },
      {
        name:'Strona główna',
        link:'/'
      }
    ]
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};