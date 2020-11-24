import React from "react"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "@prismic-config"
import SliceZone from "components/prismic/SliceZone"
import { NextSeo } from "next-seo"
import Footer from "components/avail/Footer"

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
  const BASE_CANONICAL_URL =
    process.env.NEXT_PUBLIC_BASE_CANONICAL_URL || "https://info.avail.co"

  const url = `${BASE_CANONICAL_URL}/info/${uid}`

  const { meta_title: title, meta_description: description } = data

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
      <SliceZone slices={slices} />
      <Footer />
    </React.Fragment>
  )
}

export default Page
