import React, { cloneElement, useMemo } from "react"
import { Menu as MenuIcon } from "react-feather"

import { Button } from "@rent_avail/controls"
import { Box, Col, Container, Flex, Grid } from "@rent_avail/layout"
import { Menu, MenuTarget, MenuList, MenuItem } from "@rent_avail/menu"

import { getTargetProps } from "utils/link"
import { useInViewAnimation } from "utils/animation"
import { motion } from "framer-motion"

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
    () => ({
      id: primaryLink?.id,
      href: primaryLink?.href,
      as: "a",
      ...getTargetProps(primaryLink?.target),
      children: primaryLink?.text,
    }),
    [primaryLink]
  )

  const secondaryLinkProps = useMemo(
    () => ({
      id: secondaryLink?.id,
      href: secondaryLink?.href,
      as: "a",
      ...getTargetProps(secondaryLink?.target),
      children: secondaryLink?.text,
    }),
    [secondaryLink]
  )

  return (
    <Flex
      as={motion.header}
      {...animation?.container}
      bg={background}
      position={sticky ? "sticky" : "static"}
      minHeight="8rem"
      top="0"
      zIndex="1"
      ref={intersectionTarget}
      {...props}
    >
      <Box flex="1" bg="blue_900" />
      <Container as={Grid} gap="0" flex="1 0 100%" px={0}>
        <Col
          display="flex"
          span={[5, 4, 3]}
          padding="2rem 4rem 2rem 2rem"
          bg="blue_900"
          justifyContent="flex-end"
          alignItems="center"
          sx={{
            clipPath: `polygon(0 0, calc(100% - 2rem) 0, 100% 100%, 0% 100%)`,
          }}
        >
          <Box
            as="img"
            src="/rdc-family-logo.svg"
            aria-label="Realtor.com"
            alt="Realtor.com family logo"
            title="Realtor.com"
            sx={{ maxHeight: ["2rem", "3rem"] }}
          />
        </Col>
        <Col
          display="flex"
          span={[7, 8, 9]}
          p="2rem"
          pl={["1rem", "2rem"]}
          alignItems="center"
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
              display="flex"
              sx={{
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
                  as="motion.li"
                  {...animation?.item}
                  sx={{ display: ["none", "none", "initial"] }}
                >
                  <Button
                    display="block"
                    flex="0 0 auto"
                    {...secondaryLinkProps}
                  />
                </Box>
              )}
              {primaryLink && (
                <Box
                  as="motion.li"
                  {...animation?.item}
                  sx={{ display: ["none", "none", "initial"] }}
                >
                  <Button
                    variant="primary"
                    display="block"
                    flex="0 0 auto"
                    {...primaryLinkProps}
                  />
                </Box>
              )}
              <Menu>
                <MenuTarget>
                  <Box
                    as="motion.li"
                    role="button"
                    sx={{
                      color: "blue_500",
                      cursor: "pointer",
                      "&:hover": { color: "blue_300" },
                    }}
                  >
                    <MenuIcon />
                  </Box>
                </MenuTarget>
                <MenuList>
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "blue_500",
                      display: ["initial", "initial", "none"],
                    }}
                  >
                    <MenuItem {...primaryLinkProps} />
                    <Box height="1px" bg="ui_500" />
                  </Box>
                  <Box
                    sx={{
                      fontWeight: 700,
                      color: "blue_500",
                      display: ["initial", "initial", "none"],
                    }}
                  >
                    <MenuItem {...secondaryLinkProps} />
                    <Box height="1px" bg="ui_500" />
                  </Box>
                  {menuEntries.map(({ href, text, id, target }) => (
                    <Box key={href}>
                      <MenuItem
                        href={href}
                        id={id}
                        {...getTargetProps(target)}
                        as="a"
                      >
                        {text}
                      </MenuItem>
                    </Box>
                  ))}
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Col>
      </Container>
      <Box flex="1" />
    </Flex>
  )
}

export default AvailRdcNavBar
