import React from 'react'
import Container from '../structure/container'
import Section from '../structure/section'
import Label from '../text/label'
import Title from '../text/title'
import Paragraph from '../text/paragraph'
import Button from '../button/button'

interface halfBlockProps {
    image: string,
    label?: string,
    title: string,
    secondaryTitle?: string,
    desc1: string,
    desc2?: string
    button: boolean,
    btnHref?: string,
    btnLabel?: string,
    imgAlt: string,
    imgClass: string,
    imgFit: string,
    className?: string,
    imgContainerClass?: string
    containerTextClass?: string
    isLeft?: boolean
    isRight?: boolean
}
const halfBlock: React.FC<halfBlockProps> = ({ image, label, title, desc1, desc2, button, btnHref, btnLabel, isLeft, isRight, secondaryTitle, imgAlt, imgClass, imgFit, className, imgContainerClass, containerTextClass }) => {
    return (
        <Section className='w-full'>
            <Container isLeft={isLeft} isRight={isRight} className={`flex ${className ? ` ${className}` : ""}`}>
                <>
                    <div
                        className={`sm:basis-2/4 ${imgContainerClass ? `${imgContainerClass}` : ""}`}
                        data-sal="slide-up"
                        data-sal-duration="500"
                        data-sal-easing="ease"
                    >
                        {/* {image && (
                          <StaticImage
                              alt={"Flair - O que fazemos"}
                              src={image}
                              placeholder="none"
                              transformOptions={{ fit: "contain" }}
                              quality={100}
                              className="flr-container-override-left"
                              objectFit="contain"
                              />
                      )} */}
                        <img src={image} alt="block-img" />
                    </div>
                    <div className={`flex flex-col sm:basis-2/4 justify-center px-10 ${containerTextClass ? containerTextClass : null}`}>
                        {label &&
                            <Label className="text-main-blue">{label}</Label>
                        }
                        <Title className="text-neutral-9" tag="h2">
                            {title}
                        </Title>
                        <Paragraph className="text-neutral-7">
                            {desc1}
                        </Paragraph>
                        {secondaryTitle &&
                            <Paragraph className="text-main-purple mt-3 uppercase">
                                {secondaryTitle}
                            </Paragraph>
                        }
                        {desc2 &&
                            <Paragraph className="text-neutral-7">
                                {desc2}
                            </Paragraph>
                        }
                        {button &&
                            <Button
                                href={btnHref}
                                label={btnLabel}
                                className="mt-8 self-center sm:self-auto"
                            />
                        }
                    </div>
                </>
            </Container>
        </Section>
    )
}

export default halfBlock