import { graphql, useStaticQuery } from "gatsby";

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          author
          keywords
        }
      }
    }
  `);
  // strapiGlobal {
  //   siteUrl
  //   defaultSeo {
  //     metaTitle
  //     metaDescription
  //     keywords
  //     author
  //     favicon {
  //       localFile {
  //         publicURL
  //       }
  //     }
  //     shareImage {
  //       localFile {
  //         publicURL
  //       }
  //     }
  //   }
  // }

  return {
    siteUrl: data.site.siteMetadata.siteUrl,
    siteTitle: data.site.siteMetadata.title,
    siteDescription: data.site.siteMetadata.description,
    siteAuthor: data.site.siteMetadata.author,
    siteKeywords: data.site.siteMetadata.keywords,
    siteFavicon: data.site.siteMetadata.image,
    siteShareImage: data.site.siteMetadata.image,
    // siteUrl: data.strapiGlobal.siteUrl || data.site.siteMetadata.siteUrl,
    // siteTitle:
    //   data.strapiGlobal.defaultSeo.metaTitle || data.site.siteMetadata.title,
    // siteDescription:
    //   data.strapiGlobal.defaultSeo.metaDescription ||
    //   data.site.siteMetadata.description,
    // siteAuthor:
    //   data.strapiGlobal.defaultSeo.author || data.site.siteMetadata.author,
    // siteKeywords:
    //   data.strapiGlobal.defaultSeo.keywords ||
    //   data.site.siteMetadata.keywords,
    // siteFavicon:
    //   data.strapiGlobal.defaultSeo.favicon.localFile.publicURL ||
    //   data.site.siteMetadata.image,
    // siteShareImage:
    //   data.strapiGlobal.defaultSeo.shareImage.localFile.publicURL ||
    //   data.site.siteMetadata.image,
  };
};
