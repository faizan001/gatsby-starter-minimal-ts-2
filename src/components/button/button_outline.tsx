import React from "react"

interface Props {
  href: string
  label: string
  className?: string
  size?: "sm" | "md"
  target?: "_blank" | "_self"
}

const ButtonOutline: React.FC<Props> = ({
  href,
  label,
  className,
  size,
  target,
}) => {
  const sizeClassName = size === "sm" ? `py-3 text-xs` : `py-4 text-base`

  return (
    <a
      href={href}
      className={`w-full max-w-[320px] rounded-full bg-transparent border border-neutral-0 text-center text-neutral-0 hover:brightness-75 active:brightness-50 transition-all font-bold uppercase ${sizeClassName}${
        className ? ` ${className}` : ""
      }`}
      {...(target && { target: target })}
    >
      {label}
    </a>
  )
}

export default ButtonOutline
