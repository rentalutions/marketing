import React, { useMemo } from "react"

import RichText from "components/partials/SliceZone/components/RichText"

import { TestimonialsCards } from "components/organisms/Testimonials"
import Image from "next/image"

const TESTIMONIALS_PROPS = {
  title: "See what landlords are saying about Avail",
  testimonials: [
    {
      author: "Andrew Bergler",
      titleAndLocation: "Landlord in Illinois, 1 Unit",
      quote:
        "I’ve used Avail for about a year now and couldn’t be more satisfied! I’m a first time landlord and Avail has really helped me with the process. Easy to use website and customer service that is outstanding! Thank you Avail!",
      picture: {
        url: "/testimonials/Character-Andrew.jpeg",
        alt: "User Image",
        width: 200,
        height: 201,
      },
    },
    {
      author: "Kevin and Jackie White",
      titleAndLocation: "Landlords in Colorado, 2 units",
      quote:
        "It’s affordable and easy to use. We love the advertising process and online dashboard, our tenants love the free online rent payment and online lease signing. Thank you Avail!",
      picture: {
        url: "/testimonials/Character-Kathleen.jpeg",
        alt: "User Image",
        width: 200,
        height: 195,
      },
    },
    {
      author: "Polly",
      titleAndLocation: "Landlord in Florida, 1 unit",
      quote:
        "This is a helpful website for new landlords like me. I was totally ignorant of the entire renting process until I found Avail. And whenever I had a question, their support team was there to help. Thank you Avail!",
      picture: {
        url: "/testimonials/Character-Angela.jpeg",
        alt: "User Image",
        width: 200,
        height: 195,
      },
    },
  ],
}

const TenantFeaturesTestimonials = (props) => {
  const testimonials = useMemo(() =>
    TESTIMONIALS_PROPS.testimonials.map(({ quote, picture, ...rest }) => ({
      ...rest,
      picture: (
        <Image
          src={picture.url}
          alt={picture.alt}
          width={picture.width}
          height={picture.height}
        />
      ),
      quote: (
        <RichText
          render={[
            {
              text: quote,
              type: "paragraph",
              spans: [],
            },
          ]}
        />
      ),
    }))
  )
  return (
    <TestimonialsCards
      {...props}
      bg="gold_500"
      testimonialBg="gold_100"
      color="blue_900"
      skew="left"
      title={
        <RichText
          render={[
            {
              text: TESTIMONIALS_PROPS.title,
              type: "heading1",
              spans: [],
            },
          ]}
        />
      }
      testimonials={testimonials}
    />
  )
}

export default TenantFeaturesTestimonials
