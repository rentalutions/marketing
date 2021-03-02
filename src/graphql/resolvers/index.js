import fetchJsonp from "fetch-jsonp"
import { AVAIL_URL } from "utils/env"
import { throwServerError } from "@apollo/client"

async function availAnalyticsResolver() {
  try {
    const response = await fetchJsonp(`${AVAIL_URL}/api/v2/public/analytics`)
    const body = await response.json()
    return { __typename: "Analytics", ...body }
  } catch (error) {
    throwServerError(null, error, error?.message || "Unknown request failure")
  }
}

const resolvers = {
  Query: {
    availAnalytics: availAnalyticsResolver,
  },
}

export default resolvers
