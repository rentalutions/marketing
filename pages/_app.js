import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import Head from "next/head"
import { breakpoints } from "lib/config"
import PreviewWarning from "prismic/components/PreviewWarning"
import { RichTextGlobalStyle } from "prismic/components/RichText"
import HeaderScripts from "components/avail/HeaderScripts"
import Seo from "components/avail/Seo"

export default function App({ Component, pageProps }) {
  const marketingTheme = {
    ...theme,
    breakpoints: [...breakpoints],
  }
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <Head>
        {HeaderScripts()}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Base />
      <RichTextGlobalStyle />
      {preview && <PreviewWarning />}
      <Component {...pageProps} />
      <Seo />
    </ThemeProvider>
  )
}
