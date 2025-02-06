import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MyReCourt",
  description: "Manual Pengguna MyReCourt",
  lang: "ms-MY",
  lastUpdated: true,

  head: [
    [
      "link",
      {
        rel: "icon",
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
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
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
      },
    ],
    [
      "link",
      {
        rel: "mask-icon",
        href: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
        color: "#FDDA0D",
      },
    ],
    [
      "meta",
      {
        name: "msapplication-TileImage",
        content: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
      },
    ],
    ["meta", { name: "msapplication-TileColor", content: "#FDDA0D" }],
  ],

  themeConfig: {
    siteTitle: "MyReCourt",
    logo: "https://myrecourt.kedah.gov.my/images/myrecourt.png",

    nav: [
      { text: "Utama", link: "/" },
      {
        text: "Akaun",
        items: [
          { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna" },
          { text: "Log Masuk", link: "/log-masuk" },
          { text: "Reset Kata Laluan", link: "/reset-kata-laluan" },
          { text: "Kemaskini Profil", link: "/kemaskini-profil" },
        ],
      },
      {
        text: "Permohonan",
        items: [
          { text: "Borang Permohonan", link: "/borang-permohonan" },
          { text: "Senarai Permohonan", link: "/senarai-permohonan" },
          { text: "Cetak Borang", link: "/cetak-borang" },
        ],
      },
      { text: "Pembayaran", link: "/pembayaran" },
    ],

    sidebar: [
      {
        text: "Manual Pengguna",
        items: [
          { text: "Utama", link: "/" },
          {
            text: "Pengurusan Akaun",
            collapsed: false,
            items: [
              { text: "Pendaftaran Pengguna", link: "/pendaftaran-pengguna" },
              { text: "Log Masuk", link: "/log-masuk" },
              { text: "Reset Kata Laluan", link: "/reset-kata-laluan" },
              { text: "Kemaskini Profil", link: "/kemaskini-profil" },
            ],
          },
          {
            text: "Pengurusan Permohonan",
            collapsed: false,
            items: [
              { text: "Borang Permohonan", link: "/borang-permohonan" },
              { text: "Senarai Permohonan", link: "/senarai-permohonan" },
              { text: "Cetak Borang", link: "/cetak-borang" },
            ],
          },
          { text: "Pembayaran", link: "/pembayaran" },
        ],
      },
    ],

    socialLinks: [],

    footer: {
      message: "Sistem MyReCourt",
      copyright: `© ${new Date().getFullYear()} MyReCourt. Hak Cipta Terpelihara.`,
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
      name: "MyReCourt Manual",
      short_name: "MyReCourt",
      theme_color: "#FDDA0D",
      background_color: "#ffffff",
      display: "standalone",
      scope: "/",
      start_url: "/",
      icons: [
        {
          src: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "https://myrecourt.kedah.gov.my/images/myrecourt.png",
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
