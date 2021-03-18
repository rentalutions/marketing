import React from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import styled, { createGlobalStyle } from "styled-components"
import { getTargetProps } from "utils/link"
import { useInViewAnimation } from "utils/animation"
import { motion } from "framer-motion"

const GlobalStyle = createGlobalStyle`
  :root {
    scroll-padding-top: ${({ sticky }) => (sticky ? "8rem" : "0")};
  }
`

const NavBarButton = styled(Button)`
  border: none;
  height: 4rem;
  display: block;
`

function AvailNavBar({
  background = "ui_100",
  defaultLinks = [],
  primaryLink,
  pushIndex,
  containerWidth = "96rem",
  sticky,
  animationPreset = "fadeIn",
  ...props
}) {
  const hasPrimary = !!primaryLink
  const hasPush = pushIndex !== -1

  const [presets, intersectionTarget] = useInViewAnimation({ delayChildren: 0 })
  const animation = presets[animationPreset]

  return (
    <Box
      as={motion.aside}
      {...animation?.container}
      bg={background}
      position={sticky ? "sticky" : "static"}
      top="0"
      zIndex="1"
      ref={intersectionTarget}
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
            as={motion.a}
            {...animation?.item}
            href="https://avail.co"
            sx={{
              display: "block",
              overflow: "hidden",
              width: ["4rem", "4rem", "auto"],
              height: "4rem",
              flex: "0 0 auto",
              mr: "2rem",
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
              visibility: hasPrimary ? ["hidden", "visible"] : "visible",
              flexDirection: hasPush ? "row-reverse" : "row",
              justifyContent: hasPush
                ? ["flex-start", "flex-start", "flex-start", "flex-end"]
                : ["flex-end", "flex-end", "flex-end", "flex-start"],
              flex: "1 1 auto",
              flexWrap: "wrap",
              height: "4rem",
              overflow: "hidden",
              gap: "2rem",
            }}
          >
            {defaultLinks.map(({ href, text, id, target }, idx) => (
              <motion.div
                key={`${id}-${href}-${text}`}
                {...animation?.item}
                style={{
                  marginLeft: idx === pushIndex ? "auto" : 0,
                  flex: "none",
                }}
              >
                <NavBarButton
                  href={href}
                  id={id}
                  {...getTargetProps(target)}
                  forwardedAs="a"
                >
                  {text}
                </NavBarButton>
              </motion.div>
            ))}
          </Flex>
          {hasPrimary && (
            <motion.div {...animation?.item}>
              <NavBarButton
                variant="primary"
                href={primaryLink.href}
                {...getTargetProps(primaryLink.target)}
                id={primaryLink.id}
                forwardedAs="a"
                flex="0 0 auto"
                ml="2rem"
              >
                {primaryLink.text}
              </NavBarButton>
            </motion.div>
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default AvailNavBar
