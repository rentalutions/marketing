import React from "react"
import { Heading as AvailHeading } from "@rent_avail/typography"

const matchAs = (type) => {
  return `h${type.slice(-1)}`
}

const Heading = ({ render, ...props }) => {
  if (!render || !render.type) {
    console.warn("Empty render prop for < Heading />")
    return null
  }
  return (
    <AvailHeading {...props} as={matchAs(render.type)}>
      {render.text}
    </AvailHeading>
  )
}

export default Heading
