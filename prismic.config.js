import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"

const client = new ApolloClient({
  link: PrismicLink({
    uri: `https://${process.env.PRISMIC_REPO_ID}.prismic.io/graphql`
  }),
  cache: new InMemoryCache(),
})

export default client
