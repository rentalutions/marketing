/** TODO: Schemes other than blue are not really supported and need adjustments */

import styled from "styled-components"
import { Button } from "@rent_avail/controls"
import { sx } from "@rent_avail/base"

export const ContrastButton = styled(Button)(({ scheme = "blue" }) =>
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
export const ContrastButtonPrimary = styled(Button)(({ scheme = "blue" }) =>
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
