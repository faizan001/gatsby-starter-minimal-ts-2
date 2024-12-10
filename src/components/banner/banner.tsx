import { StaticImage } from "gatsby-plugin-image"
import React from "react"
import ButtonOutline from "../button/button_outline"

const Banner: React.FC = () => {
  return (
    <div className="py-3 flex flex-col sm:flex-row items-center justify-center bg-main-blue-light z-30 fixed top-0 w-full text-neutral-0 space-y-3 sm:space-y-0 sm:space-x-3">
      <div className="flex flex-row items-center">
        <span className="text-[24px] font-bold mr-2">20%OFF</span>
        <span>On selected items</span>
      </div>
      <StaticImage
        layout="fixed"
        alt={"Social media icon - get it on Google Play"}
        src={"../../images/google-store.png"}
        placeholder="none"
        transformOptions={{ fit: "contain" }}
        quality={100}
        height={38}
      />
      <ButtonOutline href="#" size="sm" label="Check it out" />
    </div>
  )
}

export default Banner
