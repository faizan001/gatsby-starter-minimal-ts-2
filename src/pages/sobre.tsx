import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../components/structure/container"
import Section from "../components/structure/section"
import Label from "../components/text/label"
import Title from "../components/text/title"
import Paragraph from "../components/text/paragraph"
import { Disclosure } from "@headlessui/react"
import { SEO } from "../components/seo/seo"

const values = [
  {
    title: "INOVAÇÃO",
    description:
      "Somos motivados por imaginar e explorar caminhos diferentes dos normais - construir uma experiência totalmente conectada e perfeita para um marketplace de moda “on-demand”. Queremos estar constantemente a melhorar os nossos serviços, com a missão de criar a melhor experiência para todos os apaixonados por moda, para que possam expressar o seu próprio estilo: para todas as ocasiões; para todas as necessidades; e, sobretudo, para o agora.",
  },
  {
    title: "CURADORIA",
    description:
      "O nosso objetivo é continuar a expandir as nossas marcas favoritas, enquanto exploramos novas formas tecnológicas para personalizar, desenhar e desenvolver a melhor ferramenta que permita aos nossos clientes expressarem a sua personalidade ao vestirem-se, independentemente do género, etnia, orientação sexual, ou até preferências de estilo.",
  },
  {
    title: "COLABORAÇÃO",
    description:
      "O suporte de negócios locais é uma responsabilidade que levamos muito a sério. Destacar marcas e designers locais faz parte do que fazemos para ajudar os negócios a expandirem o seu alcance. Acreditamos que ao criar um ecossistema  de partners, vai promover a melhor experiência para o cliente.",
  },
  {
    title: "ESPIRITO DE EQUIPA",
    description:
      "Apenas boas equipas podem construir empresas bem-sucedidas. A nossa equipa cresce num ambiente de crescimento e desenvolvimento em que as pessoas se sintam livres para expressar novas ideias, para que sejam desafiadas e incentivadas a encontrar soluções criativas, para que a paixão pelo que fazem seja cultivada e valorizada e para que todos estejam unidos pelos valores que nos unem.",
  },
]

const AboutPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <section className="flr-hero-section bg-neutral-9">
          <StaticImage
            className="flr-hero-bg-image opacity-40 max-h-[500px]"
            layout="fullWidth"
            alt="Flair - Quem somos"
            src={"../images/header_5.jpg"}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <Container className="flr-hero-bg-container">
            <div className="flr-text-container text-center">
              <h1 className="flr-hero-title">QUEM SOMOS</h1>
              <p className="flr-hero-paragraph">
                A Flair é onde consegues comprar os teus novos artigos de moda
                entregues de qualquer loja da tua cidade, diretamente à tua
                porta dentro de apenas 2 horas. Tudo o que precisas para
                expressar o teu estilo, quando quiseres.
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <div className="flr-text-container m-auto flex flex-col ">
              <div className="mb-10">
                <Label className="text-main-blue">Sobre nós</Label>
                <Title className="text-neutral-9" tag="h2">
                  A Flair Limitada é o primeiro marketplace de entrega
                  “on-demand” para a indústria da moda na Europa.A nossa missão
                  é tornarmo-nos a principal plataforma de última geração para
                  os apaixonados por moda, ligando vendedores, estilistas e
                  consumidores de formas inovadoras e inexploradas.
                </Title>
                <Paragraph className="text-neutral-7">
                  Fundada em 2022 por Miguel Amaral e Duarte Schedel e lançada
                  em 2023, a Flair Marketplace liga os clientes a artigos de
                  mais de (X) boutiques de moda locais e mais de (X) das
                  melhores marcas do mundo, proporcionando a experiência de
                  compra mais exclusiva, dando ainda acesso a uma extensa
                  seleção de produtos de moda e & lifestyle disponíveis para
                  entrega imediata.
                </Paragraph>
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Panel className="text-gray-500">
                      <div className="mb-10">
                        <Paragraph className="text-neutral-7">
                          Somos uma empresa tecnológica nascida pelo gosto pela
                          moda e com o objetivo de ligar os mundos físico e
                          digital para melhorar a experiência do cliente à
                          velocidade do imediato, para que as pessoas possam
                          escolher e exprimir o seu próprio estilo - sempre que
                          quiserem. Imaginamos cidades onde comprar as suas
                          marcas de moda favoritas se torna uma realidade "get
                          it now". Fazemo-lo para os nossos clientes,
                          oferecendo-lhes a forma mais fácil de fazer compras de
                          moda online, para os nossos parceiros, capacitando-os
                          com uma ferramenta destinada a promover uma relevância
                          da marca em todo o nosso canal de vendas e ajudando a
                          crescer as comunidades locais e o comércio local, e
                          para a indústria da moda, promovendo um modelo de
                          logística e entrega mais ecológico. Porque acreditamos
                          num mundo onde a experiência de compra de moda online
                          pode ser sustentada por modelos logísticos melhores,
                          mais resilientes, mais racionais e mais amigos do
                          ambiente. A nossa ambição é tornarmo-nos o destino
                          global para todos os apaixonados da moda, ligando as
                          pessoas ao catálogo de moda mais relevante da sua
                          cidade. Desde um hoodie casual para o dia a dia, a um
                          vestido vintage de luxo para um casamento temático, a
                          uma nova camisola de uma marca independente ou
                          qualquer outra coisa de que necessite, a qualquer
                          altura, para todos os momentos e de imediato. Na
                          Flair, a revolução da moda está apenas a começar.
                        </Paragraph>
                      </div>
                    </Disclosure.Panel>
                    <Disclosure.Button className="w-full max-w-[320px] py-4 px-1 self-center sm:self-start rounded-full bg-main-blue hover:bg-main-blue-light active:brightness-75 transition-colors text-center text-neutral-0 font-bold uppercase text-base">
                      {" "}
                      {open
                        ? "Ler menos"
                        : `Le a nossa declaracao de missao`}{" "}
                    </Disclosure.Button>
                  </>
                )}
              </Disclosure>
            </div>
          </Container>
        </Section>

        <Section
          id="values"
          type="full"
          className="bg-neutral-9 text-neutral-0 flr-anchor-target"
        >
          <Container>
            <>
              <Title tag="h2" className="text-center">
                OS NOSSOS VALORES
              </Title>

              <div className="mt-14 sm:mt-28">
                {values.map((value, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <div
                      key={i}
                      className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-end${
                        isEven ? "" : " sm:flex-row-reverse"
                      }${i === 0 ? "" : " mt-10"}`}
                    >
                      {/* counter */}
                      <div className="sm:basis-1/3 flex justify-center">
                        <div className="flex flex-col items-center">
                          {/* mobile line */}
                          {i !== 0 && (
                            <div className="block sm:hidden w-[2px] h-[100px] sm:h-full sm:min-h-[165px] mb-10 bg-gradient-to-b from-main-turquoise via-main-purple to-main-blue" />
                          )}
                          <span className="text-7xl lg:text-9xl mb-6 font-highlight text-transparent bg-clip-text bg-gradient-to-r from-main-turquoise via-main-purple to-main-blue">
                            0{i + 1}
                          </span>
                          {/* desktop line */}
                          {i !== Object.keys(value).length + 1 && (
                            <div className="hidden sm:block w-[2px] h-[100px] sm:h-full sm:min-h-[165px] bg-gradient-to-b from-main-turquoise via-main-purple to-main-blue" />
                          )}
                        </div>
                      </div>
                      <div
                        className="sm:basis-1/3"
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-easing="ease"
                      >
                        <h3
                          className={`text-4xl md:text-[44px] lg:text-6xl font-highlight text-center mb-3 sm:mb-6 ${
                            isEven ? " sm:text-left" : " sm:text-right"
                          }`}
                        >
                          {value.title}
                        </h3>
                        <Paragraph
                          className={`text-neutral-4${
                            isEven ? " sm:text-left" : " sm:text-right"
                          }`}
                        >
                          {value.description}
                        </Paragraph>
                      </div>
                    </div>
                  )
                })}
              </div>
            </>
          </Container>
        </Section>

        <Section id="culture" className="flr-footer-spacing flr-anchor-target">
          <Container className="flex flex-col md:flex-row">
            <>
              <div
                className="sm:basis-2/4 lg:basis-3/4 mb-14 sm:mb-0 sm:mr-10"
                data-sal="slide-up"
                data-sal-duration="500"
                data-sal-easing="ease"
              >
                <StaticImage
                  alt={"Flair - A Nossa Cultura"}
                  src={"../images/corporate_culture.png"}
                  placeholder="none"
                  transformOptions={{ fit: "contain" }}
                  quality={100}
                  className="flr-container-override-left"
                  objectFit="contain"
                />
              </div>
              <div className="sm:basis-2/4 flex flex-col justify-center">
                <Label className="text-main-blue">A Nossa Cultura</Label>
                <Title className="text-neutral-9" tag="h2">
                  O mercado da moda é um dos mercados globais de consumo mais
                  atrativos.
                </Title>
                <Paragraph className="text-neutral-7">
                  A indústria está em constante evolucao devido à digitalização
                  do consumo, interrupções na cadeia de fornecimento,
                  prioridades ambientais, e novas tecnologias que ligam todos os
                  envolventes no ecossistema da moda. Na Flair, o nosso
                  propósito de revolucionar a moda para o benefício dos
                  clientes, parceiros e comunidades locais impulsiona-nos a
                  procurar constantemente novas formas de tornar o mundo da moda
                  mais inteligente, amigável, aberto e ecológico. Cultivamos uma
                  mentalidade baseada em quatro princípios fundamentais: foco no
                  cliente; pensamento inovador; ecossistema de parcerias; e
                  espírito de equipa.
                </Paragraph>
              </div>
            </>
          </Container>
        </Section>
      </>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
