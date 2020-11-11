import React from "react"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import Head from "next/head"
import { prismicClient } from "../prismic.config"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={prismicClient}>
      <ThemeProvider theme={theme}>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;400;600;800&display=swap"
            rel="stylesheet"
          />
          <script
            async
            defer
            src={`https://static.cdn.prismic.io/prismic.js?new=true&repo=${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}`}
          />
        </Head>
        <Base />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
