import React from "react"
import { ThemeProvider } from "styled-components"
import { Base, theme } from "@rent_avail/base"
import { breakpoints } from "lib/config"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const marketingTheme = {
  ...theme,
  breakpoints: [...breakpoints],
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={marketingTheme}>
        <Base />
        <Story />
      </ThemeProvider>
    )
  },
]
