
import React from "react"

interface Props {
  className?: string
  children: JSX.Element
  type?: "normal" | "full"
}

const SectionBgImage: React.FC<Props> = ({ className, children, type }) => {
  const sectionType =
    type === "full" ? "py-20 my-10 sm:py-40 sm:my-20" : "py-10 sm:py-20"
  return (
    <section className={`${sectionType}${className ? ` ${className}` : ""}`}>
      {children}
    </section>
  )
}

export default SectionBgImage


