import {
  ApolloClient,
  ApolloQueryResult,
  DocumentNode,
  InMemoryCache,
} from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"
import { PreviewData } from "../typings"

export const prismicClient = new ApolloClient({
  link: PrismicLink({
    uri: `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
})

type QueryPrismicArgs<V> = {
  query: DocumentNode
  variables?: V
} & PreviewData

export const queryPrismic = <T, V>({
  query,
  variables,
  previewData,
}: QueryPrismicArgs<V>): Promise<ApolloQueryResult<T>> => {
  const { ref: previewRef } = previewData
  return prismicClient.query({
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
