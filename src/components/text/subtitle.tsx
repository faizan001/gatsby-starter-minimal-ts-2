import React from "react"

interface Props {
  children: string
  className?: string
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const SubTitle: React.FC<Props> = ({ tag, children, className }) => {
  const Tag = tag || "h3"

  return (
    <Tag
      className={`text-2xl sm:text-4xl mb-3 sm:mb-4 font-highlight${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  )
}

export default SubTitle
