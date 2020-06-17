module.exports = {
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-katex`,
            options: {
              // Add any KaTeX options from https://github.com/KaTeX/KaTeX/blob/master/docs/options.md here
              strict: `ignore`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: { basePath: `/blog` },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-sass`,
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Snow's Homepage`,
    titleTemplate: `%s | Snow's Homepage`,
    author: `Snow`,
    description: `My site description...`,
    image: ``,
    url: `https://www.snowyuki31.com/`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`,
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`,
      },
    ],
    twitterUsername: "",
  },
}
