/* global analytics */
import { useCallback, useEffect, useRef } from "react"
import { makeVar, useQuery } from "@apollo/client"
import { GET_ANALYTICS_QUERY } from "graphql/queries"
import fromEntries from "fromentries"

export const analyticsVar = makeVar({})

const TRAITS_MAP = {
  gclid: "gclid",
  msclkid: "msclkid",
  Keyword: "utm_term",
  Campaign: "utm_campaign",
  "Sales Channel": "channel",
  "Partner Name": "partner_name",
  Source: "utm_source",
  Medium: "utm_medium",
  "Ad Group": "ad_group",
  Content: "utm_content",
  "Signup Page": "signup_page",
  "Conversion Gclid": "gclid",
  "Conversion Msclkid": "msclkid",
  "Conversion Keyword": "utm_term",
  "Conversion Campaign": "utm_campaign",
  "Conversion Channel": "channel",
  "Conversion Partner Name": "partner_name",
  "Conversion Source": "utm_source",
  "Conversion Medium": "utm_medium",
  "Conversion Ad Group": "ad_group",
  "Conversion Content": "utm_content",
}

function extractTraits(params) {
  return Object.entries(TRAITS_MAP).reduce((res, [key, value]) => {
    if (params[value]) {
      res[key] = params[value]
    }
    return res
  }, {})
}

function extractTraitsFromLocation(location) {
  if (!location?.href) return {}
  const url = new URL(location.href)
  return extractTraits(fromEntries(url.searchParams))
}

export function useAnalytics(params) {
  const segmentRef = useRef()
  const locationRef = useRef()

  const { data } = useQuery(GET_ANALYTICS_QUERY)

  const identify = useCallback(
    async (traits) => {
      if (segmentRef.current && data?.analytics?.uuid) {
        const segment = segmentRef.current
        const {
          analytics: { uuid },
        } = data

        return new Promise((resolve, reject) => {
          try {
            segment.identify(
              uuid,
              {
                ...traits,
                ...extractTraits(params),
                ...extractTraitsFromLocation(locationRef.current),
              },
              resolve
            )
          } catch (e) {
            console.error(e)
            reject(e)
          }
        })
      }
      return Promise.resolve()
    },
    [data, segmentRef.current]
  )

  useEffect(() => {
    if (typeof analytics === "object") {
      analytics.ready(() => {
        segmentRef.current = analytics
      })
    }
    locationRef.current = window?.location
  }, [])

  return { identify }
}
