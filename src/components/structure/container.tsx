import React from "react"

interface Props {
  className?: string
  size?: "sm" | "md"
  children: JSX.Element
}

const Container: React.FC<Props> = ({ className, children, size, ...props }) => {
  const sizeClass = size === "sm" ? " max-w-[740px]" : " max-w-[1440px]"
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8${sizeClass}${
        className ? ` ${className}` : ""
        }`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
