import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"
import Cookies from "cookies"

const prismicClient = new ApolloClient({
  link: PrismicLink({
    uri: `https://${process.env.NEXT_PUBLIC_PRISMIC_REPO_ID}.prismic.io/graphql`,
  }),
  cache: new InMemoryCache(),
})

const prismicQuery = ({ query, variables, ctx }) => {
  const cookies = new Cookies(ctx.req, ctx.res)
  const previewRef = cookies.get("io.prismic.preview")
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

export { prismicClient, prismicQuery }
