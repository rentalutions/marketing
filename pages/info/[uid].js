import React from "react"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "src/prismic.config"
import { NextSeo } from "next-seo"
import AvailFooter from "components/partials/AvailFooter"
import SliceZone from "components/partials/SliceZone"
import NavBar from "components/organisms/NavBar"
import { useTheme } from "styled-components"
import { CONTAINER_WIDTHS } from "config"

export const getStaticProps = async ({
  preview = null,
  previewData = {},
  params = {},
}) => {
  const hookResult = await useGetStaticProps({
    client: prismicClient,
    type: "info",
    uid: ({ params: p }) => p.uid,
  })({ preview, previewData, params })
  return {
    props: {
      preview,
      previewData,
      ...hookResult.props,
    },
    revalidate: 1,
  }
}

export const getStaticPaths = useGetStaticPaths({
  client: prismicClient,
  type: "info",
  fallback: true,
  formatPath: ({ uid }) => ({ params: { uid } }),
})

const Page = ({ slices, data, uid }) => {
  if (!data) {
    return null
  }
  const { colors } = useTheme()

  const BASE_CANONICAL_URL =
    process.env.NEXT_PUBLIC_BASE_CANONICAL_URL || "https://info.avail.co"

  const url = `${BASE_CANONICAL_URL}/info/${uid}`

  const {
    meta_title: title,
    meta_description: description,
    meta_keywords: keywords,
    sticky_nav_bar: navBarSticky,
  } = data

  const navBarLinks =
    data.nav_bar &&
    data.nav_bar.map(
      ({ buttonText, buttonLink, buttonHash, primary, push, breakpoint }) => ({
        text: buttonText,
        href: buttonHash ? `#${buttonHash.replace(/^#/, "")}` : buttonLink.url,
        primary,
        push,
        breakpoint,
      })
    )
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
        additionalMetaTags={[{ property: "keywords", content: keywords }]}
      />
      <NavBar
        links={navBarLinks}
        sticky={navBarSticky}
        borderBottom={navBarSticky ? `1px solid ${colors.ui_500}` : "none"}
        containerWidth={CONTAINER_WIDTHS}
      />
      <SliceZone slices={slices} />
      <AvailFooter />
    </React.Fragment>
  )
}

export default Page
