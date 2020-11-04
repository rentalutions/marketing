import { ApolloClient, InMemoryCache } from "@apollo/client"
import { PrismicLink } from "apollo-link-prismic"

const client = new ApolloClient({
  link: PrismicLink({
    uri: "https://your-repository-name.prismic.io/graphql",
  }),
  cache: new InMemoryCache(),
})

export default client
