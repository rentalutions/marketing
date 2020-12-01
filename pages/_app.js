import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme, Base as Reset } from "@rent_avail/base"
import { breakpoints, defaultSeo } from "lib/config"
import PreviewWarning from "prismic/components/PreviewWarning"
import { RichTextGlobalStyle } from "prismic/components/RichText"
import { DefaultSeo } from "next-seo"

const marketingTheme = {
  ...theme,
  breakpoints: [...breakpoints],
}

const GlobalStyles = createGlobalStyle`
 .async-hide { opacity: 0 !important}
`

export default function App({ Component, pageProps }) {
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <DefaultSeo {...defaultSeo} />
      <Reset />
      <GlobalStyles />
      <RichTextGlobalStyle />
      {preview && <PreviewWarning />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
