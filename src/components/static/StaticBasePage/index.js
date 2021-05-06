import React from "react"
import { NextSeo } from "next-seo"
import AvailFooter from "components/partials/AvailFooter"
import StaticNavBar from "components/static/StaticNavBar"

export default function StaticBasePage({ title, description, url, children }) {
  return (
    <React.Fragment>
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
