import React from "react"
import styled from "styled-components"
import { sx as applySx } from "@rent_avail/base"
import { Text as _DesignSystemText } from "@rent_avail/typography"

const DesignSystemText = styled(_DesignSystemText)(({ sx }) =>
  applySx({ sx: { ...sx } })
)

export function Text({ sx, children }) {
  return (
    <DesignSystemText
      sx={{
        margin: ".5rem 0",
        "&:empty::before": {
          whiteSpace: "pre",
          content: "' '",
        },
        ...sx,
      }}
    >
      {children}
    </DesignSystemText>
  )
}
