import React from "react"
import { HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import ButtonOutlineSquare from "../components/button/button_outline_square"
import Section from "../components/structure/section"
import Container from "../components/structure/container"
import Title from "../components/text/title"
import Label from "../components/text/label"
import "keen-slider/keen-slider.min.css"
import { SEO } from "../components/seo/seo"
import { Parallax } from "react-scroll-parallax"
import Slider from "../components/slider/slider"
import DownloadApp from "../components/downloadApp/downloadApp"
import Cta from "../components/cta/cta"
import googleStore from "../images/google-store.svg"
import appleStore from "../images/apple-store.svg"
import brand1 from "../images/brand-1.png"
import brand2 from "../images/brand-2.png"
import brand3 from "../images/brand-3.png"
import BrandContainer from "../components/brand/brandContainer"
import HalfBlock from "../components/halfBlock/halfBlock"
import pLogo1 from '../images/pl-1.png'
import pLogo2 from '../images/pl-2.png'
import pLogo3 from '../images/pl-3.png'
import pLogo4 from '../images/pl-4.png'
import pLogo5 from '../images/pl-5.png'
import pLogo6 from '../images/pl-6.png'
import pLogo7 from '../images/pl-7.png'
import pLogo8 from '../images/pl-8.png'
import whatWeDo from "../images/what_we_do.png"
const sliderOptions = {
  initial: 0,
  slides: {
    perView: 3,
    spacing: 25,
  },
  breakpoints: {
    "(max-width: 1200px)": {
      slides: {
        perView: 3,
        spacing: 20,
      },
    },
    "(max-width: 1000px)": {
      slides: {
        perView: 2,
        spacing: 20,
      },
    },
    "(max-width: 640px)": {
      slides: {
        perView: 1,
        spacing: 20,
      },
    },
  },
}

const sliderSlides = [
  {
    image: brand1,
    title: "Compra imediata",
    description: "Compras sem espera, com entregas até 2 horas para 10km de distância",
  },
  {
    image: brand2,
    title: "Entrega económica",
    description: "Compra em várias lojas, recebe só uma encomenda com a taxa única de 3,75€",
  },
  {
    image: brand3,
    title: "devolução grátis",
    description:
      "Devolução fácil até 30 dias na sua loja, com reembolso do valor total",
  },
]

const brandImages = [
  {
    image: [pLogo1]
  },
  {
    image: [pLogo2]
  },
  {
    image: [pLogo3]
  },
  {
    image: [pLogo4]
  },
  {
    image: [pLogo5]
  },
  {
    image: [pLogo6]
  },
  {
    image: [pLogo7]
  },
  {
    image: [pLogo8]
  },
]

const IndexPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <section className="flr-hero-section bg-neutral-9">
          <StaticImage
            className="flr-hero-bg-image sm:max-h-[760px] opacity-40"
            layout="fullWidth"
            alt="Flair - A Flair leva a moda ate ti de imediato."
            src={"../images/header_2.jpg"}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <Container className="flr-hero-bg-container">
            <>
              <div className="flr-text-container text-center">
                <h1 className="flr-hero-title">
                  a nova forma de comprar moda online
                </h1>
                <p className="flr-hero-paragraph">
                  A app com entregas económicas e imediatas em apenas <span className="rounded-full bg-main-blue-light text-white px-2 py-1">2 horas</span>
                </p>
              </div>
              <div className="inline-block mt-16 sm:mt-24">
                <span className="inline-block w-full text-xl sm:text-2xl mb-5 text-main-blue-light text-center font-medium">
                  Disponível para download
                </span>
              </div>
              <div className="flex flex-col w-full items-center justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
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
            </>
          </Container>
        </section>

        <Section>
          <Container className="flex justify-center">
            <>
              <div className="grid mt-[-100px] sm:mt-[-165px] xl:mt-[-200px]">
                <Parallax speed={-5} style={{ gridArea: "1 / 1" }}>
                  <StaticImage
                    alt={"Flair - App showcase"}
                    src={"../images/app_showcase.png"}
                    placeholder="none"
                    transformOptions={{ fit: "contain" }}
                    quality={100}
                    width={800}

                  />
                </Parallax>
                <Parallax speed={5} style={{ gridArea: "1 / 1" }}>
                  <StaticImage
                    alt={"Flair - App showcase"}
                    src={"../images/app_showcase_logos.png"}
                    placeholder="none"
                    transformOptions={{ fit: "contain" }}
                    quality={100}
                    width={800}
                    className="mt-6"
                  />
                </Parallax>
              </div>
            </>
          </Container>
        </Section>
        <section className="grid bg-neutral-9">
          <StaticImage
            className="flr-section-bg-image sm:max-h-[760px] opacity-40"
            layout="fullWidth"
            alt="Flair - A Flair leva a moda ate ti de imediato."
            src={"../images/bg-pattern.png"}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <Container className="flex flex-col items-center justify-center flr-section-bg-container">
            <>
              <div className="flex flex-col items-center mb-6 sm:mb-14">
                <Label className="text-main-purple">Benefícios da app</Label>
                <Title tag="h2" className="text-neutral-0">
                  O futuro está na Flair
                </Title>
              </div>
              <Slider
                options={sliderOptions}
                slides={sliderSlides}
                navHidesOn="min-[1200px]:hidden"
              />
            </>
          </Container>
        </section>
        
        <HalfBlock
          image={whatWeDo}
          label="Quem Somos"
          title="O futuro das compras de moda online"
          desc1="A Flair conecta o comércio local com o online, a nossa missão éoferecer o catálogo mais completo de produtos de moda da tua cidade."
          desc2=" Ao melhor preço, com todo o conforto e confiança."
          button={true}
          btnHref="/sobre"
          btnLabel="Sobre nós"
          imgAlt=""
          imgClass=""
          isLeft={true}
          className="sm:flex-row flex-col"
          containerTextClass="items-start"
          imgFit="contain" />

        <Cta
          label="Torna-te Parceiro"
          title="Aumenta as vendas da tua loja sem investimento OU recursos extra"
          btnHref="/"
          btnLabel="SABER MAIS" />
        <BrandContainer
          brandImages={brandImages}
          button={true}
          isCt={true}
          label="Parcerias"
          title="lojas parceiras" />
        <DownloadApp />
      </>
    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
