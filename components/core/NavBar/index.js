import React, { useMemo } from "react"
import { Box, Flex, Stack } from "@rent_avail/layout"
import { Button } from "@rent_avail/controls"
import styled from "styled-components"

const NavBarButton = styled(Button)`
  border: none;
  height: 48px;
`

const NavBar = ({ background = "ui_100", links = [] }) => {
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
    <Flex p="2rem" bg={background}>
      <Box as="a" href="https://avail.co" mr="2rem">
        <img
          src="/icons/icon-100.png"
          aria-label="Avail"
          alt="Avail"
          height={46}
          width={46}
        />
      </Box>
      <Stack direction={["row"]} spacing="2rem" flex="1 1 auto">
        {linksSorted.map((link, index) => (
          <NavBarButton
            variant={link.primary ? "primary" : "default"}
            key={link.href}
            href={link.href}
            ml={index === splitIndex ? "auto" : "0"}
            forwardedAs="a"
          >
            {link.text}
          </NavBarButton>
        ))}
      </Stack>
    </Flex>
  )
}

export default NavBar
