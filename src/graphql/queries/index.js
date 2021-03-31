import { gql } from "@apollo/client"

export const GET_ANALYTICS_QUERY = gql`
  query getAnalytics {
    analytics @client {
      uuid
    }
  }
`
