/** TODO: Schemes other than blue are not really supported and need adjustments */
import React, { forwardRef } from "react"
import styled from "styled-components"

import { Button as AvailButton } from "@rent_avail/controls"
import { sx } from "@rent_avail/base"
import { analyzeColor } from "utils/color-scheme"

const ContrastButton = styled(AvailButton)(({ scheme = "blue" }) =>
  sx({
    sx: {
      backgroundColor: "transparent",
      borderColor: `${scheme}_100`,
      color: `${scheme}_100`,
      "&:hover": {
        backgroundColor: `${scheme}_100`,
        color: `${scheme}_500`,
      },
      "&:focus": {
        backgroundColor: `${scheme}_100`,
      },
    },
  })
)
const ContrastButtonPrimary = styled(AvailButton)(({ scheme = "blue" }) =>
  sx({
    sx: {
      backgroundColor: `${scheme}_100`,
      borderColor: `${scheme}_100`,
      color: `${scheme}_500`,
      "&:hover": {
        backgroundColor: "ui_100",
        borderColor: "ui_100",
        color: `${scheme}_700`,
      },
      "&:focus": {
        backgroundColor: "ui_100",
      },
    },
  })
)

const Button = forwardRef(
  ({ background, variant, children, ...props }, ref) => {
    const [scheme, isDark] = background ? analyzeColor(background) : []

    let buttonElement = <AvailButton />
    if (isDark) {
      buttonElement =
        variant === "primary" ? <ContrastButtonPrimary /> : <ContrastButton />
    }

    return React.cloneElement(
      buttonElement,
      {
        ref,
        scheme,
        variant,
        display: "block",
        textAlign: "center",
        width: "100%",
        ...props,
      },
      children
    )
  }
)

export default Button
