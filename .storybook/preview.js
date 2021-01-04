import React from "react"
import { ThemeProvider } from "styled-components"
import { Base, theme } from "@rent_avail/base"
import { BREAKPOINTS } from "config"

export const parameters = {
  layout: "fullscreen",
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const marketingTheme = {
  ...theme,
  breakpoints: [...BREAKPOINTS],
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
