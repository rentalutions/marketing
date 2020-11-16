import React from "react"
import { Heading as AvailHeading } from "@rent_avail/typography"

const matchAs = (type) => {
  return `h${type.slice(-1)}`
}

const Heading = ({ render, ...props }) => {
  return (
    <AvailHeading {...props} as={matchAs(render.type)}>
      {render.text}
    </AvailHeading>
  )
}

export default Heading
