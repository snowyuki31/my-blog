module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          { resolve: `gatsby-remark-smartypants` },
          { resolve: `gatsby-remark-katex` },
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        icon: `src/images/icon2.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        basePath: `/blog`,
        mdxOtherwiseConfigured: true,
      },
    },
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
