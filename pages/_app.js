import { ApolloProvider } from "@apollo/client"
import { ThemeProvider } from "styled-components"
import { theme, Base } from "@rent_avail/base"
import client from "../prismic.config"

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Base />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
