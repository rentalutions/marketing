import React, { useRef, useState } from "react"

export const AnalyticsContext = React.createContext({})

export function AnalyticsProvider({ children }) {
  const [analytics, setAnalytics] = useState()
  const [analyticsPageParams, setAnalyticsPageParams] = useState()
  const scriptAppended = useRef(false)
  return (
    <AnalyticsContext.Provider
      value={{
        analytics,
        setAnalytics,
        analyticsPageParams,
        setAnalyticsPageParams,
        scriptAppended,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  )
}
