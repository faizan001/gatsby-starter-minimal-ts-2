import React from "react"

interface Props {
  className?: string
  size?: "sm" | "md"
  children: JSX.Element,
  isLeft?: boolean
  isRight?: boolean
  isBoth?: boolean
}


const Container: React.FC<Props> = ({ className, children, size, isLeft, isRight, isBoth, ...props }) => {
  const sizeClass = size === "sm" ? " max-w-[740px]" : " max-w-[1440px]"
  return (
    <div
      className={`${isLeft && isLeft ? 'w-full mx-auto sm:ps-0 sm:pe:6 lg:ps-0 lg:pe-8' : 'w-full mx-auto px-4 sm:px-6 lg:px-8' && isRight && isRight ? 'w-full mx-auto sm:pe-0 sm:ps:6 lg:pe-0 lg:ps-8' : 'w-full mx-auto px-4 sm:px-6 lg:px-8' && isBoth && isBoth ? 'w-full mx-auto p-0' : 'w-full mx-auto px-4 sm:px-6 lg:px-8'} ${sizeClass}${
        className ? ` ${className}` : ""
        }`}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
