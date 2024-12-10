import React from "react"
import Title from "../text/title"
import Paragraph from "../text/paragraph"

interface Props {
  title: string
  description: string
  image?: JSX.Element // image must be passed as react element as <StaticImage> doens't render src prop when coming from parent component prop
  className?: string
}

const Card: React.FC<Props> = ({ title, description, image, className }) => {
  return (
    <div
      className={`group flex flex-col items-center bg-main-blue py-10 px-6 shadow ${
        className ? ` ${className}` : ""
      }`}
    >
      {image && (
        <div className="sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-500 mb-10">
          {image}
        </div>
      )}
      <Title
        tag="h3"
        className="text-neutral-0 text-center sm:translate-y-20 sm:group-hover:translate-y-0 sm:transition-all sm:duration-500"
      >
        {title}
      </Title>
      <Paragraph className="text-neutral-0 sm:opacity-0 sm:group-hover:opacity-100 sm:transition-all sm:duration-500">
        {description}
      </Paragraph>
    </div>
  )
}

export default Card
