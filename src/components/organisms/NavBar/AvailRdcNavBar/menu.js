import React from "react"
import { Menu as MenuIcon } from "react-feather"
import { Box } from "@rent_avail/layout"
import {
  Menu as AvailMenu,
  MenuTarget,
  MenuList,
  MenuItem,
} from "@rent_avail/menu"
import { getTargetProps } from "utils/link"

function Menu({ menuEntries, primaryLinkProps, secondaryLinkProps }) {
  return (
    <AvailMenu>
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
          <Box key={`${id}-${href}-${text}`}>
            <MenuItem href={href} id={id} {...getTargetProps(target)} as="a">
              {text}
            </MenuItem>
          </Box>
        ))}
      </MenuList>
    </AvailMenu>
  )
}

export default Menu
