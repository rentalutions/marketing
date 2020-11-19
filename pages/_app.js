import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import Head from "next/head"
import PreviewWarning from "components/prismic/PreviewWarning"
import { breakpoints } from "lib/config"

export default function App({ Component, pageProps }) {
  const marketingTheme = {
    ...theme,
    breakpoints: [...breakpoints],
  }
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Base />
      {preview && <PreviewWarning />}
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
