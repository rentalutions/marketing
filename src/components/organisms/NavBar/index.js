import React, { useMemo } from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    scroll-padding-top: ${({ sticky }) => (sticky ? "8rem" : "0")};
  }
`

const NavBarButton = styled(Button)`
  border: none;
  height: 48px;
`

export default function NavBar({
  background = "ui_100",
  links = [],
  containerWidth = "96rem",
  sticky,
  ...props
}) {
  const [defaultLinks, primaryLink] = useMemo(() => {
    const dLinks = [...links]
    const pLinkIndex = dLinks.findIndex(({ primary }) => primary)
    const [pLink] = pLinkIndex !== -1 ? dLinks.splice(pLinkIndex, 1) : []
    return [dLinks, pLink]
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
            sx={{
              display: "block",
              overflow: "hidden",
              width: ["48px", "auto"],
              height: "48px",
              flex: "0 0 auto",
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
          <Flex
            sx={{
              flexDirection: "row",
              justifyContent: primaryLink
                ? "flex-start"
                : ["flex-end", "flex-end", "flex-end", "flex-start"],
              flex: "1 1 auto",
              flexWrap: "wrap",
              height: "48px",
              overflow: "hidden",
            }}
          >
            {defaultLinks.map(({ href, text, target }) => {
              return (
                <NavBarButton
                  key={href}
                  href={href}
                  {...(target && { target, rel: "noopener" })}
                  forwardedAs="a"
                  ml="2rem"
                  display={primaryLink ? ["none", "none", "block"] : "block"}
                  flex="none"
                >
                  {text}
                </NavBarButton>
              )
            })}
          </Flex>
          {primaryLink && (
            <NavBarButton
              variant="primary"
              href={primaryLink.href}
              {...(primaryLink.target && {
                target: primaryLink.target,
                rel: "noopener",
              })}
              forwardedAs="a"
              flex="0 0 auto"
              ml="2rem"
            >
              {primaryLink.text}
            </NavBarButton>
          )}
        </Flex>
      </Container>
    </Box>
  )
}
