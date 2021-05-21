import { useCallback, useContext, useEffect, useRef } from "react"
import {
  extractTraits,
  extractTraitsFromLocation,
} from "utils/analytics/traits"
import { AnalyticsContext } from "utils/analytics/context"

export function useAnalytics(defaultParams) {
  const segmentRef = useRef()
  const locationRef = useRef()
  const { analytics, analyticsPageParams } = useContext(AnalyticsContext)

  const identify = useCallback(
    async (traits) => {
      const { uuid } = analytics
      if (segmentRef.current && uuid) {
        const segment = segmentRef.current
        return new Promise((resolve, reject) => {
          try {
            segment.identify(
              uuid,
              {
                ...traits,
                ...extractTraits({ channel: "direct", ...defaultParams }),
                ...extractTraits(analyticsPageParams),
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
    [analytics, segmentRef.current]
  )

  const track = useCallback(
    async (eventName, properties) => {
      const { uuid } = analytics
      if (segmentRef.current && uuid) {
        const segment = segmentRef.current
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
    [analytics, segmentRef.current]
  )

  useEffect(() => {
    if (typeof window.analytics === "object") {
      window.analytics.ready(() => {
        segmentRef.current = window.analytics
      })
    }
    locationRef.current = window?.location
  }, [])
  return { analytics, identify, track }
}

export function useEmailCaptureTracking(defaultProperties) {
  const { identify, track } = useAnalytics()

  const handleSubmit = useCallback(
    async ({ email, optInContext, optIn }) => {
      const traits = {
        Email: email,
        "Email Capture Opt In": optInContext || undefined,
        "Email Capture Opt In Checked": optInContext ? optIn : undefined,
      }
      await identify(traits)
      await track("Marketing Site Form Submission", {
        Type: "Email Capture",
        ...defaultProperties,
        ...traits,
      })
    },
    [identify, track]
  )

  return [handleSubmit]
}
