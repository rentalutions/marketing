import * as React from "react"
import styled from "styled-components"
import { Box, Container, Stack } from "@rent_avail/layout"
import { Heading } from "@rent_avail/typography"

function MediaMentions({ title, logos, description, ...props }) {
  return (
    <Box {...props} py="10rem" bg={props.bg || "blue_100"}>
      <Container>
        <Heading as="h5" textAlign="center" color={props.color || "ui_700"}>
          {title}
        </Heading>
        <Stack
          direction={["row"]}
          justifyContent="space-between"
          flexWrap="wrap"
          mt="2rem"
        >
          {logos.map((logo) => (
            <Box as="img" src={logo} key={logo} mt="2rem" />
          ))}
        </Stack>
        {description && (
          <Box textAlign="center" mt="4rem">
            {description}
          </Box>
        )}
      </Container>
    </Box>
  )
}

export { MediaMentions }
