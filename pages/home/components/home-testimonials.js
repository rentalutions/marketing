import React, { useMemo } from "react"

import RichText from "components/partials/SliceZone/components/RichText"

import { TestimonialsCarousel } from "components/organisms/Testimonials"

const TESTIMONIALS_PROPS = {
  title: "What Our Users Are Saying",
  testimonials: [
    {
      author: "Mark",
      titleAndLocation: "Landlord from Denver",
      additionalInfo: "4 units",
      quote:
        "The site makes my life so much easier. I love that I can manage all areas of my rentals in one place. I can do everything from listing my property to collecting rent from my tenants!",
      picture: {
        url: "/testimonials/Character-Mark.jpeg",
        alt: "User Image",
      },
    },
    {
      author: "Erica",
      titleAndLocation: "Landlord from Columbus",
      additionalInfo: "1 unit",
      quote:
        "This is a helpful website for new landlords like me. I was totally ignorant of the entire renting process until I found Avail. And whenever I had a question, their support team was there to help.",
      picture: {
        url: "/testimonials/Character-Erica.jpeg",
        alt: "User Image",
      },
    },
    {
      author: "Mindy",
      titleAndLocation: "Landlord from Louis",
      additionalInfo: "2 units",
      quote:
        "Maintenance requests are sent right to my landlord and his maintenance person. I know that with Avail my issues will be communicated and addressed quickly.",
      picture: {
        url: "/testimonials/Character-Mindy.jpeg",
        alt: "User Image",
      },
    },
    {
      author: "Andrew",
      titleAndLocation: "Renter from Chicago",
      quote:
        "I used to pay my landlord by check every month, but now paying my rent has never been easier! I set up automatic payments to ensure I paid on time — no more late fees for me!",
      picture: {
        url: "/testimonials/Character-Andrew.jpeg",
        alt: "User Image",
      },
    },
  ],
}

const HomeTestimonials = (props) => {
  const testimonials = useMemo(() =>
    TESTIMONIALS_PROPS.testimonials.map(({ quote, ...rest }) => ({
      ...rest,
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
    <TestimonialsCarousel
      {...props}
      bg="ui_300"
      titleBackground="blue_100"
      color="blue_900"
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

export default HomeTestimonials
