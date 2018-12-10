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
        content: "Share your longboardsetup.com",
      },
      {
        property: "og:description",
        content: "Build & share your dream setup your dream 🛹",
      },
      { property: "og:url", content: "https://longboardsetup.com" },
      {
        property: "og:image",
        content: "https://longboardsetup.com/social.jpg",
      },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css?family=Barlow+Condensed:400,700|Barlow:400,700",
      },
    ],
    script: [{ src: "/DrawSVGPlugin.min.js" }],
    script: [{ src: "/MorphSVGPlugin.min.js" }],
  },
  css: ["@/assets/css/main.scss"],

  /*
   ** Customize the progress bar color
   */
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL: "https://api.longboardsetup.com/wp-json",
  },
  plugins: [{ src: "~/plugins/vuex-persist", ssr: false }],
  generate: {
    dir: "docs",
    routes: ["/setup/decks", "/setup/trucks", "/setup/wheels"],
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
