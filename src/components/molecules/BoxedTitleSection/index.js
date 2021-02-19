import React from "react"
import { Box, Container, Flex } from "@rent_avail/layout"

function BoxedTitleSection({
  containerWidth,
  overflow = true,
  background,
  orientation = "right",
  title,
  titleBackground,
  children,
  ...props
}) {
  const titleBoxVariants = {
    right: {
      textAlign: "right",
      borderRadius: "0 2.5rem 2.5rem 0",
    },
    left: {
      textAlign: "left",
      borderRadius: "2.5rem 0 0 2.5rem",
    },
    noOverflow: {
      textAlign: "center",
      borderRadius: "2.5rem",
    },
  }

  return (
    <Flex my={2}>
      <Box
        flex={1}
        order={orientation === "right" ? 0 : 2}
        {...(overflow && { bg: titleBackground })}
      />
      <Container
        flex="auto"
        order={1}
        maxWidth={containerWidth}
        bg={background}
        {...props}
        px={0}
      >
        <Flex
          sx={{
            gap: 1,
            flexFlow: "row wrap",
          }}
        >
          <Flex
            flex={1}
            bg={titleBackground}
            alignItems="center"
            borderRadius="2.5rem"
            padding="4rem 2rem"
            {...titleBoxVariants[overflow ? orientation : "noOverflow"]}
          >
            <Box width="fill-available">{title}</Box>
          </Flex>
          <Box
            width={["100%", "100%", "fit-content"]}
            flex={["auto", "auto", 1]}
            order={orientation === "left" ? ["unset", "unset", -1] : "unset"}
          >
            {children}
          </Box>
        </Flex>
      </Container>
      <Box flex={1} order={orientation === "right" ? 2 : 0} />
    </Flex>
  )
}

export default BoxedTitleSection
