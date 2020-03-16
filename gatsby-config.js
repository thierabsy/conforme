module.exports = {
  siteMetadata: {
    title: `Conforme`,
    description: `Cabinet de consultance.`,
    author: `@conforme_consulting`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `produits`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/data`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Conforme Consulting`,
        short_name: `Conforme C.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#2A92D1`,
        display: `minimal-ui`,
        icon: `src/images/icons/icon-64x64.png`, 
        icons: [
          {
            src: `/icons/icon-72x72.png`,
            sizes: `72x72`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-96x96.png`,
            sizes: `96x96`,
            type: `image/png`,
          },
          {
            src: `/icons/icon-128x128.png`,
            sizes: `128x128`,
            type: `image/png`,
          },
          // {
          //   src: `/icons/icon-144x144.png`,
          //   sizes: `144x144`,
          //   type: `image/png`,
          // },
          // {
          //   src: `/icons/icon-192x192.png`,
          //   sizes: `192x192`,
          //   type: `image/png`,
          // },
          // {
          //   src: `/icons/icon-512x512.png`,
          //   sizes: `512x512`,
          //   type: `image/png`,
          // },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
