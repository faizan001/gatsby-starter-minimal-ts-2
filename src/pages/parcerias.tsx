import React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../components/structure/container"
import Section from "../components/structure/section"
import Label from "../components/text/label"
import Paragraph from "../components/text/paragraph"
import Title from "../components/text/title"
import SubTitle from "../components/text/subtitle"
import { Disclosure } from "@headlessui/react"
import { ChevronUpIcon } from "@heroicons/react/24/outline"
import ModalPartner from "../components/modal/modalPartner"
import { SEO } from "../components/seo/seo"
import Slider from "../components/slider/slider"

const faqs = [
  {
    title: "Quem fica responsável pelos serviços pós-venda?",
    description:
      "A Flair é responsável pelos serviços pós-venda para os seus parceiros. Isto inclui tratar do apoio ao cliente, gerir devoluções e reembolsos, resolver quaisquer problemas ou preocupações que surjam após uma compra e fornecer suporte pós-venda em geral. Ao cuidar dessas tarefas, a Flair visa garantir uma experiência positiva e sem complicações tanto para os clientes quanto para os vendedores no marketplace.",
  },
  {
    title: "Que tipo de serviço de atendimento ao cliente é oferecido?",
    description:
      "A Flair disponibiliza serviço de atendimento ao cliente para auxiliar clientes e vendedores na sua plataforma. A equipa de atendimento ao cliente está disponível para ajudar os utilizadores com quaisquer perguntas ou preocupações que possam ter, garantindo uma experiência tranquila e satisfatória para todas as partes envolvidas.",
  },
  {
    title: "As lojas precisam de lidar com o contacto com o cliente?",
    description:
      "Não, as lojas que fazem parceria com a Flair não precisam de lidar diretamente com o contacto com o cliente. A Flair trata disso, em nome das lojas. Isto significa que todas as questões, problemas ou preocupações dos clientes são tratados pela equipa de atendimento ao cliente da Flair, aliviando as lojas dessa responsabilidade. A Flair cuida de garantir uma experiência positiva e tranquila para o cliente, permitindo que as lojas se concentrem nas suas atividades principais.",
  },
]

const sliderOptions = {
  initial: 0,
  slides: {
    perView: 3,
    spacing: 25,
  },
  breakpoints: {
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
    title: "Aumenta a notoriedade da tua marca",
    description:
      "Oportunidades de cobertura editorial e destaque de produtos em toda a nossa plataforma, blog, redes sociais, newsletters e a app da Flair, sem custos adicionais para os teus artigos selecionados.",
  },
  {
    title: "Integração de POS",
    description:
      "Integramos vários softwares de ponto-de-venda, permitindo que os vendedores acelerem o seu negócio online e comecem a processar vendas em grande escala -  incluindo informações de produtos, processamento de catálogos e gestão de stock em tempo real.",
  },
  {
    title: "Ecossistema completo",
    description:
      "Entregas seguras e rápidas das lojas para as próprias casas dos clientes. Com parceiros logísticos de confiança, priorizamos a entrega imediata e segura dos produtos. Os vendedores podem aproveitar a nossa experiência tanto na entrega como no serviço ao cliente, garantindo uma experiência perfeita para todos.",
  },
]

const PartneshipsPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <section className="flr-hero-section bg-neutral-9">
          <StaticImage
            className="flr-hero-bg-image opacity-40 max-h-[500px]"
            layout="fullWidth"
            alt="Flair - Parcerias"
            src={"../images/header_3.jpg"}
            formats={["auto", "webp", "avif"]}
            quality={100}
          />
          <Container className="flr-hero-bg-container">
            <div className="flr-text-container text-center">
              <h1 className="flr-hero-title">Parcerias</h1>
            </div>
          </Container>
        </section>

        <Section>
          <Container>
            <>
              <div className="flr-text-container m-auto">
                <Label className="text-main-blue">
                  A Plataforma para vendas imediatas
                </Label>
                <Title className="text-neutral-9" tag="h2">
                  Faz parte da melhor experiência de checkout online
                </Title>
                <Paragraph className="text-neutral-7 mb-10">
                  para os teus clientes locais e completa os pedidos com os
                  serviços de logística da Flair. Começa a interagir com o teu
                  público-alvo de maneiras inovadoras e constrói relações mais
                  próximas.
                </Paragraph>
                <div className="flex w-full justify-center sm:justify-start">
                  <ModalPartner
                    location={location}
                    buttonLabel="Junta-te a nós"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 mt-32">
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-6">
                    maximiza a tua Visibilidade
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    Expande o teu alcance instantaneamente. A nossa aplicação
                    leva a tua loja a novas audiencias. Torna-te nosso parceiro
                    para te focares no que fazes melhor: criar e escolher peças
                    de moda incríveis.
                  </Paragraph>
                </div>
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-6">
                    digitaliza o inventário da tua loja
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    A Flair permite que pequenas e médias empresas aproveitem a
                    digitalização e prosperem na economia digital sem qualquer
                    esforço de aquisição de clientes.
                  </Paragraph>
                </div>
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-6">
                    adota as entregas de Last Mile
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    Entregas ecológicas por lojas locais com logística Last
                    Mile. As nossas entregas de bicicleta reduzem
                    significativamente as emissões de gases de efeito estufa em
                    comparação com longas distâncias ou uso de transporte
                    tradicional. Escolhe a Flair para uma experiência de compra
                    mais verde e sustentável.
                  </Paragraph>
                </div>
              </div>
            </>
          </Container>
        </Section>

        <Section type="full" className="bg-neutral-9">
          <Container className="flex flex-col items-center">
            <>
              <div className="flex flex-col items-center mb-6 sm:mb-14">
                <Label className="text-main-purple">Descobre</Label>
                <Title tag="h2" className="text-neutral-0">
                  OS NOSSOS SERVIÇOS
                </Title>
              </div>
              <Slider
                options={sliderOptions}
                slides={sliderSlides}
                navHidesOn="min-[1000px]:hidden"
              />
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
                  alt={"Flair - Torna-te Parceiro"}
                  src={"../images/become_partner.png"}
                  placeholder="none"
                  transformOptions={{ fit: "contain" }}
                  quality={100}
                  className="flr-container-override-left"
                  objectFit="contain"
                />
              </div>
              <div className="sm:basis-2/4 flex flex-col justify-center items-start">
                <Label className="text-main-blue">Torna-te Parceiro</Label>
                <Title className="text-neutral-9" tag="h2">
                  Alcança novos clientes e aumenta as vendas da tua loja com o
                  nosso servico
                </Title>
                <Paragraph className="text-neutral-7 mb-10">
                  As lojas só precisam de uma conexão à internet, um sistema de
                  ponto de venda (POS) e de escolher quais produtos que desejam
                  vender no nosso marketplace. A Flair trata do software,
                  conteúdo online, serviços de pagamento, serviço ao cliente,
                  suporte pós-venda e apoio geral. Sem taxas adicionais, os
                  vendedores só pagam pelo que vendem.
                </Paragraph>
                <div className="flex w-full justify-center sm:justify-start">
                  <ModalPartner
                    location={location}
                    buttonLabel="Junta-te a nós"
                  />
                </div>
              </div>
            </>
          </Container>
        </Section>

        <Section
          type="full"
          isLast={true}
          className="bg-neutral-8 text-neutral-0"
        >
          <Container>
            <>
              <Title tag="h2" className="text-center">
                Perguntas Frequentes de Vendedores
              </Title>

              <div className="mt-14 sm:mt-28">
                {faqs.map((faq, i) => (
                  <Disclosure key={i}>
                    {({ open }) => (
                      <>
                        <div
                          className={`border-neutral-6 border-b ${
                            i !== 0 ? "pt-12 pb-8" : "pb-8"
                          }`}
                        >
                          <Disclosure.Button className="flex w-full justify-between text-left">
                            <SubTitle tag="h3">{faq.title}</SubTitle>
                            <ChevronUpIcon
                              className={`${
                                open ? "" : "rotate-180 transform"
                              } h-8 w-8 text-neutral-0 font-bold`}
                            />
                          </Disclosure.Button>
                          <Disclosure.Panel className="">
                            <Paragraph className="text-neutral-4 max-w-[900px]">
                              {faq.description}
                            </Paragraph>
                          </Disclosure.Panel>
                        </div>
                      </>
                    )}
                  </Disclosure>
                ))}
              </div>
            </>
          </Container>
        </Section>
      </>
    </Layout>
  )
}

export default PartneshipsPage

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
