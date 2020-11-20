import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"
import Prismic from "prismic-javascript"

const prismicApolloClient = new ApolloClient({
  link: PrismicLink({
    uri: `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
})

const prismicClient = Prismic.client(
  `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/api/v2`
)

const prismicQuery = ({ query, variables, previewData }) => {
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

export { prismicClient, prismicApolloClient, prismicQuery }
