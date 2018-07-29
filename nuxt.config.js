const routerBase =
  process.env.DEPLOY_ENV === "GH_PAGES"
    ? {
        router: {
          base: "/longboardsetup/"
        }
      }
    : {};

module.exports = {
  /*
  ** Headers of the page
  */
  css: ["@/assets/css/main.scss"],
  ...routerBase,
  head: {
    title: "Longboard Setup",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
      { property: "og:type", content: "article" },
      { property: "og:title", content: "Wish list app | M van Eijgen" },
      {
        property: "og:description",
        content:
          "Op de één of andere manier vinden mensen het lastig om iets voor mij als cadeau te bedenken, terwijl ik denk dat het super makkelijk is..."
      },
      { property: "og:url", content: "https://mvaneijgen.nl/longboardsetup" },
      {
        property: "og:image",
        content: "https://mvaneijgen.nl/longboardsetup/social.jpg"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
  ** Customize the progress bar color
  */

  generate: {
    dir: "docs"
  },
  loading: { color: "#E64" },
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
          exclude: /(node_modules)/
        });
      }
    }
  }
};
