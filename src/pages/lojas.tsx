import React, { useState } from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Layout } from "../components/layout/layout"
import { StaticImage } from "gatsby-plugin-image"
import Container from "../components/structure/container"
import Label from "../components/text/label"
import Section from "../components/structure/section"
import SubTitle from "../components/text/subtitle"
import Paragraph from "../components/text/paragraph"
import Title from "../components/text/title"
// import scrollTo from "gatsby-plugin-smoothscroll"
import { SEO } from "../components/seo/seo"
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline"

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
        <Section>
          <Container size="sm">
            <div className="relative flex flex-col pt-10 sm:pt-[100px]">
              <Label className="text-main-blue">Far far away</Label>
              <Title className="text-neutral-9" tag="h1">
                Far far away, behind the world mountains, far fr
              </Title>
              <Paragraph className="text-neutral-9">
                Far far away, behind the world mountains, far from the countries
                Vokalia and Consonantia, theres live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics
              </Paragraph>
            </div>
          </Container>
        </Section>
        {/* 
        <Section className="flr-footer-spacing">
          <Container size="sm">
            <div className="w-full flex flex-col space-y-20 sm:space-y-28">
              {storesData.locations[selectedLocation].children.map(
                (storeId, i) => {
                  const store = storesData.stores[storeId]
                  const currentDate = new Date()
                  const currentHour = currentDate.getHours()

                  return (
                    <div
                      key={i}
                      id={store.id}
                      className="flex flex-col flr-anchor-target"
                    >
                      {store.image}
                      <SubTitle
                        className="mt-8 sm:mt-10 text-neutral-9"
                        tag="h3"
                      >
                        {store.name}
                      </SubTitle>
                      <div className="flex flex-row items-center mb-4">
                        <BuildingStorefrontIcon className="h-6 w-6 text-neutral-4 mr-3" />
                        <div className="text-neutral-8">
                          <span
                            className={`inline-block px-1 rounded-md ${
                              currentHour < store.time.closes &&
                              currentHour > store.time.opens
                                ? "bg-[#83F8C0]"
                                : "bg-[#F89DAB]"
                            }`}
                          >
                            Open until{" "}
                            <span className="font-bold">
                              {store.time.closes % 12 || 12}
                              {store.time.closes >= 12 ? "pm" : "am"}
                            </span>
                          </span>
                          <span className={`block px-1`}>
                            Reopens at{" "}
                            <span className="font-bold">
                              {store.time.opens % 12 || 12}
                              {store.time.opens >= 12 ? "pm" : "am"}
                            </span>
                          </span>
                        </div>
                      </div>
                      <Paragraph className="text-neutral-7">
                        {store.description}
                      </Paragraph>
                    </div>
                  )
                }
              )}
            </div>
          </Container>
        </Section> */}
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
