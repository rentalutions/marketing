import { ApolloError, throwServerError } from "@apollo/client"

async function analyticsResolver() {
  try {
    const response = await fetch(`/api/analytics`)
    const body = await response.json()
    if (!response.ok) {
      throwServerError(
        response,
        body,
        body?.message || "Unknown request failure"
      )
    }
    return { __typename: "Analytics", ...body }
  } catch (error) {
    throw new ApolloError({
      errorMessage: error?.message || "Unknown request failure",
    })
  }
}

const resolvers = {
  Query: {
    analytics: analyticsResolver,
  },
}

export default resolvers
