import App from "next/app"
import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { theme } from "@rent_avail/base"
import client from "../prismic.config"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
