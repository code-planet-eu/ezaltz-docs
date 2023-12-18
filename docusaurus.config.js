// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs EZAltz.com",
  tagline: "Documentation for EZAltz.com",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.ezaltz.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ezaltz.com", // Usually your GitHub org/user name.
  projectName: "knowladge-base", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ru"],
    localeConfigs: {
      en: {
        label: "English",
        htmlLang: "en-US",
      },
      ru: {
        label: "Русский",
        htmlLang: "ru-RU",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/", // Set this value to '/'.
          sidebarCollapsible: false,
          numberPrefixParser: true,
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      // Replace with your project's social card
      image: "img/banner.png",
      navbar: {
        title: "EZAltz.com",
        // logo: {
        //   alt: "My Site Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "defaultSidebar",
          //   position: "left",
          //   label: "Docs",
          // },
          {
            href: "https://beta.ezaltz.com",
            position: "right",
            label: "Dashboard",
          },
          {
            href: "https://discord.gg/ezaltz",
            position: "right",
            label: "Discord",
          },
          // {
          //   type: "localeDropdown",
          //   position: "right",
          // },
        ],
      },
      // footer: {
      //   style: "dark",
      //   links: [
      //     {
      //       title: "Docs",
      //       items: [
      //         {
      //           label: "Docs",
      //           to: "/docs/intro",
      //         },
      //       ],
      //     },
      //     {
      //       title: "Community",
      //       items: [
      //         {
      //           label: "Discord",
      //           href: "https://discord.gg/ezaltz",
      //         },
      //       ],
      //     },
      //     // {
      //     //   title: "More",
      //     //   items: [
      //     //     {
      //     //       label: "GitHub",
      //     //       href: "https://github.com/facebook/docusaurus",
      //     //     },
      //     //   ],
      //     // },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
