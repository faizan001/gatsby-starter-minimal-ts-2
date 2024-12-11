import React from "react"
import Title from "../text/title"
import Paragraph from "../text/paragraph"
import { StaticImage } from "gatsby-plugin-image"

interface Props {
  title: string
  description: string
  image?: string // image must be passed as react element as <StaticImage> doens't render src prop when coming from parent component prop
  className?: string 
}

const Card: React.FC<Props> = ({ title, description, image, className }) => {
  return (
    <div
      className={`group flex flex-col w-full items-center bg-gradient-to-bl from-[#01E5FF] via-[#795AFC] to-[#283FF8] py-10 px-6 shadow ${
        className ? ` ${className}` : ""
      }`}
    >
      {image && (
        <div className="sm:translate-y-[30px] sm:group-hover:translate-y-0 sm:transition-all sm:duration-500">
          <img src={image} alt="hello" />
        </div>
      )}
      <Title
        tag="h3"
        className="text-neutral-0 text-center sm:translate-y-[35px] sm:group-hover:translate-y-0 sm:transition-all sm:duration-500"
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
