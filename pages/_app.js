import App from "next/app"
import { ThemeProvider } from "styled-components"
import { theme } from "@rent_avail/base"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
