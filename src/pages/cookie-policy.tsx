import React from "react"
import { type HeadFC, type PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import Container from "../components/structure/container"
import Label from "../components/text/label"
import Section from "../components/structure/section"
import Paragraph from "../components/text/paragraph"
import { SEO } from "../components/seo/seo"
import SubTitle from "../components/text/subtitle"

const Terms: React.FC<PageProps> = ({ location }) => {
  return (
    <Layout location={location}>
      <>
        <Section>
          <Container size="sm">
            <div className="relative flex flex-col pt-10 sm:pt-[100px]">
              <Label className="text-main-blue">Política de Cookies</Label>
              <Paragraph className="text-neutral-9">
                <>
                  Os cookies são pequenos ficheiros de texto que podem ser
                  usados por sites para tornar a experiência do utilizador mais
                  eficiente. A lei estabelece que podemos armazenar cookies no
                  seu dispositivo se forem estritamente necessários para o
                  funcionamento deste site. Para todos os outros tipos de
                  cookies, precisamos da sua permissão. Este site utiliza
                  diferentes tipos de cookies. Alguns cookies são colocados por
                  serviços de terceiros que aparecem nas nossas páginas. Pode a
                  qualquer momento alterar ou retirar o seu consentimento na
                  Declaração de Cookies no nosso site. Saiba mais sobre quem
                  somos, como nos pode contactar e como processamos dados
                  pessoais na nossa{" "}
                  <a
                    className="text-main-blue underline hover:opacity-80"
                    href="Política_de_Privacidade.pdf"
                    target="_blank"
                  >
                    Política de privacidade
                  </a>
                  .
                </>
              </Paragraph>
              <SubTitle className="mt-10">Cookies necessários</SubTitle>
              <Paragraph className="text-neutral-9">
                Os cookies necessários ajudam a tornar um site utilizável,
                permitindo funções básicas como a navegação na página e o acesso
                a áreas seguras do site. O site não pode funcionar adequadamente
                sem esses cookies.
              </Paragraph>
              <SubTitle className="mt-10">Cookies de preferência</SubTitle>
              <Paragraph className="text-neutral-9">
                Os cookies de preferência permitem que um site se lembre de
                informações que alteram a forma como o site se comporta ou
                parece, como o seu idioma preferido ou a região em que se
                encontra.
              </Paragraph>
              <SubTitle className="mt-10">Cookies de estatística</SubTitle>
              <Paragraph className="text-neutral-9">
                Os cookies de estatísticas ajudam os proprietários de sites a
                compreender como os visitantes interagem com os sites,
                recolhendo e reportando informações de forma anônima.
              </Paragraph>
              <SubTitle className="mt-10">Cookies de marketing</SubTitle>
              <Paragraph className="text-neutral-9">
                Os cookies de estatísticas ajudam os proprietários de sites a
                compreender como os visitantes interagem com os sites,
                recolhendo e reportando informações de forma anônima.
              </Paragraph>
              <SubTitle className="mt-10">Cookies não classificadas</SubTitle>
              <Paragraph className="text-neutral-9">
                Os cookies de estatísticas ajudam os proprietários de sites a
                compreender como os visitantes interagem com os sites,
                recolhendo e reportando informações de forma anônima.
              </Paragraph>
            </div>
          </Container>
        </Section>
      </>
    </Layout>
  )
}

export default Terms

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
