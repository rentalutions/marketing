import React, { useEffect } from "react"
import { useAnalytics } from "utils/analytics"

function AnalyticsGlobals() {
  const { analytics } = useAnalytics()
  useEffect(() => {
    window.__AVT_UUID = analytics?.uuid
  }, [analytics])
  return <React.Fragment />
}

export default AnalyticsGlobals
