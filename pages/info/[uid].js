import React from "react"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "@prismic-config"
import SliceZone from "components/prismic/SliceZone"
import Head from "next/head"
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

const Page = ({ slices, data }) => {
  if (!data) {
    return null
  }
  return (
    <React.Fragment>
      <Head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <SliceZone slices={slices} />
      <Footer />
    </React.Fragment>
  )
}

export default Page
