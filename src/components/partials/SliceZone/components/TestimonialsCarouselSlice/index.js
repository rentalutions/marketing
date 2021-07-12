import React from "react"
import { TestimonialsCarousel } from "components/organisms/Testimonials"
import { CONTAINER_WIDTHS } from "config"
import Image from "next/image"
import RichText from "../RichText"

const TestimonialsCarouselSlice = ({ slice }) => {
  const {
    primary: {
      title,
      background,
      color,
      testimonialBackground,
      testimonialColor,
      titleBackground,
      orientation,
      testimonialInterval,
      skew,
    },
  } = slice

  const testimonials = slice.items.map(
    ({ picture, author, titleAndLocation, quote, additionalInfo }) => {
      return {
        picture: picture?.url && (
          <Image
            src={picture.url}
            width={picture.dimensions.width}
            height={picture.dimensions.height}
            alt={author || picture.alt}
            title={author || picture.title}
          />
        ),
        author,
        titleAndLocation,
        additionalInfo,
        quote: <RichText render={quote} />,
      }
    }
  )

  return (
    <TestimonialsCarousel
      title={<RichText render={title} heading />}
      testimonials={testimonials}
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      py={["3rem", "4.5rem"]}
      testimonialBg={testimonialBackground}
      testimonialColor={testimonialColor}
      titleBackground={titleBackground}
      orientation={orientation}
      testimonialInterval={testimonialInterval}
      skew={skew}
      pb="6rem"
    />
  )
}

export default TestimonialsCarouselSlice
