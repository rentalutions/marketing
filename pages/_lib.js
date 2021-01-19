import Prismic from "prismic-javascript"
import { prismicClient } from "src/prismic.config"

export const useGetStaticProps = (type) => async ({
  preview = null,
  previewData = {},
  params: { uid },
}) => {
  const data = await prismicClient.getByUID(type, uid, { ...previewData })
  return {
    props: {
      preview,
      previewData,
      ...data,
    },
    revalidate: 1,
  }
}

export const useGetStaticPaths = (type) => async () => {
  const pages = await prismicClient.query(
    Prismic.Predicates.at("document.type", type),
    { pageSize: 100 }
  )
  const paths = pages.results.map((p) => `/${type}/${p.uid}`)
  return { paths, fallback: true }
}
