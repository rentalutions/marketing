import React from "react"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "prismic/prismic.config"
import SliceZone from "prismic/components/SliceZone"
import { NextSeo } from "next-seo"
import Footer from "components/avail/Footer"
import { availContainerWidth } from "lib/config"
import NavBar from "components/core/NavBar"
import { useTheme } from "styled-components"

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
      />
      <NavBar
        links={navBarLinks}
        sticky={navBarSticky}
        borderBottom={navBarSticky ? `1px solid ${colors.ui_500}` : "none"}
        containerWidth={availContainerWidth}
      />

      <SliceZone slices={slices} />
      <Footer />
    </React.Fragment>
  )
}

export default Page
