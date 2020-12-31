import React from "react"
import styled from "styled-components"
import { sx as applySx } from "@rent_avail/base"
import { Text as _DesignSystemText } from "@rent_avail/typography"

const DesignSystemText = styled(_DesignSystemText)`
  ${applySx};
`

export function Text({ sx, children, ...props }) {
  return (
    <DesignSystemText
      sx={{
        "&:not(:first-child)": { marginTop: ".5rem" },
        "&:not(:last-child)": { marginBottom: ".5rem" },
        "&:empty::before": {
          whiteSpace: "pre",
          content: "' '",
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </DesignSystemText>
  )
}
