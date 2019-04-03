module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/plants`,
        name: "markdown-pages",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
