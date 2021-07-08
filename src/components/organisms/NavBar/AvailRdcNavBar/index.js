import React, { useMemo, useRef } from "react"
import { Button } from "@rent_avail/controls"
import { Box, Col, Container, Grid } from "@rent_avail/layout"

import { getTargetProps } from "utils/link"
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
  availLogo,
  rdcLogo,
  ...props
}) {
  const menuParentRef = useRef()

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
      as="header"
      ref={menuParentRef}
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
            padding: ["2rem 3rem 2rem 2rem", "2rem 4rem 2rem 2rem"],
            justifyContent: "flex-end",
            alignItems: "center",
            clipPath: `polygon(0 0, calc(100% - 2rem) 0, 100% 100%, 0% 100%)`,
          }}
        >
          <Box sx={{ width: ["87px", "131px"], height: ["2rem", "3rem"] }}>
            {rdcLogo}
          </Box>
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
            href="https://avail.co"
            sx={{
              display: "block",
              overflow: "hidden",
              width: ["97px", "146px"],
              height: ["2rem", "3rem"],
              flex: "0 0 auto",
              mr: "2rem",
            }}
          >
            {availLogo}
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
                <Box as="li" sx={{ display: ["none", "none", "initial"] }}>
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
                <Box as="li" sx={{ display: ["none", "none", "initial"] }}>
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
                parentRef={menuParentRef}
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
