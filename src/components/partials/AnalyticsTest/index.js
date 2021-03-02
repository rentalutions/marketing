import React from "react"
import { useQuery } from "@apollo/client"
import { GET_AVAIL_ANALYTICS_QUERY } from "graphql/queries"

function AnalyticsTest() {
  const { data, error, loading } = useQuery(GET_AVAIL_ANALYTICS_QUERY)

  console.log(data, error, loading)

  return <React.Fragment />
}

export default AnalyticsTest
