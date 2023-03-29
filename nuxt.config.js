export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "speaking-club",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    script: [],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style"],

  // plugins: [{ src: "~/plugins/fondy.js", mode: "client" }],
  plugins: [
    { src: "~/plugins/vuelidate.js" },
    { src: "~/plugins/gsap", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/router"],

  modules: ["@nuxtjs/axios", "nuxt-seo", "@nuxtjs/proxy"],
  axios: {
    proxy: true,
    // credentials: true,
    // baseUrl: "http://localhost:3000",
    // common: {
    //   Accept: "application/json, text/plain, */*",
    //   "Access-Control-Allow-Origin": "*",
    //   "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
    //   // "Access-Control-Allow-Credentials": "true",
    //   "Access-Control-Allow-Headers":
    //     "Authorization, Origin, X-Requested-With, Content-Type, Accept",
    //   Authorization: "X-Token u8542TTTty3NerPE7lT4qCSmXpnZHQ0TvQCeMMi-4pTs",
    //   "X-Token": 'u8542TTTty3NerPE7lT4qCSmXpnZHQ0TvQCeMMi-4pTs"',
    // },
  },
  proxy: {
    "/webhook": "https://13f5-31-128-76-137.eu.ngrok.io",
    "/create": "https://api.monobank.ua/api/merchant/invoice",
  },

  seo: {
    // Module Options
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vueLoader: {
      transformAssetUrls: {
        video: ["src", "poster"],
        source: "src",
      },
    },
    transpile: ["gsap"],
  },
};
