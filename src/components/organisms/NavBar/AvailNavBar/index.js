import React from "react"
import { Box, Container, Flex } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import styled, { createGlobalStyle } from "styled-components"
import { getTargetProps } from "utils/link"
import { ChevronDown } from "react-feather"
import { Menu, MenuTarget, MenuList, MenuItem } from "@rent_avail/menu"

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
  secondaryLink,
  containerWidth = "96rem",
  sticky,
  availLogo,
  ...props
}) {
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
              width: ["4rem", "4rem", "195px"],
              height: "4rem",
              flex: "0 0 auto",
              mr: "2rem",
            }}
          >
            <Box width="195px">{availLogo}</Box>
          </Box>
          <Flex
            sx={{
              visibility: primaryLink ? ["hidden", "visible"] : "visible",
              flexDirection: "row",
              justifyContent: [
                "flex-end",
                "flex-end",
                "flex-end",
                "flex-start",
              ],
              flex: "1 1 auto",
              flexWrap: "wrap",
              height: "4rem",
              overflow: "hidden",
            }}
          >
            {defaultLinks.map(({ href, text, id, target, children }, idx) => (
              <div
                key={`${id}-${href}-${text}`}
                style={{
                  marginLeft: idx === 0 ? "0" : "2rem",
                  flex: "none",
                }}
              >
                {children ? (
                  <Menu id="dropdown-menu-1">
                    <MenuTarget>
                      <NavBarButton
                        href={href}
                        id={id}
                        {...getTargetProps(target)}
                      >
                        {text}
                        <ChevronDown
                          style={{
                            height: "1em",
                            width: "1em",
                            verticalAlign: "sub",
                          }}
                        />
                      </NavBarButton>
                    </MenuTarget>
                    <MenuList>
                      {children.map(
                        ({
                          href: chHref,
                          text: chText,
                          id: chId,
                          target: chTarget,
                        }) => (
                          <Box key={`${chId}-${chHref}-${chText}`}>
                            <MenuItem
                              closeOnClick
                              href={chHref}
                              id={chId}
                              {...getTargetProps(target)}
                              as="a"
                            >
                              {chText}
                            </MenuItem>
                          </Box>
                        )
                      )}
                    </MenuList>
                  </Menu>
                ) : (
                  <NavBarButton
                    href={href}
                    id={id}
                    {...getTargetProps(target)}
                    forwardedAs="a"
                  >
                    {text}
                  </NavBarButton>
                )}
              </div>
            ))}
          </Flex>
          {secondaryLink && (
            <Box
              sx={{
                visibility: primaryLink ? ["hidden", "visible"] : "visible",
              }}
            >
              <NavBarButton
                href={secondaryLink.href}
                {...getTargetProps(secondaryLink.target)}
                id={secondaryLink.id}
                forwardedAs="a"
                flex="0 0 auto"
                ml="auto"
              >
                {secondaryLink.text}
              </NavBarButton>
            </Box>
          )}
          {primaryLink && (
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
          )}
        </Flex>
      </Container>
    </Box>
  )
}

export default AvailNavBar
