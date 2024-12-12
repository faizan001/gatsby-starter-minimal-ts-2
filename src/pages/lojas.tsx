import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../components/structure/container"
import Paragraph from "../components/text/paragraph"
import { SEO } from "../components/seo/seo"
import HalfBlock from "../components/halfBlock/halfBlock"
import lacohoix from "../images/lacohoix.png"
import erica from "../images/erica.png"
const storesData: {
  locations: {
    [key: string]: {
      name: string
      id: string
      children: Array<keyof typeof storesData.stores>
    }
  }
  stores: {
    [key: string]: {
      name: string
      locations: Array<keyof typeof storesData.locations>
      id: string
      image: JSX.Element
      description: string
      time: { opens: number; closes: number }
    }
  }
} = {
  locations: {
    ls: { name: "Lisboa", id: "ls", children: ["zr1", "zr2", "nk"] },
    cs: { name: "Cascais", id: "cs", children: ["nk"] },
  },
  stores: {
    zr1: {
      name: "Zara Avenida",
      locations: ["ls", "cs"],
      id: "zr1",
      image: (
        <StaticImage
          className="-mx-4 sm:-mx-0"
          layout="fullWidth"
          alt="Flair - Partner Store"
          src={"../images/store.png"}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
      description:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month!",
      time: {
        opens: 8,
        closes: 18,
      },
    },
    zr2: {
      name: "Zara Baixa",
      locations: ["ls", "cs"],
      id: "zr2",
      image: (
        <StaticImage
          className="-mx-4 sm:-mx-0"
          layout="fullWidth"
          alt="Flair - Partner Store"
          src={"../images/store2.png"}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
      description:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month!",
      time: {
        opens: 10,
        closes: 20,
      },
    },
    nk: {
      name: "Nike",
      locations: ["cs"],
      id: "nk",
      image: (
        <StaticImage
          className="-mx-4 sm:-mx-0"
          layout="fullWidth"
          alt="Flair - Partner Store"
          src={"../images/store3.png"}
          formats={["auto", "webp", "avif"]}
          quality={100}
        />
      ),
      description:
        "Far far away, behind the world mountains, far from the countries Vokalia and Consonantia, theres live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic living month!",
      time: {
        opens: 8,
        closes: 18,
      },
    },
  },
}

const StoresPage: React.FC<PageProps> = ({ location }) => {
  const [selectedLocation, setSelectedLocation] =
    useState<keyof (typeof storesData)["locations"]>("ls")

  // useEffect(() => {
  //   scrollTo(`#${storesData.locations[selectedLocation].children[0]}`)
  // }, [selectedLocation])

  // const handleSelectedLocation = (
  //   location: (typeof storesData)["locations"][0]
  // ) => {
  //   setSelectedLocation(location.id)
  // }

  return (
    <Layout location={location}>
      <>
        <section className="flr-hero-section bg-neutral-9">
          <StaticImage
            className="flr-hero-bg-image opacity-40 max-h-[500px]"
            layout="fullWidth"
            alt="Flair - Parcerias"
            src={"../images/logas.png"}
            formats={["auto", "webp", "avif"]}
            quality={100}

          />
          <Container className="flr-hero-bg-container">
            <div className="flr-text-container text-center">
              <h1 className="flr-hero-title">Lojas parceiras</h1>
              <Paragraph className="text-white w-full sm:w-[600px]">
                Conheçe as lojas parceiras com condições exclusivas
              </Paragraph>
            </div>
          </Container>
        </section>
        <HalfBlock
          image={lacohoix}
          title="Lachoix"
          desc1="A Lachoix é uma marca portuguesa líder no segmento de surf e skate, oferecendo uma ampla gama de produtos que incluem pranchas de surf e skate, vestuário, calçado e acessórios. Fundada em outubro de 1996, a marca inaugurou a sua primeira loja no centro da Ericeira, reforçando a sua autenticidade e ligação às culturas do surf e skate."
          desc2="Billabong, Element, RVCA, Nixon, Dakine, VonZipper, Vans, Carhartt, Cariuma, Ericeira Surf & Skate (marca própria)."
          secondaryTitle="secondary title"
          button={true}
          btnHref="/"
          btnLabel="Visitar"
          imgAlt=""
          imgClass=""
          isLeft={true}
          className="sm:flex-row flex-col"
          containerTextClass="items-start"
          imgFit="contain" />
        <HalfBlock
          image={erica}
          title="Ericeira surf & skate"
          desc1="A Ericeira Surf & Skate é uma marca portuguesa líder no segmento de surf e skate, oferecendo uma ampla gama de produtos que incluem pranchas de surf e skate, vestuário, calçado e acessórios. Fundada em outubro de 1996, a marca inaugurou a sua primeira loja no centro da Ericeira, reforçando a sua autenticidade e ligação às culturas do surf e skate."
          desc2="Billabong, Element, RVCA, Nixon, Dakine, VonZipper, Vans, Carhartt, Cariuma, Ericeira Surf & Skate (marca própria)."
          secondaryTitle="secondary title"
          button={true}
          btnHref="/"
          btnLabel="Visitar"
          imgAlt=""
          imgClass=""
          isRight={true}
          className="sm:flex-row-reverse flex-col"
          containerTextClass="items-start"
          imgFit="contain" />
        <HalfBlock
          image={lacohoix}
          title="Lachoix"
          desc1="A Lachoix é uma marca portuguesa líder no segmento de surf e skate, oferecendo uma ampla gama de produtos que incluem pranchas de surf e skate, vestuário, calçado e acessórios. Fundada em outubro de 1996, a marca inaugurou a sua primeira loja no centro da Ericeira, reforçando a sua autenticidade e ligação às culturas do surf e skate."
          desc2="Billabong, Element, RVCA, Nixon, Dakine, VonZipper, Vans, Carhartt, Cariuma, Ericeira Surf & Skate (marca própria)."
          secondaryTitle="secondary title"
          button={true}
          btnHref="/"
          btnLabel="Visitar"
          imgAlt=""
          imgClass=""
          isLeft={true}
          className="sm:flex-row flex-col"
          containerTextClass="items-start"
          imgFit="contain" />
        <HalfBlock
          image={erica}
          title="Ericeira surf & skate"
          desc1="A Ericeira Surf & Skate é uma marca portuguesa líder no segmento de surf e skate, oferecendo uma ampla gama de produtos que incluem pranchas de surf e skate, vestuário, calçado e acessórios. Fundada em outubro de 1996, a marca inaugurou a sua primeira loja no centro da Ericeira, reforçando a sua autenticidade e ligação às culturas do surf e skate."
          desc2="Billabong, Element, RVCA, Nixon, Dakine, VonZipper, Vans, Carhartt, Cariuma, Ericeira Surf & Skate (marca própria)."
          secondaryTitle="secondary title"
          button={true}
          btnHref="/"
          btnLabel="Visitar"
          imgAlt=""
          imgClass=""
          isRight={true}
          className="sm:flex-row-reverse flex-col"
          containerTextClass="items-start"
          imgFit="contain" />
      </>
    </Layout>
  )
}

export default StoresPage

export const Head: HeadFC = ({ location }) => (
  <>
    <SEO pathname={location.pathname} />
    <html lang="en"></html>
  </>
)
