import { useContext, useEffect, useRef } from "react"
import { AnalyticsContext } from "utils/analytics/context"
import { getSearchParams } from "utils/analytics/traits"

async function queryAnalytics() {
  try {
    const response = await fetch("/api/analytics")
    return response.json()
  } catch (e) {
    console.error(e)
  }
}

const AVAIL_BASE_URL =
  process.env.NEXT_PUBLIC_AVAIL_BASE_URL || "https://www.avail.co"

export function useAnalyticsScript() {
  const locationRef = useRef()
  const { analytics: pageAnalytics, setAnalytics, scriptAppended } = useContext(
    AnalyticsContext
  )
  useEffect(() => {
    locationRef.current = window?.location

    if (!scriptAppended.current && pageAnalytics) {
      const scriptUrl = new URL(
        `${AVAIL_BASE_URL}/api/v2/public/analytics/noop.js`
      )
      const scriptUrlParams = {
        ...pageAnalytics,
        ...getSearchParams(locationRef.current),
      }
      Object.entries(scriptUrlParams).forEach(([key, value]) => {
        if (value) {
          scriptUrl.searchParams.set(key, value)
        }
      })
      const script = document.createElement("script")
      script.src = scriptUrl.toString()
      script.async = true
      script.onload = async () => {
        const analytics = await queryAnalytics()
        setAnalytics((prevAnalytics) => ({ ...prevAnalytics, ...analytics }))
        window.__AVT_UUID = analytics?.uuid
      }
      document.body.append(script)
      scriptAppended.current = true
    }
  }, [pageAnalytics])
}
