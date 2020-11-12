import { gql } from "@apollo/client"
import { queryPrismic } from "./index"
import { PreviewData } from "../typings"
import {
  GetHomepageQuery,
  GetHomepageQueryVariables,
} from "../typings/generated/graphql"

const HOMEPAGE_QUERY = gql`
  query getHomepage {
    allHomepages {
      edges {
        node {
          title
          tagline
          button_link {
            ... on _ExternalLink {
              url
              target
            }
          }
          button_text
          image
          body {
            ... on HomepageBodyPitch_cards {
              type
              primary {
                pitch_title
                pitch_text
                pitch_eyebrow
              }
              fields {
                card_icon {
                  ... on _ImageLink {
                    url
                  }
                }
                card_text
                card_title
              }
            }
            ... on HomepageBodyText {
              type
              primary {
                text
              }
            }
          }
        }
      }
    }
  }
`

export const getHomepage = ({ previewData }: PreviewData) => {
  return queryPrismic<GetHomepageQuery, GetHomepageQueryVariables>({
    query: HOMEPAGE_QUERY,
    previewData,
  })
}
