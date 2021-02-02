import React, { useEffect, useRef, useState } from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { useResize } from "@rent_avail/utils"

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
  const containerRef = useRef()
  const containerRect = useResize(containerRef)

  const [titleSpace, setTitleSpace] = useState("0px")
  const titleBoxVariants = {
    right: {
      textAlign: "right",
      padding: `4rem 2rem 4rem ${titleSpace}`,
      ml: `-${titleSpace}`,
      borderRadius: "0 2.5rem 2.5rem 0",
    },
    left: {
      textAlign: "left",
      padding: `4rem ${titleSpace} 4rem 2rem`,
      mr: `-${titleSpace}`,
      borderRadius: "2.5rem 0 0 2.5rem",
    },
    noOverflow: {
      textAlign: "center",
      padding: "4rem 2rem",
      borderRadius: "2.5rem",
    },
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    const titleSpaceInPixels = overflow
      ? parseInt(marginLeft, 10) + parseInt(paddingLeft, 10)
      : 0
    setTitleSpace(`${titleSpaceInPixels}px`)
  }, [containerRect])

  return (
    <Container
      ref={containerRef}
      maxWidth={containerWidth}
      bg={background}
      {...props}
    >
      <Flex
        my={2}
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
  )
}

export default BoxedTitleSection
