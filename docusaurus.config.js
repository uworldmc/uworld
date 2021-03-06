const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'U\'World',
  tagline: 'U\'World est un serveur minecraft cracké Survie, OneBlock, MissileWars, Practice et bien plus de l\'1.8 à l\'1.19',
  url: 'https://uworldmc.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'uworldmc', // Usually your GitHub org/user name.
  projectName: 'uworld', // Usually your repo name.

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/wiki',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/uworldmc/uworld/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '845063437',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'UA-194379266-1',
          anonymizeIP: false,
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      navbar: {
        title: 'U\'World',
        logo: {
          alt: 'U\'World Logo',
          src: 'img/uworld.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Wiki',
          },
          {
            to: '/ranks',
            label: 'Ranks',
            position: 'left'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/McZpnvzhrM',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Top-Serveurs.net',
                href: 'https://vote.top-serveurs.net/minecraft/uworld',
              },
              {
                label: 'ServeursMinecraft.org',
                href: 'https://www.serveursminecraft.org/serveur/5550/',
              },
              {
                label: 'LSM.org',
                href: 'https://www.liste-serveurs-minecraft.org/serveur-minecraft/uworld-serveur-survie-crack-accepte/',
              },
              {
                label: 'Liste-Serveurs.fr',
                href: 'https://www.liste-serveurs.fr/server-u-world-survie-oneblock.350',
              },
              {
                label: 'Serveur-Prive.net',
                href: 'https://serveur-prive.net/minecraft/u-world-8693',
              },
            ],
          },
        ],
        copyright: `U'World est un serveur minecraft cracké Survie, OneBlock, MissileWars, Practice et bien plus de l'1.8 à l'1.19`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});