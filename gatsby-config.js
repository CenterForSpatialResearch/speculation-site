module.exports = {
  pathPrefix: "/speculation-site",
  siteMetadata: {
    siteUrl: "https://darebrawley.github.io",
    title: "speculation-site",
  },
  plugins: [
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
