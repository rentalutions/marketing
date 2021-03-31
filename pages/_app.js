import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { theme, Base as Reset } from "@rent_avail/base"
import PreviewWarning from "components/partials/PreviewWarning"
import { DefaultSeo } from "next-seo"
import { BREAKPOINTS, DEFAULT_SEO } from "config"
import { UIDReset } from "react-uid"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import resolvers from "graphql/resolvers"

const marketingTheme = {
  ...theme,
  breakpoints: [...BREAKPOINTS],
}

const apolloClient = new ApolloClient({ cache: new InMemoryCache(), resolvers })

const GlobalStyles = createGlobalStyle`
 .async-hide { opacity: 0 !important}
`

export default function App({ Component, pageProps }) {
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <ApolloProvider client={apolloClient}>
        <DefaultSeo {...DEFAULT_SEO} />
        <Reset />
        <GlobalStyles />
        {preview && <PreviewWarning />}
        <UIDReset prefix="uid_">
          <Component {...pageProps} />
        </UIDReset>
      </ApolloProvider>
    </ThemeProvider>
  )
}
