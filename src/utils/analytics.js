/* global analytics */
import { useCallback, useEffect, useRef } from "react"
import { makeVar, useQuery, useReactiveVar } from "@apollo/client"
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
  if (!params || Object.keys(params).length === 0) return {}
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

export function useAnalytics(defaultParams) {
  const segmentRef = useRef()
  const locationRef = useRef()
  const analyticsVarParams = useReactiveVar(analyticsVar)

  const { data } = useQuery(GET_ANALYTICS_QUERY)

  const identify = useCallback(
    (traits) => {
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
                ...extractTraits({ channel: "direct", ...defaultParams }),
                ...extractTraits(analyticsVarParams),
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
      console.warn("Identify call not performed due to missing dependencies")
      return Promise.resolve()
    },
    [data, segmentRef.current]
  )

  const track = useCallback(
    (eventName, properties) => {
      if (segmentRef.current && data?.analytics?.uuid) {
        const segment = segmentRef.current
        const {
          analytics: { uuid },
        } = data

        return new Promise((resolve, reject) => {
          try {
            segment.track(eventName, properties, { userId: uuid }, resolve)
          } catch (e) {
            console.error(e)
            reject(e)
          }
        })
      }
      console.warn("Track call not performed due to missing dependencies")
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
  return { analytics: data?.analytics, identify, track }
}
