// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Freeday',
    tagline: 'Dayoff management with chat bots',
    url: 'https://doc.freeday-app.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'freeday-app',
    projectName: 'freeday-doc',
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js')
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            })
        ],
        [
            'redocusaurus',
            {
                specs: [{
                    route: '/api/',
                    spec: './redoc/api.yaml'
                }]
            }
        ]
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        colorMode: {
            defaultMode: 'dark'
        },
        navbar: {
            title: 'Freeday',
            logo: {
                alt: 'Freeday logo',
                src: 'img/logo.png'
            },
            items: [
                {
                    type: 'doc',
                    docId: 'getting-started',
                    position: 'left',
                    label: 'Documentation'
                },
                {
                    position: 'left',
                    label: 'API',
                    to: '/api'
                },
                {
                    href: 'https://github.com/freeday-app',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Getting started',
                            to: '/docs/getting-started'
                        },
                        {
                            label: 'API reference',
                            to: '/api'
                        }
                    ]
                },
                // {
                //     title: 'Community',
                //     items: [
                //         {
                //             label: 'Stack Overflow',
                //             href: 'https://stackoverflow.com/questions/tagged/freeday'
                //         }
                //     ]
                // },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/freeday-app'
                        },
                        {
                            label: 'Docker Hub',
                            href: 'https://hub.docker.com/repository/docker/freedayapp'
                        },
                        {
                            label: 'Official Website',
                            href: 'https://freeday-app.com/'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Freeday. Built with Docusaurus.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme
        }
    })
};

module.exports = config;
