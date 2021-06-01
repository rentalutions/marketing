import React from "react"
import { Box } from "@rent_avail/layout"

function ControlChevron({ enabled, ...props }) {
  const disabledStyle = { opacity: 0.3 }
  const enabledStyle = {
    cursor: "pointer",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
    },
  }
  return <Box {...props} sx={enabled ? enabledStyle : disabledStyle} />
}

export default ControlChevron
