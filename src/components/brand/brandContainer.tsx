import React from "react"
import Button from "../button/button"
import HalfBlock from "../halfBlock/halfBlock"
import Container from "../structure/container"
import imgCtt from "../../images/ctt-img.png"
import Label from "../text/label"
import Title from "../text/title"
import Paragraph from "../text/paragraph"
import Section from "../structure/section"
import defaultImage from "../../images/app_showcase.png"

interface ImageItem {
    image: string[]; // Each item has an array of image URLs
}

interface Props {
    brandImages: ImageItem[];
    className?: string
    button: boolean,
    btnHref?: string,
    btnLabel?: string,
    isCt: boolean,
    title: string,
    label: string,
    desc?: string
}

const BrandContainer: React.FC<Props> = ({ brandImages, className, button, title, label, desc, btnHref, btnLabel, isCt }) => {
    return (
        <Section className="relative bg-main-blue-100 py-20">
            <Container className="flex flex-col items-center" isBoth={true}>
                <>
                    <div className="flex flex-col items-center mb-6 sm:mb-14">
                        <Label className="text-main-purple">{label}</Label>
                        <Title tag="h2" className="text-neutral-9 text-center w-full sm:w-[500px]">
                            {title}
                        </Title>
                        {desc &&
                            <Paragraph className="text-neutral-7">{desc}</Paragraph>
                        }
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-8">
                        {brandImages && brandImages.length > 0 && brandImages.map((item, index) => (
                            <div key={index} className="sm:w-1/6 w-1/3 sm:translate-y-[30px] sm:group-hover:translate-y-0 sm:transition-all sm:duration-500 items-center justify-center flex p-4">
                                {Array.isArray(item.image) && item.image.length > 0 ? (
                                    <img src={item.image[0]} alt={`Brand Image ${index + 1}`} data-sal="flip-down"
                                        data-sal-duration="1800"
                                        data-sal-easing="ease" />
                                ) : (
                                    <img src={defaultImage} alt={`Default Image ${index + 1}`} /> // Fallback image
                                )}
                            </div>
                        ))}
                    </div>
                    {button &&
                        <Button
                            href="/"
                            label="SABER MAIS"
                            className="my-20 self-center sm:self-auto"
                        />
                    }
                    {isCt &&
                        <HalfBlock
                            image={imgCtt}
                            label=""
                            title="Parceiro oficial CTTNOW"
                            desc1="Entregas garantidas pelo CTTnow até 2 horas dentro da mesma cidade."
                            button={false}
                            imgAlt="Flair - Ctt"
                            imgClass="flr-container-override-right"
                            className="sm:flex-row  sm:flex-row-reverse flex-col"
                            imgContainerClass="sm:basis-2/4 lg:basis-3/4 flex justify-end"
                            isRight={true}
                            imgFit="contain" />
                    }
                </>
            </Container>
        </Section>
    )
}

export default BrandContainer
