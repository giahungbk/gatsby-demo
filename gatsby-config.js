/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 * gatsby-source-filesystem: read file system
 * gatsby-plugin-sass: sass => css
 * gatsby-transformer-remark: quet file markdown trong path
 *  plugin gatsby-plugin-sharp vì gatsby-remark-images: xu ly anh
 */

module.exports = {
  siteMetadata: {
    title: "Gatsby Test",
    author: "Mr.X",
  },
  plugins: [
    {
      resolve: `gatsby-source-contentful`,
      options: {
        //spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        //accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        spaceId: 'zdhzm3gdml81',
        accessToken: 'YQd1HhG99AYvvD5fddOmVXaDob0NQrM6iGoHVWU8m1c',
        environment: "master",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-images
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/Header.js`),
      },
    },
  ],
}
