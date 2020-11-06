import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import client from "../prismic.config"
import Head from "next/head"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <Base />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
