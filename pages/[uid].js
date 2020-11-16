import React from "react"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "@prismic-config"
import SliceZone from "components/prismic/SliceZone"
import Head from "next/head"

export const getStaticProps = async ({
  preview = null,
  previewData = {},
  params = {},
}) => {
  const hookResult = await useGetStaticProps({
    client: prismicClient,
    type: "page",
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
  type: "page",
  fallback: true,
  formatPath: ({ uid }) => ({ params: { uid } }),
})

const Page = ({ slices, data }) => {
  if (!data) {
    return null
  }
  return (
    <>
      <Head>
        <title>{data.meta_title}</title>
        <meta name="description" content={data.meta_description} />
      </Head>
      <SliceZone slices={slices} />
    </>
  )
}

export default Page
