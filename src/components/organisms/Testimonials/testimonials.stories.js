import React from "react"
import { Text } from "@rent_avail/typography"
import { Testimonials } from "./index"

export default { title: "Components/FAQ" }

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
      quote: Quote,
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
  return <Testimonials title="Testimonials" testimonials={testimonials} />
}
