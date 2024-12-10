import React from "react"

interface Props {
  href?: string
  label: string
  className?: string
  size?: "sm" | "md"
  type?: "submit" | "button"
  target?: "_blank" | "_self"
  handleClick?: () => void
}

const Button: React.FC<Props> = ({
  href,
  label,
  className,
  size,
  type,
  target,
  handleClick,
}) => {
  const sizeClassName =
    size === "sm"
      ? `py-3 text-xs max-w-[200px]`
      : `py-3.5 text-base max-w-[320px]`

  const fullClassName = `w-full rounded-full bg-main-blue hover:bg-main-blue-light active:brightness-75 flex-wrap transition-colors text-center text-neutral-0 font-bold uppercase whitespace-normal ${sizeClassName}${
    className ? ` ${className}` : ""
  }`

  if (href)
    return (
      <a
        href={href}
        className={fullClassName}
        {...(target && { target: target })}
        {...(handleClick && { onClick: handleClick })}
      >
        {label}
      </a>
    )

  return (
    <button
      type={type}
      className={fullClassName}
      {...(handleClick && { onClick: handleClick })}
    >
      {label}
    </button>
  )
}

export default Button
