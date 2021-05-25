import React from "react"
import { Box } from "@rent_avail/layout"
import Card from "./index"

export default {
  title: "Components/Card",
}

export function Default() {
  return (
    <Card m={2}>
      <Box as="h1" flex={1}>
        Card Title
      </Box>
      <Box
        as="img"
        src={"/send-money.png"}
        alt={"Send Money"}
        title={"Send Money"}
        width="6rem"
        sx={{ borderRadius: "50%" }}
      />
      <Box>
        <h5>Card Content</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
          possimus officiis tenetur, ex tempora repellat quibusdam, ab soluta
          neque incidunt magni earum architecto veritatis rerum optio
          consectetur adipisci minus dicta.
        </p>
      </Box>
    </Card>
  )
}