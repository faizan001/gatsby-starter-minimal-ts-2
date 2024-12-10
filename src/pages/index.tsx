import React from "react"
import { HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import ButtonOutlineSquare from "../components/button/button_outline_square"
import Button from "../components/button/button"
import Section from "../components/structure/section"
import Container from "../components/structure/container"
import Title from "../components/text/title"
import Paragraph from "../components/text/paragraph"
import Label from "../components/text/label"
import "keen-slider/keen-slider.min.css"
import { SEO } from "../components/seo/seo"
import { Parallax } from "react-scroll-parallax"
import Slider from "../components/slider/slider"
import ModalJoin from "../components/modal/modalJoin"
import googleStore from "../images/google-store.svg"
import appleStore from "../images/apple-store.svg"

const sliderOptions = {
  initial: 0,
  slides: {
    perView: 4,
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
    title: "Simples",
    description: `Simplificamos as compras de moda. Experimenta a entrega mais rápida, mais economica, mais amiga do ambiente e desfruta do suporte pós-venda sem complicações. Acaba com a espera de entregas lentas como  atrasos desnecessários em reembolsos.`,
  },
  {
    title: "Inspiração",
    description:
      "Aqui encontras as tuas marcas favoritas. Explora novas tendências e navega pela nossa curadoria de coleções. Desde os ténis que procuravas, até descobertas de boutiques que nao conhecias, a Flair oferece inspiração para todas as ocasiões e estilos",
  },
  {
    title: "Divertimento",
    description:
      "A melhor experiência de compras de moda. Cria o teu cesto de compras, aproveita a gratificação imediata, agenda entregas convenientes e beneficia de devoluções gratuitas e reembolsos imediatos. So divertimento, sem stress.",
  },
  {
    title: "Plural",
    description:
      "Onde encontras designs locais, boutiques e biquínis feitos à mão. Unindo lojas, designers e marcas de nicho, oferecemos-te a melhor personalização e uma qualidade excepcional. Explora um portfólio de produtos incomparável na Flair.",
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
                  A Flair leva a moda ate ti de imediato.
                </h1>
                <p className="flr-hero-paragraph">
                  A Flair é onde podes encontrar os teus novos artigos de moda,
                  entregues a partir de uma grande e variada rede de lojas da
                  tua cidade até à tua porta dentro de 2 horas. Tudo o que
                  precisas para expressar o teu estilo, quando quiseres.
                </p>
              </div>
              <div className="inline-block mt-16 sm:mt-24">
                <span className="inline-block w-full text-xl sm:text-2xl mb-5 text-main-blue-light text-center font-medium">
                  Em breve disponível para download.
                </span>
              </div>
              <div className="flex flex-col w-full items-center justify-center sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <ButtonOutlineSquare href="https://play.google.com/store/games?device=windows">
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
                <ButtonOutlineSquare href="https://www.apple.com/store">
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

        <Section>
          <Container className="flex flex-col sm:flex-row">
            <>
              <div
                className="sm:basis-2/4 lg:basis-3/4 mb-14 sm:mb-0 sm:mr-10"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
              >
                <StaticImage
                  alt={"Flair - O que fazemos"}
                  src={"../images/what_we_do.png"}
                  placeholder="none"
                  transformOptions={{ fit: "contain" }}
                  quality={100}
                  className="flr-container-override-left"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col sm:basis-2/4 justify-center items-start">
                <Label className="text-main-blue">O que fazemos</Label>
                <Title className="text-neutral-9" tag="h2">
                  DAMOS ACESSO IMEDIATO AO MUNDO DA MODA
                </Title>
                <Paragraph className="text-neutral-7">
                  Na Flair, podes comprar em várias das tuas lojas de moda
                  locais favoritas num único pedido, por uma taxa fixa de
                  entrega e receber a tua encomenda imediatamente e tudo de uma
                  só vez, mesmo a tempo para o teu jantar de sexta-feira à
                  noite, para ires a um festival ou para umas férias relaxantes
                  de última hora.
                </Paragraph>
              </div>
            </>
          </Container>
        </Section>

        <Section type="full" className="bg-neutral-9">
          <Container className="flex flex-col items-center">
            <>
              <div className="flex flex-col items-center mb-6 sm:mb-14">
                <Label className="text-main-purple">Porquê a Flair?</Label>
                <Title tag="h2" className="text-neutral-0">
                  Porque somos…
                </Title>
              </div>
              <Slider
                options={sliderOptions}
                slides={sliderSlides}
                navHidesOn="min-[1200px]:hidden"
              />
            </>
          </Container>
        </Section>

        <Section>
          <Container className="flex flex-col-reverse sm:flex-row">
            <>
              <div className="flex flex-col sm:flex-1 justify-center items-start sm:basis-2/4 mt-14 sm:mt-0 sm:mr-10">
                <Label className="text-main-blue">Quem Somos</Label>
                <Title className="text-neutral-9" tag="h2">
                  Compra em múltiplas lojas
                </Title>
                <Paragraph className="text-neutral-7">
                  Imaginamos cidades onde comprar as suas marcas de moda
                  favoritas se torna uma realidade imediata. Fazemo-lo pelos
                  nossos clientes, pelos nossos parceiros e pelas comunidades
                  locais. Na Flair, o nosso objetivo é criar o futuro das
                  compras de moda online.
                </Paragraph>
                <Button
                  href="/sobre"
                  label="Sobre nós"
                  className="mt-8 self-center sm:self-auto"
                />
              </div>
              <div
                className="sm:basis-2/4 lg:basis-3/4 flex justify-end"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
              >
                <StaticImage
                  alt={"Flair - Quem Somos"}
                  src={"../images/who_we_are.png"}
                  placeholder="none"
                  transformOptions={{ fit: "contain" }}
                  quality={100}
                  className="flr-container-override-right"
                  objectFit="contain"
                />
              </div>
            </>
          </Container>
        </Section>

        <section className="flr-bg-section mt-10 sm:mt-20 bg-neutral-9">
          <StaticImage
            alt={"Experience Flair"}
            src={"../images/header_4.jpg"}
            placeholder="none"
            transformOptions={{ fit: "cover" }}
            quality={100}
            className="flr-bg-image opacity-20"
          />
          <Container className="flr-bg-container py-24 sm:py-60 flex space-y-16 sm:space-y-0 sm:space-x-16 lg:space-x-40 flex-col sm:flex-row items-center sm:items-start">
            <>
              <div className="flex flex-col sm:basis-1/2 justify-center items-center sm:items-start text-center sm:text-left">
                <Label tag="h2" className="text-neutral-0">
                  Experimenta a Flair
                </Label>
                <Title
                  tag="h3"
                  className="text-transparent bg-clip-text bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue"
                >
                  Ja abertos em Lisboa
                </Title>
                <Paragraph className="text-neutral-0 mb-5">
                  Entra no mundo da moda "on-demand" e obtém acesso à forma mais
                  fácil de fazer compras de moda online. Tudo o que precisas
                  para expressar o teu estilo, de forma imediata. (consulta as
                  condições nas Perguntas Frequentes)
                </Paragraph>
                <ModalJoin location={location} />
              </div>
              <div className="flex basis-1/2 flex-col justify-center items-center">
                <span className="block text-6xl md:text-7xl lg:text-8xl mb-4 lg:mb-6 font-highlight text-transparent bg-clip-text bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue">
                  Desconto -10%
                </span>
                <div className="inline-block">
                  <span className="inline-block w-full text-xl sm:text-2xl mb-5 text-main-turquoise text-center font-medium">
                    Em breve disponível para download
                  </span>
                </div>
                <div className="flex flex-col md:flex-row w-full items-center sm:justify-center space-y-4 md:space-y-0 md:space-x-4">
                  <ButtonOutlineSquare href="https://play.google.com/store/games?device=windows">
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
                  <ButtonOutlineSquare href="https://www.apple.com/store">
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
            </>
          </Container>
        </section>

        {/* <Section className="flr-footer-spacing">
          <Container className="flex flex-col sm:flex-row">
            <>
            <div className="sm:basis-2/4 lg:basis-3/4 mb-14 sm:mb-0 sm:mr-10">
              <StaticImage
                alt={"Flair - O nosso Blog"}
                src={"../images/our_blog.png"}
                placeholder="none"
                transformOptions={{ fit: "contain" }}
                quality={100}
                className="flr-container-override-left"
                objectFit="contain"
              />
              </div>
              <div className="flex flex-col sm:basis-2/4 justify-center">
                <Label className="text-main-blue">O nosso Blog</Label>
                <Title className="text-neutral-9" tag="h2">
                  Explora a nossa curadoria
                </Title>
                <Paragraph className="text-neutral-7">
                  Aqui é onde a magia acontece. Encontra informações exclusivas sobre as nossas coleções selecionadas, conhece mais sobre as nossas marcas e o motivo pelo qual achamos que se adequam a ti.
                </Paragraph>
                <Button
                  href="/blog"
                  label="O nosso Blog"
                  className="mt-8"
                />
              </div>
            </>
          </Container>
        </Section> */}
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
