import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme, Base as Reset } from "@rent_avail/base"
import PreviewWarning from "components/partials/PreviewWarning"
import { RichTextGlobalStyle } from "components/partials/SliceZone/components/RichText"
import { DefaultSeo } from "next-seo"
import { BREAKPOINTS, DEFAULT_SEO } from "config"

const marketingTheme = {
  ...theme,
  breakpoints: [...BREAKPOINTS],
}

const GlobalStyles = createGlobalStyle`
 .async-hide { opacity: 0 !important}
`

export default function App({ Component, pageProps }) {
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <DefaultSeo {...DEFAULT_SEO} />
      <Reset />
      <GlobalStyles />
      <RichTextGlobalStyle />
      {preview && <PreviewWarning />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
