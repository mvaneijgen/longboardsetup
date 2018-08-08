// const routerBase =
//   process.env.DEPLOY_ENV === "GH_PAGES"
//     ? {
//         router: {
//           base: "/longboardsetup/"
//         }
//       }
//     : {};

module.exports = {
  /*
  ** Headers of the page
  */
  css: ["@/assets/css/main.scss"],
  // ...routerBase,
  head: {
    title: "Longboard Setup",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Build your dream setup",
      },
      { property: "og:type", content: "article" },
      {
        property: "og:title",
        content: "Share your longboard setup | longboardsetup.com",
      },
      {
        property: "og:description",
        content: "Build your dream setup",
      },
      { property: "og:url", content: "https://longboardsetup.com" },
      {
        property: "og:image",
        content: "https://longboardsetup.com/social.jpg",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [{ src: "/DrawSVGPlugin.min.js" }],
    // script: [{ src: "/MorphSVGPlugin.min.js" }],
  },
  /*
  ** Customize the progress bar color
  */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "https://api.longboardsetup.com/wp-json",
  },
  generate: {
    dir: "docs",
  },
  loading: {
    color: "#E64",
    height: "8px",
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
