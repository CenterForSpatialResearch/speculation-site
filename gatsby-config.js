module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
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
