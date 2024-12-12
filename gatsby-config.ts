import type { GatsbyConfig } from "gatsby";
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Flair - Get your fashion items delivered to your door-step within 2 hours`,
    description: `Flair is where you can get your new fashion items delivered from wherever in town a store is located to you door-step within 2 hours.`,
    image: `/app_showcase.png`,
    siteUrl: `https://www.flair-marketplace.com`,
    keywords: `Fashion delivery, 2-hour delivery service, Local fashion stores, Flair app, Express your style, Fashion items, Fixed delivery fee, Immediate refunds, Fashion shopping, Local delivery, Door-step delivery, Free returns,`,
    author: `@flair`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-scroll-reveal",
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-google-gtag",
        trackingIds: [
          "GTM-PT5T3B8Q", // Google Analytics / GA OLD= G-PX5VQR8D62
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        gtagConfig: {
      send_page_view: true, // Disables automatic pageview tracking
       },
      pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [`https://fonts.bunny.net`],
        web: [
          {
            name: `Bebas Neue`,
            file: `https://fonts.bunny.net/css?family=bebas-neue:400`,
          },
          {
            name: `Roboto`,
            file: `https://fonts.bunny.net/css?family=roboto:100,300,400,500,700,900`,
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-cookiebot",
      options: {
        cookiebotId: "a67705b8-1bdb-47a7-8220-fdc645570074", // Required. Site's Cookiebot ID.
        // manualMode: true, // Optional. Turns on Cookiebot's manual mode. Defaults to false.
        // blockGtm: false, //  Optional. Skip blocking of GTM. Defaults to true if manualMode is set to true.
        // includeInDevelopment: true, // Optional. Enables plugin in development. Will cause gatsby-plugin-google-tagmanager to thrown an error when pushing to dataLayer. Defaults to false.
        // pluginDebug: true, // Optional. Debug mode for plugin development. Defaults to false.
      },
    },
    // {
    //   resolve: "gatsby-source-strapi",
    //   options: {
    //     apiURL: process.env.STRAPI_API_URL,
    //     accessToken: process.env.STRAPI_TOKEN,
    //     collectionTypes: [
    //       {
    //         singularName: "article",
    //         queryParams: {
    //           // publicationState:
    //           //   process.env.GATSBY_IS_PREVIEW === "true" ? "preview" : "live",
    //           populate: {
    //             cover: "*",
    //           },
    //         },
    //       },
    //       {
    //         singularName: "author",
    //       },
    //       {
    //         singularName: "category",
    //       },
    //     ],
    //     singleTypes: [
    //       {
    //         singularName: "global",
    //         queryParams: {
    //           populate: {
    //             favicon: "*",
    //             defaultSeo: {
    //               populate: "*",
    //             },
    //           },
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
