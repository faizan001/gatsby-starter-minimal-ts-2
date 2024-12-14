import React, { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import Card from "../card/card"

interface Props {
  options: {
    initial: number
    slides: {
      perView: number
      spacing: number
    }
    breakpoints: {
      "(max-width: 1200px)"?: {
        slides: {
          perView: number
          spacing: number
        }
      }
      "(max-width: 1000px)"?: {
        slides: {
          perView: number
          spacing: number
        }
      }
      "(max-width: 640px)"?: {
        slides: {
          perView: number
          spacing: number
        }
      }
    }
  }
  slides: Array<{
    image?: string,
    title: string
    description: string
  }>
  navHidesOn?: string
}

const Slider: React.FC<Props> = ({ options, slides, navHidesOn }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    ...options,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <div className="w-full grid sm:flex">
      <div
        ref={sliderRef}
        className="keen-slider cursor-grab min-[1200px]:cursor-default"
      >
        {slides.map((slide, idx) => {
          return (
            <div
              className={`keen-slider__slide number-slide${idx + 1}`}
              key={idx}
            >
              <Card image={slide.image} title={slide.title} description={slide.description} />
            </div>
          )
        })}
      </div>
      {loaded && instanceRef.current && (
        <div className="flex justify-center space-x-2 mt-8">
          {[
            ...Array(
              Math.floor(
                // @ts-ignore
                instanceRef.current.options.slides.perView !== 1
                  ? instanceRef.current.track.details.slides.length -
                      // @ts-ignore
                      instanceRef.current.options.slides.perView / 2
                  : instanceRef.current.track.details.slides.length
              )
            ).keys(),
          ].map((idx) => {
            return (
              <span
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={`block cursor-pointer ${navHidesOn} w-2 h-2 rounded-full${
                  currentSlide === idx ? " bg-neutral-0" : " bg-neutral-7"
                }`}
              ></span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Slider
