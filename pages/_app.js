import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import Head from "next/head"
import PreviewWarning from "../components/preview-warning"

export default function App({ Component, pageProps }) {
  const { preview } = pageProps
  return (
    <ThemeProvider theme={theme}>
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
