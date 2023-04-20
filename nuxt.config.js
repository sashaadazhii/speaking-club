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
  },
  proxy: {
    "/api": "https://13f5-31-128-76-137.eu.ngrok.io",
    // "/api": "https://ec2-100-26-100-255.compute-1.amazonaws.com",
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
