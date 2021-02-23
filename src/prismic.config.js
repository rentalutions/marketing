import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"
import Prismic from "prismic-javascript"

const FETCH_LINKS_TYPES = ["form"]

export function linkResolver(doc) {
  // Pretty URLs for known types
  if (doc.type && doc.uid) {
    return `/${doc.type}/${doc.uid}`
  }
}

export const prismicApolloClient = new ApolloClient({
  link: PrismicLink({
    uri: `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
})

export const prismicClient = Prismic.client(
  `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/api/v2`
)

export function prismicQuery({ query, variables, previewData }) {
  const { ref: previewRef } = previewData
  return prismicApolloClient.query({
    query,
    variables,
    context: {
      headers: {
        ...(previewRef ? { "Prismic-ref": previewRef } : null),
      },
    },
    fetchPolicy: "no-cache",
  })
}

async function fetchLinks(object, options) {
  if (object) {
    await Object.entries(object).map(async ([key, value]) => {
      if (
        value?.link_type === "Document" &&
        value?.id &&
        FETCH_LINKS_TYPES.includes(value?.type)
      ) {
        // eslint-disable-next-line no-param-reassign
        object[key] = await prismicClient.getByID(value?.id, options)
      } else if (typeof value === "object" && value !== object) {
        // eslint-disable-next-line no-param-reassign
        object[key] = await fetchLinks(value, options)
      }
    })
  }
  return object
}

export async function fetchWithLinks(type, uid, options) {
  const document = await prismicClient.getByUID("info", uid, options)
  return fetchLinks(document, options)
}
