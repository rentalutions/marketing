import { gql } from "@apollo/client"

export const GET_AVAIL_ANALYTICS_QUERY = gql`
  query getAvailAnalytics {
    availAnalytics @client {
      uuid
    }
  }
`
