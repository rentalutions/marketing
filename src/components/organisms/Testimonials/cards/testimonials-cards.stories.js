import React from "react"
import { Text } from "@rent_avail/typography"
import { Box } from "@rent_avail/layout"
import TestimonialsCards from "./index"

export default { title: "Components/TestimonialsCards" }

function Quote() {
  return (
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus
      officiis tenetur, ex tempora repellat quibusdam, ab soluta neque incidunt
      magni earum architecto veritatis rerum optio consectetur adipisci minus
      dicta.
    </Text>
  )
}

export function Default() {
  const testimonials = [
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Paul",
      titleAndLocation: "Tenant in Liverpool, UK",
      quote: <Text>Lorem ipsum dolor sit amet.</Text>,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Jhon",
      titleAndLocation: "Tenant in Liverpool, UK",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "George",
      titleAndLocation: "Tenant in Liverpool, UK",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Ringo",
      titleAndLocation: "Landlord in Liverpool, UK",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCards
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
      py="4rem"
    />
  )
}

export function WithTwoCards() {
  const testimonials = [
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Jules",
      titleAndLocation: "Tenant in Los Angeles, CA",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Vincent",
      titleAndLocation: "Tenant in Redondo Beach, CA",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCards
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
      py="4rem"
    />
  )
}

export function WithTwelveCards() {
  const testimonials = [
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Danny",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Rusty",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Linus",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Frank",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Reuben",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Virgil",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Turk",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Livingston",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/send-money.png", alt: "" },
      author: "Basher",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/state-specific.png", alt: "" },
      author: "Yen",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/user-card.png", alt: "" },
      author: "Saul",
      titleAndLocation: "Tenant in Las Vegas, NV",
      quote: Quote,
    },
    {
      picture: { url: "/property-damage.png", alt: "" },
      author: "Tess",
      titleAndLocation: "Landlord in Las Vegas, NV",
      quote: Quote,
    },
  ]
  return (
    <TestimonialsCards
      title={<Box as="h2">Testimonials</Box>}
      testimonials={testimonials}
      py="4rem"
    />
  )
}
