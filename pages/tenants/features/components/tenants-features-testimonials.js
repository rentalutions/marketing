import React, { useMemo } from "react"

import RichText from "components/partials/SliceZone/components/RichText"

import { TestimonialsCards } from "components/organisms/Testimonials"
import Image from "next/image"

const TESTIMONIALS_PROPS = {
  title: "Listen to our tenant friends",
  testimonials: [
    {
      author: "David",
      titleAndLocation: "Renter in Phoenix",
      quote:
        "Because Avail allows me to re-use my application, I was able to send it to other landlords without paying an extra fee when applying to multiple properties.",
      picture: {
        url: "/testimonials/Character-David.jpeg",
        alt: "User Image",
        width: 200,
        height: 199,
      },
    },
    {
      author: "Andrew",
      titleAndLocation: "Renter in Chicago",
      quote:
        "I used to pay my landlord by check every month, but now paying my rent has never been easier! I set up automatic payments to ensure I paid on time — no more late fees for me!",
      picture: {
        url: "/testimonials/Character-Andrew.jpeg",
        alt: "User Image",
        width: 200,
        height: 201,
      },
    },
    {
      author: "Amy",
      titleAndLocation: "Renter in Chicago",
      quote:
        "Maintenance requests are sent right to my landlord and his maintenance person. I know that with Avail my issues will be communicated and addressed quickly.",
      picture: {
        url: "/testimonials/Character-Amy.jpeg",
        alt: "User Image",
        width: 200,
        height: 200,
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
