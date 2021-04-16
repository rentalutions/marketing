import React, { useMemo } from "react"
import { motion } from "framer-motion"
import { Button } from "@rent_avail/controls"
import { Box, Col, Container, Grid } from "@rent_avail/layout"

import { getTargetProps } from "utils/link"
import { useInViewAnimation } from "utils/animation"
import { createGlobalStyle } from "styled-components"
import Menu from "./menu"

const GlobalStyle = createGlobalStyle`
  :root {
    scroll-padding-top: ${({ sticky }) => (sticky ? "10rem" : "0")};
  }
`

function AvailRdcNavBar({
  background = "ui_100",
  menuEntries = [],
  primaryLink,
  secondaryLink,
  sticky,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionTarget] = useInViewAnimation({ delayChildren: 0 })
  const animation = presets[animationPreset]

  const primaryLinkProps = useMemo(
    () =>
      primaryLink && {
        id: primaryLink?.id,
        href: primaryLink?.href,
        as: "a",
        ...getTargetProps(primaryLink?.target),
        children: primaryLink?.text,
      },
    [primaryLink]
  )

  const secondaryLinkProps = useMemo(
    () =>
      secondaryLink && {
        id: secondaryLink?.id,
        href: secondaryLink?.href,
        as: "a",
        ...getTargetProps(secondaryLink?.target),
        children: secondaryLink?.text,
      },
    [secondaryLink]
  )

  return (
    <Box
      as={motion.header}
      {...animation?.container}
      ref={intersectionTarget}
      sx={{
        bg: background,
        display: "flex",
        position: sticky ? "sticky" : "static",
        minHeight: "8rem",
        top: "0",
        zIndex: "1",
      }}
      {...props}
    >
      <GlobalStyle sticky />
      <Box flex="1" bg="blue_900" />
      <Container as={Grid} gap="0" flex="1 0 100%" px={0}>
        <Col
          span={[5, 4, 3]}
          bg="blue_900"
          sx={{
            display: "flex",
            padding: "2rem 4rem 2rem 2rem",
            justifyContent: "flex-end",
            alignItems: "center",
            clipPath: `polygon(0 0, calc(100% - 2rem) 0, 100% 100%, 0% 100%)`,
          }}
        >
          <Box
            as={motion.img}
            {...animation?.item}
            src="/rdc-family-logo.svg"
            aria-label="Realtor.com"
            alt="Realtor.com family logo"
            title="Realtor.com"
            sx={{ maxHeight: ["2rem", "3rem"] }}
          />
        </Col>
        <Col
          span={[7, 8, 9]}
          sx={{
            display: "flex",
            p: "2rem",
            pl: ["1rem", "2rem"],
            alignItems: "center",
          }}
        >
          <Box
            as={motion.a}
            {...animation?.item}
            href="https://avail.co"
            sx={{
              display: "block",
              overflow: "hidden",
              height: ["2rem", "3rem"],
              flex: "0 0 auto",
              mr: "2rem",
            }}
          >
            <Box
              as="img"
              src="/logo-wordmark.svg"
              aria-label="Avail"
              alt="Avail company logo"
              title="Avail"
              height={["2rem", "3rem"]}
            />
          </Box>
          <Box as="nav" id="primary-nav" sx={{ ml: "auto" }}>
            <Box
              as="ul"
              sx={{
                display: "flex",
                listStyle: "none",
                flexDirection: "row",
                alignItems: "center",
                "& > *:not(:first-child)": {
                  marginLeft: "2rem",
                },
              }}
            >
              {secondaryLink && (
                <Box
                  as={motion.li}
                  {...animation?.item}
                  sx={{ display: ["none", "none", "initial"] }}
                >
                  <Button
                    {...secondaryLinkProps}
                    sx={{
                      display: "block",
                      flex: "0 0 auto",
                    }}
                  />
                </Box>
              )}
              {primaryLink && (
                <Box
                  as={motion.li}
                  {...animation?.item}
                  sx={{ display: ["none", "none", "initial"] }}
                >
                  <Button
                    variant="primary"
                    {...primaryLinkProps}
                    sx={{
                      display: "block",
                      flex: "0 0 auto",
                    }}
                  />
                </Box>
              )}
              <Menu
                menuEntries={menuEntries}
                primaryLinkProps={primaryLinkProps}
                secondaryLinkProps={secondaryLinkProps}
                parentRef={intersectionTarget}
              />
            </Box>
          </Box>
        </Col>
      </Container>
      <Box flex="1" />
    </Box>
  )
}

export default AvailRdcNavBar
