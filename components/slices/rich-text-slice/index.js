import React from "react"
import { RichText } from "prismic-reactjs"
import { Container, Flex } from "@rent_avail/layout"

const RichTextSlice = ({ slice }) => {
  return (
    <Flex
      textAlign="center"
      m="12rem 0 6rem"
      flexDirection="column"
      alignItems="center"
    >
      <Container className="rich-text-container" maxWidth="70rem">
        <RichText render={slice.primary.text} />
      </Container>
      <style jsx global>{`
        .rich-text-container p {
          margin: 2rem 0;
        }
      `}</style>
    </Flex>
  )
}

export default RichTextSlice
