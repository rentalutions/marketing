import React from "react"
import SliceZone from "next-slicezone"
import dynamic from "next/dynamic"
import { useGetStaticProps, useGetStaticPaths } from "next-slicezone/hooks"
import { prismicClient } from "@prismic-config"

const resolver = ({ sliceName }) =>
  dynamic(() => import(`../slices/${sliceName}/index.js`))

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
  }
}

export const getStaticPaths = useGetStaticPaths({
  client: prismicClient,
  type: "page",
  fallback: true,
  formatPath: ({ uid }) => ({ params: { uid } }),
})

const Page = ({ registry, slices }) => {
  return <SliceZone resolver={resolver} registry={registry} slices={slices} />
}

export default Page
