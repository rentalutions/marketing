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
  childrenWrapperProps,
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
          height="100%"
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
            padding={["4rem 3rem", "4rem 3rem", "2rem 4rem"]}
            margin={orientation === "left" ? "0 0 0 2rem" : "0 2rem 0 0"}
            {...titleBoxVariants[overflow ? orientation : "noOverflow"]}
          >
            <Box width="fill-available">{title}</Box>
          </Flex>
          <Box
            width="100%"
            padding="2rem"
            flex={["auto", "auto", 1]}
            order={orientation === "left" ? ["unset", "unset", -1] : "unset"}
            {...childrenWrapperProps}
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
