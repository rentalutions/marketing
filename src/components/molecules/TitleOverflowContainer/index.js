import React, { useEffect, useRef, useState } from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { useResize } from "@rent_avail/utils"

function TitleOverflowContainer({
  containerWidth,
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
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container || !getComputedStyle) return
    const { marginLeft, paddingLeft } = getComputedStyle(container)
    const titleSpaceInPixels =
      parseInt(marginLeft, 10) + parseInt(paddingLeft, 10)
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
          {...titleBoxVariants[orientation]}
        >
          {title}
        </Flex>
        <Box order={orientation === "left" ? -1 : 1} flex={1}>
          {children}
        </Box>
      </Flex>
    </Container>
  )
}

export default TitleOverflowContainer
