// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
const {getDocusaurusVersions} = require('./src/config/versions.ts');

const slackLink =
  'https://join.slack.com/t/uncefact/shared_invite/zt-36yan5ezl-gFgWgckgKlZ5lIR4m_lVWg';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'UN Transparency Protocol',
  tagline:
    'Supporting governments and industry on practical measures to counter greenwashing by implementing supply chain traceability and transparency at the scale needed to achieve meaningful impacts on global sustainability outcomes.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://untp.unece.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'uncefact', // Usually your GitHub org/user name.
  projectName: 'spec-untp', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/docs',
          editUrl: ({versionDocsDirPath, docPath}) =>
            `https://opensource.unicc.org/un/unece/uncefact/spec-untp/edit/main/website/${versionDocsDirPath}/${docPath}`,
          versions: getDocusaurusVersions(),
          lastVersion: 'current',
        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/index.css'),
          ],
        },
        gtag: {
          trackingID: 'G-4DWX800CQ7',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      slackLink,
      mailingListLink: 'https://gaggle.email/join/untp@gaggle.email',
      colorMode: {
        disableSwitch: true,
      },
      image: 'img/social-card.png',
      navbar: {
        title: 'TP',
        logo: {
          alt: 'United Nations Transparency Protocol',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {to: '/docs/about', label: 'About UNTP', position: 'right'},
          {
            to: '/docs/specification',
            label: 'Specification',
            position: 'right',
          },
          {
            to: '/docs/business-case',
            label: 'Benefits',
            position: 'right',
          },
          {
            to: '/docs/governance',
            label: 'Governance',
            position: 'right',
          },

          {
            to: '/docs/tools-and-support',
            label: 'Guidance',
            position: 'right',
          },

          {
            to: '/docs/implementations',
            label: 'Implementations',
            position: 'right',
          },
          {
            to: '/versions',
            label: 'Versions',
            position: 'right',
          },
          {
            href: slackLink,
            position: 'right',
            html: '<svg class="icon icon-slack"><use xlink:href="#slack"></use></svg><span class="menu-item-name">Slack</span>',
            className: 'navbar-slack-link',
          },
          {
            href: 'https://groups.google.com/g/transparency-uncefact',
            position: 'right',
            html: '<svg class="icon"><use xlink:href="#mail"></use></svg><span class="menu-item-name">Mailing List</span>',
            className: 'navbar-mailing-list-link',
          },
          {
            href: 'https://opensource.unicc.org/un/unece/uncefact/spec-untp',
            html: '<svg class="icon"><use xlink:href="#gitlab"></use></svg><span class="menu-item-name">GitLab</span>',
            className: 'navbar-gitlab-link',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            label: 'Print this specification as PDF',
            to: 'https://untp.unece.org/un-transparency-protocol.pdf',
            target: '_blank',
          },
          {
            label: 'Terms and Conditions of Use',
            to: '/terms',
          },
          {
            label: 'Privacy Notice',
            to: '/privacy',
          },
        ],
        copyright: `© United Nations Economic Commission for Europe`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  plugins: ['docusaurus-plugin-llms', './plugins/carousel-generator'],
};

module.exports = config;
