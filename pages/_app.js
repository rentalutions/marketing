import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import Head from "next/head"
import PreviewWarning from "components/prismic/PreviewWarning"

export default function App({ Component, pageProps }) {
  const overriddenTheme = {
    ...theme,
    breakpoints: ["30rem", "45rem", "60rem", "75rem", "90rem"],
    // breakpoints: ["480px", "720px", "960px", "1200px", "1440px"],
  }
  const { preview } = pageProps
  return (
    <ThemeProvider theme={overriddenTheme}>
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
