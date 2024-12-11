import React from 'react'
import Container from '../structure/container'
import Section from '../structure/section'
import Title from '../text/title'
import Label from '../text/label'
import Button from '../button/button'

interface ctaProps {
    title: string,
    label: string,
    btnLabel: string,
    btnHref: string
    
}
const cta:React.FC<ctaProps> = ({title, label, btnLabel, btnHref}) => {
  return (
      <Section>
          <Container className="flex flex-col items-center flr-custom-text-container text-center">
              <>
                  <div className="flex flex-col items-center mb-6 sm:mb-14">
                      <Label className="text-main-purple">{ label }</Label>
                      <Title tag="h2" className="text-neutral-9">
                         {title} 
                      </Title>
                      <Button
                          href={btnHref}
                          label={btnLabel}
                          className="mt-8 self-center sm:self-auto"
                      />
                  </div>
              </>
          </Container>
      </Section>
  )
}

export default cta