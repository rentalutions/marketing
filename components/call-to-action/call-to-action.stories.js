import React, { Fragment } from "react"
import { CallToAction } from "."
import { Text, Heading } from "@rent_avail/typography"

export default { title: "Call To Action" }

function CallToActionCopy() {
  return (
    <Fragment>
      <Heading>Hello World</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
        reiciendis fugit modi maiores dolorem impedit dignissimos, accusamus,
        sequi totam eius voluptas et repellendus natus expedita harum
        repudiandae explicabo veritatis. Nam.
      </Text>
    </Fragment>
  )
}

export function Default() {
  return (
    <CallToAction
      mt="4rem"
      copy={CallToActionCopy}
      link={{ url: "https://google.com", text: "Get the thing." }}
    ></CallToAction>
  )
}
