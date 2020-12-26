// All Of Your Site Conifuration

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    title: "Digital Flex Solution WebSite",
    titleTemplate: `DFS-Site`,
    description: `We are a technology team focused on adding value quickly and supporting continual improvement.`,
    author: `@HasThemes`,
    twitterUsername: `@HasThemes`,
    image: 'landing.png',
    siteUrl: 'https://digitalflexsolutiontrythememas.gtsb.io/',
    getform: "https://getform.io/f/58c49e90-e767-4e18-959e-4fcd84bf8659",
    copyright: " December 2020—2021 <a href='https://digitalflexsolutions.com/' target='_blank' rel='noopener noreferrer'>digitalflexsolutions.com</a>",
    social: {
      facebook: "https://www.facebook.com",
      twitter: "https://www.twitter.com",
      instagram: "https://www.instagram.com",
      linkedin: "https://www.linkedin.com"
    },
    contact: {
      phone: '(+44)-01738-506283',
      address: "58 Howard Street #2 San Francisco, CA 941",
      email: 'info@digitalflexsolutions.com',
      website: "https://digitalflexsolutions.com/",
      rating: "4.9",
      customers: "700",
      clients: "3200",
      addressInfos: [
        {
          "id": "san-francisco",
          "state": "San Francisco",
          "address": "58 Howard Street #2 San Francisco, CA 941",
          "email": "contact.sanfrancisco@mitech.com",
          "phone": "(+68)1221 09876"
        },
        {
          "id": "new-york",
          "state": "New York",
          "address": "58 Howard Street #14 New York",
          "email": "contact.newyork@mitech.com",
          "phone": "(+68)1221 09878"
        },
        {
          "id": "russia",
          "state": "Russia",
          "address": "The Courtyard Building 11 Curtain Road, Russia",
          "email": "contact.russia@mitech.com",
          "phone": "(+68)1221 09877"
        }
      ]
    }
  },
  mapping: {
    "MarkdownRemark.frontmatter.author": `AuthorsJson.name`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-styled-components`,
    'gatsby-plugin-loadable-components-ssr',
    `gatsby-plugin-preact`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/containers/layout/layout.js`),
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        tableOfContents: {
          heading: null,
          maxDepth: 6,
        },
        "excerpt_separator": `<!-- endexcerpt -->`,
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `fonts`,
        path: `${__dirname}/src/assets/fonts`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data`,
        ignore: [`**/\.*`]
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        "name": "Mitech",
        "short_name": "mitech",
        "theme_color": "#086ad8",
        "background_color": "#ffffff",
        "display": "standalone",
        "scope": "/",
        "start_url": "/",
        "icon": "src/assets/images/favicon.png",
        "icons": [
          {
            "src": "/icons/icon-72x72.png",
            "sizes": "72x72",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-96x96.png",
            "sizes": "96x96",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-128x128.png",
            "sizes": "128x128",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-144x144.png",
            "sizes": "144x144",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-152x152.png",
            "sizes": "152x152",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png"
          }
        ],
      },
    },
    {
      resolve: `gatsby-plugin-breadcrumb`,
      options: {
        useAutoGen: true,
        autoGenHomeLabel: `Home`,
        exclude: [
          `/dev-404-page`,
          `/404`,
          `/404.html`,
        ],
        useClassNames: true
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://digitalflexsolutiontrythememas.gtsb.io/',
        sitemap: 'https://digitalflexsolutiontrythememas.gtsb.io/dfssitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [
          `/about-us/`,
          `/case-studies/`,
          `/contact-us/`,
          `/index-appointment/`,
          `/index-infotechno/`,
          `/index-processing/`,
          `/index-resolutions/`,
          `/index-services/`,
          `/it-services/`,
          `/it-solutions/`,
          `/rpa-services/`,
          `/leadership/`,
          `/it-service/*`,
          `/case-study/*`,
          `/case-study/*`,
          `/blogs/*`
        ]
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `gt4nxopyo75x`,//process.env.SPACE_ID,
        accessToken: `Ndcn4vpPlklzoyIku6crFiczaw6BWnpF9yQ_WrrWlhE`//process.env.CONTENT_DELIVERY_ID
        // spaceId: process.env.SPACE_ID,
        // accessToken: process.env.CONTENT_DELIVERY_ID
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
          // Setting this parameter is optional
          anonymize: true
        },
        facebookPixel: {
          pixelId: 'YOUR_FACEBOOK_PIXEL_ID'
        },
        // Defines the environments where the tracking should be available  - default is ["production"]
        environments: ['production', 'development'],
      },
    },
    {
      resolve: `gatsby-plugin-amp`,
      options: {
        // analytics: {
        //   type: 'gtag',
        //   dataCredentials: 'include',
        //   config: {
        //     vars: {
        //       gtag_id: <GA_TRACKING_ID>,
        //       config: {
        //         <GA_TRACKING_ID>: {
        //           page_location: '{{pathname}}'
        //         },
        //       },
        //     },
        //   },
        // },
        canonicalBaseUrl: 'https://digitalflexsolutiontrythememas.gtsb.io/',
        components: ['amp-img'],
        excludedPaths: ['/404*', '/'],
        pathIdentifier: 'amp/',
        relAmpHtmlPattern: '{{canonicalBaseUrl}}{{pathname}}{{pathIdentifier}}',
        useAmpClientIdApi: true,
      },
    }, 
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/dfssitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: [`/case-studies/*`, `/path/to/page`],
        // query: `
        //   {
        //     wp {
        //       generalSettings {
        //         siteUrl
        //       }
        //     }
  
        //     allSitePage {
        //       nodes {
        //         path
        //       }
        //     }
        // }`,
        // resolveSiteUrl: ({site, allSitePage}) => {
        //   //Alternatively, you may also pass in an environment variable (or any location) at the beginning of your `gatsby-config.js`.
        //   return site.wp.generalSettings.siteUrl
        // },
        // serialize: ({ site, allSitePage }) =>
        //   allSitePage.nodes.map(node => {
        //     return {
        //       url: `${site.wp.generalSettings.siteUrl}${node.path}`,
        //       changefreq: `daily`,
        //       priority: 0.7,
        //     }
        //   })
      }
    },   
  ]
}
