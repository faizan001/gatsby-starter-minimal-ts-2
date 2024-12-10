import React from "react"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"

interface Props {
  location: any
  children: JSX.Element
}

export const Layout: React.FC<Props> = ({ children, location }) => {
  return (
    <>
      <Navbar location={location} />
      <main>{children}</main>
      <Footer />
    </>
  )
}
