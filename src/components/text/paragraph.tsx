import React from "react"

interface Props {
  children: string | JSX.Element
  className?: string
  tag?: "p" | "span"
}

const Paragraph: React.FC<Props> = ({ tag, children, className }) => {
  const Tag = tag || "p"

  return (
    <Tag className={`text-base${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  )
}

export default Paragraph
