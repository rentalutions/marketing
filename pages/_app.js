import React from "react"
import { ThemeProvider } from "styled-components"
import { theme, Base as Reset } from "@rent_avail/base"
import { DefaultSeo } from "next-seo"
import { BREAKPOINTS, DEFAULT_SEO } from "config"
import { UIDReset } from "react-uid"
import { AnalyticsProvider } from "utils/analytics/context"
import { LazyMotion } from "framer-motion"
import dynamic from "next/dynamic"

const motionFeatures = () =>
  import("utils/animation/features").then((res) => res.default)
const PreviewWarning = dynamic(() =>
  import("components/partials/PreviewWarning")
)

const marketingTheme = {
  ...theme,
  breakpoints: [...BREAKPOINTS],
}

export default function App({ Component, pageProps }) {
  const { preview } = pageProps
  return (
    <ThemeProvider theme={marketingTheme}>
      <AnalyticsProvider>
        <DefaultSeo {...DEFAULT_SEO} />
        <Reset />
        {preview && <PreviewWarning />}
        <UIDReset prefix="uid_">
          <LazyMotion features={motionFeatures}>
            <Component {...pageProps} />
          </LazyMotion>
        </UIDReset>
      </AnalyticsProvider>
    </ThemeProvider>
  )
}
