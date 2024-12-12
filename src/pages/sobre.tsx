import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../components/structure/container"
import Section from "../components/structure/section"
import Label from "../components/text/label"
import Title from "../components/text/title"
import Paragraph from "../components/text/paragraph"
import { SEO } from "../components/seo/seo"
import HalfBlock from "../components/halfBlock/halfBlock"
import DownloadApp from "../components/downloadApp/downloadApp"
import torana from "../images/torana.png"
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
            src={"../images/sobre-header.png"}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <Container className="flr-hero-bg-container">
            <div className="flr-text-container text-center">
              <h1 className="flr-hero-title">Sobre nós</h1>
              <p className="flr-custom-text-container">
                A nossa missão é oferecer o catálogo de moda mais completo da tua cidade, com entregas económicas e imediatas em apenas 2 horas.
              </p>
            </div>
          </Container>
        </section>

        <Section>
          <Container className="w-full sm:w-[900px] ">
            <div className="flr-text-container m-auto flex flex-col">
              <div className="mb-10">
                <Label className="text-main-blue">Sobre nós</Label>
                <Title className="text-neutral-9" tag="h2">
                  A Flair conecta as lojas de moda locais com o comercio online.
                </Title>
                <Paragraph className="text-neutral-7">
                  Imaginamos cidades onde comprar moda online se tornou uma realidade “get it now”. Fazemo-lo pelos nossos clientes, oferecendo-lhes a forma mais fácil de comprar moda online.
                </Paragraph>
                <Paragraph className="text-neutral-7 my-3">
                  Capacitamos as nossas lojas parceiras com uma ferramenta destinada a promover relevância para as suas marcas e para a indústria da moda, promovendo um modelo operacional, logístico e de entregas mais eficiente.
                </Paragraph>
                <Paragraph className="text-neutral-7">
                  A nossa ambição é tornarmo-nos o principal destino de compras para todos os apaixonados da moda. Desde um hoodie casual para o dia a dia a um vestido de luxo para um casamento, seja qual for a situação ou o momento. Com a Flair já podes expressar o teu estilo sempre que quiseres.
                </Paragraph>
              </div>
              {/* <Disclosure>
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
              </Disclosure> */}
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
              <Title tag="h2" className="text-center text-main-blue-secondary-light">
                A revolução do mundo da moda está apenas a começar
              </Title>

              <div className="mt-14 sm:mt-28">
                {values.map((value, i) => {
                  const isEven = i % 2 === 0
                  return (
                    <div
                      key={i}
                      className={`flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:justify-end${isEven ? "" : " sm:flex-row-reverse"
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
                          className={`text-4xl md:text-[44px] lg:text-6xl font-highlight text-center mb-3 sm:mb-6 ${isEven ? " sm:text-left" : " sm:text-right"
                            }`}
                        >
                          {value.title}
                        </h3>
                        <Paragraph
                          className={`text-neutral-4${isEven ? " sm:text-left" : " sm:text-right"
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
        <HalfBlock
          image={torana}
          label="Torna-te Parceiro"
          title="Alcança novos clientes e aumenta as vendas da tua loja com o nosso servico"
          desc1="As lojas só precisam de uma conexão à internet, um sistema de ponto de venda (POS) e de escolher quais produtos que desejam vender no nosso marketplace. A Flair trata do software, conteúdo online, serviços de pagamento, serviço ao cliente, suporte pós-venda e apoio geral. Sem taxas adicionais, os vendedores só pagam pelo que vendem."
          button={true}
          btnHref="/"
          btnLabel="SABER MAIS"
          imgAlt=""
          imgClass=""
          className="sm:flex-row flex-col sm:ps-0 px-4 sm:px-0 lg:px-0 lg:pe-8 sm:pe-6"
          containerTextClass="items-start"
          imgFit="contain" />
        <DownloadApp />
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
