import React from "react"
import { Box, Col, Container, Flex, Grid } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import { getTargetProps } from "utils/link"
import { useInViewAnimation } from "utils/animation"
import { motion } from "framer-motion"

function AvailRdcNavBar({
  background = "ui_100",
  defaultLinks = [],
  primaryLink,
  sticky,
  animationPreset = "fadeIn",
  ...props
}) {
  const [presets, intersectionTarget] = useInViewAnimation({ delayChildren: 0 })
  const animation = presets[animationPreset]

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
                }
              }}
            >
              {defaultLinks.map(({ href, text, id, target }) => (
                <Box
                  as="motion.li"
                  {...animation?.item}
                  key={href}
                  sx={{
                    display: ["none", "initial"],
                    flex: "none",
                  }}
                >
                  <Button
                    display="block"
                    href={href}
                    id={id}
                    {...getTargetProps(target)}
                    as="a"
                  >
                    {text}
                  </Button>
                </Box>
              ))}
              {primaryLink && (
                <Box
                  as="motion.li"
                  {...animation?.item}
                  sx={{ display: ["none", "none", "initial"] }}
                >
                  <Button
                    variant="primary"
                    display="block"
                    href={primaryLink.href}
                    {...getTargetProps(primaryLink.target)}
                    id={primaryLink.id}
                    as="a"
                    flex="0 0 auto"
                  >
                    {primaryLink.text}
                  </Button>
                </Box>
              )}
            </Box>
          </Box>
        </Col>
      </Container>
      <Box flex="1" />
    </Flex>
  )
}

export default AvailRdcNavBar
