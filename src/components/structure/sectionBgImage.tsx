import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import React from "react"

interface Props {
  className?: string
  children: JSX.Element
  type?: "normal" | "full"
}

const SectionBgImage: React.FC<Props> = ({ className, children, type }) => {
  const sectionType =
    type === "full" ? "py-20 my-10 sm:py-40 sm:my-20" : "py-10 sm:py-20"
  const { placeholderImage } = useStaticQuery(
  graphql`
      query {
        placeholderImage: file(relativePath: { eq: "bg-pattern.png" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  )
const bImage = getImage(placeholderImage)

// Use like this:
const bgImage = convertToBgImage(bImage)
  return (
    // <section className={`${sectionType}${className ? ` ${className}` : ""}`}>
    //   {children}
    // </section>

    <BackgroundImage Tag="section" {...bgImage} preserveStackingContext>
      {children}
    </BackgroundImage>
  )
}

export default SectionBgImage


