import { makeResolverRequest } from "graphql/resolvers/client"

async function analyticsResolver() {
  const analytics = await makeResolverRequest(`/api/analytics`)
  return { __typename: "Analytics", ...analytics }
}

const resolvers = {
  Query: {
    analytics: analyticsResolver,
  },
}

export default resolvers
