import React from "react"

interface Props {
  children: string
  className?: string
  tag?: "p" | "span" | "h1" | "h2" | "h3" | "h4"
  weight?: string
}

const Label: React.FC<Props> = ({ tag, children, className, weight }) => {
  const Tag = tag || "span"
  const weightClass = weight ? ` ${weight}` : " font-normal"

  return (
    <Tag
      className={`block text-2xl md:text-4xl mb-2 sm:mb-2${weightClass}${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </Tag>
  )
}

export default Label
