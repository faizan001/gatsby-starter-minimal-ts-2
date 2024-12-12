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
import DownloadApp from "../components/downloadApp/downloadApp"
import HalfBlock from "../components/halfBlock/halfBlock"
import mudanca from "../images/mudanca.png"
import BrandContainer from "../components/brand/brandContainer"
import Cta from "../components/cta/cta"
import Pricing from "../components/pricing/plans"
import shopify from "../images/shopify.png"
import moloni from "../images/molony.png"
import cage from "../images/cage.png"
import cegid from "../images/cegid.png"
import vendus from "../images/vendus.png"
import pLogo1 from '../images/pl-1.png'
import pLogo2 from '../images/pl-2.png'
import pLogo3 from '../images/pl-3.png'
import pLogo4 from '../images/pl-4.png'
import pLogo5 from '../images/pl-5.png'
import pLogo6 from '../images/pl-6.png'
import pLogo7 from '../images/pl-7.png'
import pLogo8 from '../images/pl-8.png'
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
    perView: 4.2,
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
    title: "Catálogo integrado",
    description:
      "Conecte o seu POS, ERP ou webshop com a nossa plataforma para a disponibilidade de produtos em loja estar sempre correta.",
  },
  {
    title: "Logística simples",
    description:
      "Em caso de devolução a Flair trata de todo o processo, a loja só tem de receber a devolução.",
  },
  {
    title: "Gestão Eficiente",
    description:
      "Consulte análises de venda, entregas pendentes e faça a gestão de presença da loja e preço no marketplace Flair.",
  },
  {
    title: "Suporte ao cliente",
    description:
      "A Flair trata de todos os problemas com clientes, só contacta a loja para questões de litígio.",
  },
  {
    title: "garantia de Transporte",
    description:
      "A Flair colabora com as melhores e mais seguras empresas de transporte, com um seguro até 1.000,00€",
  },
]

const brandImages = [
  {
    image: [shopify]
  },
  {
    image: [moloni]
  },
  {
    image: [cage]
  },
  {
    image: [cegid]
  },
  {
    image: [vendus]
  }
]

const mainBrands = [
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

const PartneshipsPage: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <section className="flr-hero-section bg-neutral-9">
          <StaticImage
            className="flr-hero-bg-image opacity-40 max-h-[500px]"
            layout="fullWidth"
            alt="Flair - Parcerias"
            src={"../images/parcerias.png"}
            formats={["auto", "webp", "avif"]}
            quality={100}

          />

          <Container className="flr-hero-bg-container">
            <div className="flr-text-container text-center">
              <h1 className="flr-hero-title">Parcerias</h1>
              <Paragraph className="text-white w-full sm:w-[600px]">
                Aumenta as vendas da tua loja com a Flair sem investimento em e-comerce ou recursos extra. Vê como tudo funciona.
              </Paragraph>
            </div>
          </Container>
        </section>

        <Section>
          <Container className="w-full sm:w-[900px]">
            <>
              <div className="flr-text-container m-auto">
                <Label className="text-main-blue">
                  Torna-te Parceiro
                </Label>
                <Title className="text-neutral-9" tag="h2">
                  Como funcionam as parcerias
                </Title>
                <div className="flex w-full justify-center sm:justify-start">
                  <ModalPartner
                    location={location}
                    buttonLabel="Junta-te a nós"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 md:space-x-10 mt-20">
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-9">
                    RegistO na flair
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    Agenda uma call e recebe um tablet em loja! Expande o teu alcance instantaneamente.
                    A app Flair leva a tua loja a novas audiências onde os utilizadores compram em todas as suas lojas favoritas.
                  </Paragraph>
                </div>
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-9">
                    Pedidos e vendas
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    A app Flair permite a integração automática do teu catálogo (POS), desta forma a loja recebe notificações imediatas com o detalhe de cada venda para a preparação do saco de compras.
                  </Paragraph>
                </div>
                <div className="basis-1/3">
                  <SubTitle tag="h3" className="text-neutral-9">
                    serviços de entrega
                  </SubTitle>
                  <Paragraph className="text-neutral-7">
                    A Flair trata de todas as entregas, sejam imediatas ou agendadas para outro dia. A encomenda é recolhida pelo CTT Now garantindo uma experiência de compra rápida, segura e sustentável.
                  </Paragraph>
                </div>
              </div>
            </>
          </Container>
        </Section>

        <section className=" bg-neutral-9 py-20"><StaticImage
          className="flr-section-bg-img sm:max-h-[860px] opacity-100 absolute inset-0 w-full h-full object-cover opacity-100"
          layout="fullWidth"
          alt="Flair - A Flair leva a moda ate ti de imediato."
          src={"../images/bg-pattern.png"}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
          <Container className="flex flex-col items-center">
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
          image={mudanca}
          label="A mudança"
          title="O que nos diferencia"
          desc1="Component - Text format - Wide"
          desc2="Aumento de vendas sem esforço de investimento modelo de entregas sustentável com redução de emissões de CO2"
          button={true}
          btnHref="/"
          btnLabel="JUNTA-TE A NÓS"
          imgAlt=""
          imgClass=""
          isLeft={true}
          className="sm:flex-row flex-col"
          containerTextClass="items-start"
          imgFit="contain" />


        <BrandContainer
          brandImages={brandImages}
          button={false}
          isCt={false}
          label="Sistemas Operativos"
          desc="Se o teu POS (sistema operativo) não está listado abaixo, entra em contacto connosco!"
          title="Integra a tua loja na flair de forma imediata" />
        <Cta label={"Torna-te Parceiro"} subHeading="O fee mais competitivo do mercado é exclusivo para parceiros Flair" isBg={true} title={"grátis 3 meses sem fidelizações"} btnLabel={"JUNTA-TE A NÓS"} btnHref={"/"} />
        <BrandContainer
          brandImages={mainBrands}
          button={true}
          isCt={true}
          label="Parcerias"
          desc="Conhece todas as nossas lojas parceiras"
          title="lojas parceiras" />
        <Pricing />
        <DownloadApp />
        <Section
          // type="full"
          isLast={false}
          className="bg-neutral-8 text-neutral-0 mt-0"
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
                          className={`border-neutral-6 border-b ${i !== 0 ? "pt-12 pb-8" : "pb-8"
                            }`}
                        >
                          <Disclosure.Button className="flex w-full justify-between text-left">
                            <SubTitle tag="h3">{faq.title}</SubTitle>
                            <ChevronUpIcon
                              className={`${open ? "" : "rotate-180 transform"
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
