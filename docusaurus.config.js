/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: 'PLC TIA .Net Library',
  tagline: 'Library for write PLC Program in .NET',
  url: 'https://plctianetlibrary-documentation.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'BMGK', // Usually your GitHub org/user name.
  projectName: 'PLC TIA .Net Library', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PLC TIA .Net Library',
      logo: {
        alt: 'TIA V16 Logo',
        src: 'img/TIAV16.svg',
      },
      items: [
        {
          to: 'docs/Sample',
          activeBasePath: 'docs/Sample',
          label: 'Docs',
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href:
            'https://github.com/bartoszgolebiowski/PLCTIA.NetLibrary-documentation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Privacy',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Terms',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/bartoszgolebiowski/PLCTIA.NetLibrary-documentation/edit/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
