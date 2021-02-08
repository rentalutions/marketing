import React, { useMemo } from "react"
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

/**
 * @typedef Link
 * @type {object}
 * @property {string} href - a Link href
 * @property {string | undefined} target - Link target property
 * @property {boolean | undefined} push - specifies if button should be pushed to the right
 * @property {boolean | undefined} primary - indicates primary button. NB: Only one primary button is supported
 */

/**
 * @param background - a background color in the theme format, e.g. - "ui_100" for white
 * @param links - a collection of objects of @type Link
 * @param containerWidth - width in space units to limit Nav Bar width
 * @param sticky - boolean to indicate if NavBar should be sticky. If true - will inject "scroll-padding-top" as global style
 * @param animationPreset - a string to animate the components coming into view
 * @param props - rest of the props
 * @returns {JSX.Element}
 */
export default function NavBar({
  background = "ui_100",
  links = [],
  containerWidth = "96rem",
  sticky,
  animationPreset = "fadeIn",
  ...props
}) {
  const [defaultLinks, primaryLink, pushIndex] = useMemo(() => {
    /** Clone links, since we are going to perform some dirty mutations */
    const _defaultLinks = [...links]

    /** Find and remove the primary link from the default links using mutating .splice.
     * NB: Only the first link with { primary: true } would be treated as such, -
     * the rest would be considered default links */
    const primaryLinkIndex = _defaultLinks.findIndex(({ primary }) => primary)
    const [_primaryLink] =
      primaryLinkIndex !== -1 ? _defaultLinks.splice(primaryLinkIndex, 1) : []

    /** Check if links contain { push: true }. If so, - we will render the default links as "row-reverse",
     * because the expectation would be that links with { push: true } disappear last on smaller devices.
     * To achieve that, we will sort the links so that the ones with { push: true } are at the head of the array
     * and then reverse the array. We will also recalculate "pushIndex" as the last index in this case,
     * in order to inject "margin-left: auto" at the correct link */
    let _pushIndex = _defaultLinks.findIndex(({ push }) => push)
    if (_pushIndex !== -1) {
      _defaultLinks.sort(({ push: a }, { push: b }) => {
        if (a === b) return 0
        return a ? 1 : -1
      })

      _defaultLinks.reverse()

      _pushIndex = _defaultLinks.reduce(
        (r, { push }, idx) => (push ? idx : r),
        -1
      )
    }

    return [_defaultLinks, _primaryLink, _pushIndex]
  }, [links])

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
            {defaultLinks.map(({ href, text, target }, idx) => (
              <motion.div key={href} {...animation?.item}>
                <NavBarButton
                  href={href}
                  {...getTargetProps(target)}
                  forwardedAs="a"
                  flex="none"
                  ml={idx === pushIndex ? "auto" : 0}
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
