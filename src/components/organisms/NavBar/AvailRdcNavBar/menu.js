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

function Menu({
  menuEntries,
  primaryLinkProps,
  secondaryLinkProps,
  parentRef,
}) {
  return (
    <AvailMenu parentRef={parentRef}>
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
        {primaryLinkProps && (
          <Box
            sx={{
              fontWeight: 700,
              color: "blue_500",
              display: ["initial", "initial", "none"],
            }}
          >
            <MenuItem closeOnClick {...primaryLinkProps} />
            <Box height="1px" bg="ui_500" />
          </Box>
        )}
        {secondaryLinkProps && (
          <Box
            sx={{
              fontWeight: 700,
              color: "blue_500",
              display: ["initial", "initial", "none"],
            }}
          >
            <MenuItem closeOnClick close {...secondaryLinkProps} />
            <Box height="1px" bg="ui_500" />
          </Box>
        )}
        {menuEntries.map(({ href, text, id, target }) => (
          <Box key={`${id}-${href}-${text}`}>
            <MenuItem
              closeOnClick
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
    </AvailMenu>
  )
}

export default Menu
