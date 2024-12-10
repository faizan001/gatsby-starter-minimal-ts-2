import React from "react"

interface Props {
  href: string
  className?: string
  children: JSX.Element
}

const ButtonOutlineSquare: React.FC<Props> = ({
  href,
  children,
  className,
}) => {
  return (
    <button
      className={`w-full max-w-[236px] cursor-default text-left flex space-x-4 items-center justify-center rounded-md bg-transparent border borderneutral-0 py-3 px-7 text-neutral-0 text-sm whitespace-nowrap transition-all${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </button>
  )
}

export default ButtonOutlineSquare
