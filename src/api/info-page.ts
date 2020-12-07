import { gql } from "@apollo/client"
import { queryPrismic } from "./index"
import { PreviewData } from "../typings"
import {
  GetInfoPageQuery,
  GetInfoPageQueryVariables,
} from "../typings/generated/graphql"

const INFO_PAGE_QUERY = gql`
  query getInfoPage($uid: String!, $lang: String = "en_US") {
    info(uid: $uid, lang: $lang) {
      name
      _meta {
        uid
        type
      }
      meta_title
      meta_description
      meta_keywords
      sticky_nav_bar
      nav_bar {
        primary
        push
        breakpoint
      }
    }
  }
`

export const getInfoPage = ({ previewData }: PreviewData) => {
  return queryPrismic<GetInfoPageQuery, GetInfoPageQueryVariables>({
    query: INFO_PAGE_QUERY,
    previewData,
  })
}
