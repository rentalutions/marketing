import React, { Fragment } from "react"
import { Text, Heading } from "@rent_avail/typography"
import { CallToAction } from "./index"

export default { title: "Components/Call To Action" }

function CallToActionCopy() {
  return (
    <>
      <Heading>Hello World</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        reiciendis fugit modi maiores dolorem impedit dignissimos, accusamus,
        sequi totam eius voluptas et repellendus natus expedita harum
        repudiandae explicabo veritatis. Nam.
      </Text>
    </>
  )
}

export function Default() {
  return (
    <CallToAction
      mt="4rem"
      copy={CallToActionCopy}
      link={{ url: "https://google.com", text: "Get the thing." }}
    />
  )
}
