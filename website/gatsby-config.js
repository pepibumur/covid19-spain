const remarkSlug = require("remark-slug")

module.exports = {
  siteMetadata: {
    title: `La reproducción de COVID19 en España`,
    description: `Página web informativa que procesa los datos ofrecidos por las distintas regiones en España respecto al número de infectados y fallecidos por COVID19 y ofrece información sobre la tasa de reproducción efectiva (Rt).`,
    siteUrl: "https://estadocovid19.es",
    keywords: [
      `COVID-19 España`,
      "coronavirus",
      "crisis coronavirus",
      "covid",
      "confinamiento"
    ]
  },
  plugins: [
    'gatsby-plugin-theme-ui',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
          },
        ],
        remarkPlugins: [remarkSlug],
      },
    },
    `gatsby-plugin-robots-txt`,
  ],
}
