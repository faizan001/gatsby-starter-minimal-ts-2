import React, { useState } from 'react'
import ButtonOutlineSquare from '../button/button_outline_square'
import Paragraph from '../text/paragraph'
import Title from '../text/title'
import googleStore from "../../images/google-store.svg";
import appleStore from "../../images/apple-store.svg";
import Container from "../structure/container";
import { StaticImage } from 'gatsby-plugin-image';

interface downloadAppProps {
    homeCheck: boolean
}
const downloadApp= () => {
    return (
    <section className="bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue pt-20 sm:pt-0">
        <Container className="flr-bg-container flex flex-col sm:flex-row items-center sm:items-end sm:space-x-5">
            <>
                <div className="basis-1/2 text-neutral-0 text-center sm:text-left sm:py-20">
                    <Paragraph>Faz download da App</Paragraph>
                    <Title tag="h4" className="mb-0">GANHA 10% desconto</Title>
                    <Paragraph className="text-sm">Ganha 10% de desconto na primeira compra. </Paragraph>
                    <div className="flex flex-col md:flex-row w-full items-center sm:justify-start space-y-4 md:space-y-0 md:space-x-4 mt-5">
                            <ButtonOutlineSquare href="https://play.google.com/store/apps/details?id=com.emerge.customer&pli=1">
                            <>
                                <img
                                    alt={"Social media icon - download no Google Play"}
                                    src={googleStore}
                                />
                                <div className="w-full">
                                    <span className="text-xs font-light">
                                        FAZ DOWNLOAD NO
                                    </span>
                                    <div className="text-2xl/[20px]">Google Play</div>
                                </div>
                            </>
                        </ButtonOutlineSquare>
                            <ButtonOutlineSquare href="https://apps.apple.com/us/app/flair-marketplace/id6464686316">
                            <>
                                <img
                                    alt={"Social media icon - Download na Apple Store"}
                                    src={appleStore}
                                />
                                <div className="w-full">
                                    <span className="text-xs font-light">
                                        FAZ DOWNLOAD NA
                                    </span>
                                    <div className="text-2xl/[20px]">App Store</div>
                                </div>
                            </>
                        </ButtonOutlineSquare>
                    </div>
                </div>
                <div className="basis-1/2 pt-10 flex justify-end">
                <StaticImage
                    alt={"Flair - Download"}
                    src={"../../images/bg_download.png"}
                    placeholder="none"
                    transformOptions={{ fit: "contain" }}
                    quality={100}
                    className="flr-bg-image"
                />
                </div>
            </>
        </Container>
      </section>
  )
}

export default downloadApp