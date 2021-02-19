import React from "react"
import { Box } from "@rent_avail/layout"

const Wrapper = ({ sx, children }) => (
  <Box
    sx={{
      position: "relative",
      height: 0,
      overflow: "hidden",
      maxWidth: "100%",
      "& iframe": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100% !important",
        height: "100% !important",
      },
      ...sx,
    }}
  >
    {children}
  </Box>
)

export default function ResponsiveEmbed({
  aspect: { width = 100, height = 100 } = {},
  sx,
  embedSx,
  children,
}) {
  return (
    <Wrapper sx={{ pb: `${(height / width) * 100}%`, ...sx, ...embedSx }}>
      {children}
    </Wrapper>
  )
}
