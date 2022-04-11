module.exports = {
  siteMetadata: {
      title: `Marc Tinent | Escritor de Cosas`,
    siteUrl: `https://www.marctinent.com`
  },
  plugins: [{
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "G-QL5JM5Q3YF"
    }
  },
  `gatsby-plugin-preact`, "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: 'gatsby-plugin-html-attributes',
    options: {
      lang: 'es'
    }
  }
]
};