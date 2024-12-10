import React from "react"

interface Props {
  id?: string
  className?: string
  children: JSX.Element
  type?: "normal" | "full"
  isLast?: boolean
}

const Section: React.FC<Props> = ({
  className,
  children,
  type,
  isLast,
  id,
}) => {
  const sectionType =
    type === "full"
      ? isLast
        ? "py-20 mt-10 sm:py-40 sm:mt-20"
        : "py-20 my-10 sm:py-40 sm:my-20"
      : "py-10 sm:py-20"
  return (
    <section
      id={id}
      className={`${sectionType}${className ? ` ${className}` : ""}`}
    >
      {children}
    </section>
  )
}

export default Section
