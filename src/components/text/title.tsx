import React from "react"

interface Props {
  children: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  margin?: string
}

const Title: React.FC<Props> = ({ tag, children, className, margin }) => {
  const Tag = tag || "h1"
  const marginClass = margin ? ` ${margin}` : " mb-5"

  return (
    <Tag
      className={`text-4xl sm:text-5xl md:text-6xl font-highlight${marginClass}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  )
}

export default Title
