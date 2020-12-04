import React, { useMemo } from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import styled, { createGlobalStyle, useTheme } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    scroll-padding-top: ${({ sticky }) => (sticky ? "8rem" : "0")};
  }
`

const NavBarButton = styled(Button)`
  border: none;
  height: 48px;
`

const NavBar = ({
  background = "ui_100",
  links = [],
  containerWidth = "96rem",
  sticky,
  ...props
}) => {
  const { breakpoints } = useTheme()
  const [linksSorted, splitIndex] = useMemo(() => {
    const sorted = links.sort(({ push: a }, { push: b }) => {
      if (a === b) {
        return 0
      }
      return a ? 1 : -1
    })
    return [sorted, sorted.findIndex(({ push }) => push)]
  }, [links])
  return (
    <Box
      bg={background}
      position={sticky ? "sticky" : "static"}
      top="0"
      zIndex="1"
      {...props}
    >
      <GlobalStyle sticky />
      <Container
        p={["1rem", "2rem"]}
        maxWidth={containerWidth}
        overflow="hidden"
      >
        <Flex flexDirection="row" width="100%">
          <Box
            as="a"
            href="https://avail.co"
            mr="2rem"
            width={["48px", "auto"]}
            height="48px"
            sx={{
              display: "block",
              overflow: "hidden",
            }}
          >
            <Box
              as="img"
              src="/logo-wordmark.svg"
              aria-label="Avail"
              alt="Avail"
              title="Avail"
              height={48}
              width={195}
            />
          </Box>
          {linksSorted.map((link, index) => {
            const bpIndex = breakpoints.indexOf(link.breakpoint)
            const display =
              bpIndex !== -1
                ? Array(bpIndex + 2)
                    .fill("none")
                    .fill("block", bpIndex + 1)
                : "block"
            return (
              <React.Fragment key={link.href}>
                {index === splitIndex && <Box ml="auto" key="separator" />}
                <NavBarButton
                  variant={link.primary ? "primary" : "default"}
                  href={link.href}
                  forwardedAs="a"
                  display={display}
                  mr={index === links.length - 1 ? "0" : "2rem"}
                >
                  {link.text}
                </NavBarButton>
              </React.Fragment>
            )
          })}
        </Flex>
      </Container>
    </Box>
  )
}

export default NavBar
