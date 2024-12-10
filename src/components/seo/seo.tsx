import React from "react"
import { useSiteMetadata } from "../../hooks/useSiteMetadata"

interface Props {
  title?: string
  description?: string
  pathname: string
  children?: string
  keywords?: string
}

export const SEO = ({
  title,
  description,
  pathname,
  children,
  keywords,
}: Props) => {
  const {
    siteUrl,
    siteTitle,
    siteDescription,
    siteAuthor,
    siteKeywords,
    siteFavicon,
    siteShareImage,
  } = useSiteMetadata()

  const seo = {
    title: title || siteTitle,
    description: description || siteDescription,
    keywords: keywords || siteKeywords,
    author: siteAuthor,
    url: `${siteUrl}${pathname}`,
    image: `${siteUrl}${siteShareImage}`,
  }

  return (
    <>
      <title>{seo.title}</title>

      <meta content="utf-8" httpEquiv="content-Type" />
      <meta name="language" content="English" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={seo.url} />

      {/* theme colors */}
      <meta name="theme-color" content="#fff" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#080e20" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="#080e20" />

      {/* Basic meta info */}
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <meta name="keywords" content={seo.keywords} />

      {/* OpenGraph meta */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />

      {/* meta for twitter */}
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:card" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {children}
    </>
  )
}