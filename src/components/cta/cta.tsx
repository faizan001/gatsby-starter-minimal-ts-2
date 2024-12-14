import React from 'react'
import Container from '../structure/container'
import Section from '../structure/section'
import Title from '../text/title'
import Label from '../text/label'
import Button from '../button/button'
import { StaticImage } from 'gatsby-plugin-image'
import Paragraph from '../text/paragraph'

interface ctaProps {
    title: string,
    label: string,
    btnLabel: string,
    btnHref: string,
    isBg?: boolean
    subHeading?: string
    
}
const cta:React.FC<ctaProps> = ({title, label, btnLabel, btnHref, isBg, subHeading}) => {
  return (
      <section className={`${isBg && isBg ? 'grid bg-main-blue-section-secondary' : ''}`}>
          <StaticImage
              className="flr-section-bg-image sm:max-h-[860px] opacity-100 z-10"
              layout="fullWidth"
              alt="Flair - A Flair leva a moda ate ti de imediato."
              src={"../../images/bg-pattern.png"}
              formats={["auto", "webp", "avif"]}
              quality={100}
          />
          <Container className="flex flex-col items-center flr-custom-text-container text-center flr-section-bg-container">
              <>
                  <div className="flex flex-col items-center justify-center mb-6 sm:mb-14">
                      <Label className={`${isBg && isBg ?'text-white' : 'text-main-purple'}`}>{ label }</Label>
                      <Title tag="h2" className={`${isBg && isBg ? 'text-white' : 'text-neutral-9'}`}>
                         {title} 
                      </Title>
                      {subHeading && 
                          <Paragraph className='text-neutral-50 my-10'>{ subHeading }</Paragraph>
                      }
                      <Button
                          href={btnHref}
                          label={btnLabel}
                          className={`${isBg && 'bg-white text-neutral-9'} mt-8 self-center sm:self-auto`}
                      />
                  </div>
              </>
          </Container>
      </section>
  )
}

export default cta