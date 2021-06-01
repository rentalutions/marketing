import React from "react"
import { NextSeo } from "next-seo"
import AvailFooter from "components/partials/AvailFooter"
import StaticNavBar from "components/static/StaticNavBar"
import { createGlobalStyle } from "styled-components"
import { theme } from "@rent_avail/base"

const StaticBasePageGlobalStyle = createGlobalStyle`
  body {
    background-color: ${({ background }) => theme.colors[background]};
  }
`

export default function StaticBasePage({
  title,
  description,
  url,
  background,
  children,
}) {
  return (
    <React.Fragment>
      <StaticBasePageGlobalStyle background={background} />
      <NextSeo
        title={title}
        description={description}
        canonical={url}
        openGraph={{
          title,
          description,
          url,
        }}
      />
      <StaticNavBar />
      <React.Fragment>{children}</React.Fragment>
      <AvailFooter />
    </React.Fragment>
  )
}
