import React from "react"
import { ThemeProvider } from "styled-components"
import { Base, theme } from "@rent_avail/base"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [
  (Story) => {
    return (
      <ThemeProvider theme={theme}>
        <Base />
        <Story />
      </ThemeProvider>
    )
  },
]
