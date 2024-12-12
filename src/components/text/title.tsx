import React from "react"

interface Props {
  children: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  margin?: string,
  card?: boolean
}

const Title: React.FC<Props> = ({ tag, children, className, margin, card }) => {
  const Tag = tag || "h1"
  const marginClass = margin ? ` ${margin}` : " mb-5"

  return (
      <Tag
      className={`${card ? 'text-4xl sm:text-[32px] md:text-[32px] font-highlight' : 'text-4xl sm:text-5xl md:text-6xl font-highlight'}${marginClass}${
          className ? ` ${className}` : ""
          }`}
      >
      {children}
    </Tag >
  )
}

export default Title
