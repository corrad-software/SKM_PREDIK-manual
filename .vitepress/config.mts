import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "PRIDIK",
  description: "Carta Alir Sistem PRIDIK",
  lang: "ms-MY",
  lastUpdated: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
      },
    ],
    ["meta", { name: "theme-color", content: "#FDDA0D" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
        color: "#FDDA0D",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#FDDA0D" }],
  ],

  themeConfig: {
    siteTitle: "PRIDIK",
    logo: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",

    nav: [
      { text: "Utama", link: "/" },
     
      {
        text: "Carta Alir",
        items: [
          { text: "Carta Alir Sistem", link: "/carta-alir-sistem" },
          { text: "Carta Alir Pengguna", link: "/carta-alir-pengguna" },
        ],
      },
      {
        text: "Paparan",
        items: [
          { text: "Pengurusan Entiti", link: "/pengurusan-entiti" },
          { text: "Muat Naik & Semakan", link: "/muat-naik-semakan-koperasi" },
          { text: "Paparan Indeks", link: "/paparan-indeks-koperasi" },
          { text: "Paparan Lejar", link: "/paparan-lejar-koperasi" },
        ],
      },
    ],

    sidebar: [
      {
        text: "",
        items: [
          { text: "Utama", link: "/" },
          {
            text: "Carta Alir",
            collapsed: false,
            items: [
              { text: "Carta Alir Sistem", link: "/carta-alir-sistem" },
              { text: "Carta Alir Pengguna", link: "/carta-alir-pengguna" },
            ],
          },
          {
            text: "Paparan",
            collapsed: false,
            items: [
              { text: "Pengurusan Entiti", link: "/pengurusan-entiti" },
              { text: "Muat Naik & Semakan", link: "/muat-naik-semakan-koperasi" },
              { text: "Paparan Indeks", link: "/paparan-indeks-koperasi" },
              { text: "Paparan Lejar", link: "/paparan-lejar-koperasi" },
            ],
          },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: "Sistem PRIDIK",
      copyright: `© ${new Date().getFullYear()} PRIDIK. Hak Cipta Terpelihara.`,
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Cari",
            buttonAriaLabel: "Cari",
          },
          modal: {
            noResultsText: "Tiada hasil carian untuk",
            resetButtonTitle: "Reset carian",
            footer: {
              selectText: "untuk pilih",
              navigateText: "untuk navigasi",
              closeText: "untuk tutup",
            },
          },
        },
      },
    },
  },

  // PWA Configuration
  pwa: {
    manifest: {
      name: "PRIDIK Manual",
      short_name: "PRIDIK",
      theme_color: "#FDDA0D",
      background_color: "#ffffff",
      display: "standalone",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://PRIDIK.kedah.gov.my/images/PRIDIK.png",
          sizes: "512x512",
          type: "image/png",
        },
      ],
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,jpg,svg}"],
    },
  },
});
