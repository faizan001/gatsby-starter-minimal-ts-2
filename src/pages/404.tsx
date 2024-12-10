import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import SubTitle from "../components/text/subtitle"
import logo_black from "../images/logo_black.svg"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <img
        className="block w-auto max-w-[85px] sm:max-w-none"
        alt="Flair Logo"
        src={logo_black}
        loading="eager"
      />
      <SubTitle className="mt-10">Page not found</SubTitle>
      <p style={paragraphStyles}>
        Sorry, we couldn’t find what you were looking for.
        <br />
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/" className="text-main-blue hover:opacity-80">
          Go home
        </Link>
        .
      </p>
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
