import { useContext, useEffect } from "react"
import { AnalyticsContext } from "utils/analytics/context"

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
  const { setAnalytics, scriptAppended } = useContext(AnalyticsContext)
  useEffect(() => {
    if (!scriptAppended.current) {
      const script = document.createElement("script")
      script.src = `${AVAIL_BASE_URL}/api/v2/public/analytics/noop.js`
      script.async = true
      script.onload = async () => {
        const analytics = await queryAnalytics()
        setAnalytics((prevAnalytics) => ({ ...prevAnalytics, ...analytics }))
        window.__AVT_UUID = analytics?.uuid
      }
      document.body.append(script)
      scriptAppended.current = true
    }
  }, [])
}
