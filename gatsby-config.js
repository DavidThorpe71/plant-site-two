module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/plants`,
        name: "plants",
      },
    },
    `gatsby-transformer-remark`,
  ],
}
