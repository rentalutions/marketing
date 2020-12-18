import React, { useContext, useEffect, useState } from "react"
import fromEntries from "fromentries"

const isAvailUrl = (url) => {
  return url && url.includes("avail.co")
}

const createUrlResolver = (params) => {
  return (urlString) => {
    if (!isAvailUrl(urlString)) {
      return urlString
    }
    const url = new URL(urlString)
    Object.entries(params).forEach(([key, value]) => {
      if (!url.searchParams.has(key) && value) {
        url.searchParams.append(key, value)
      }
    })
    return url.toString()
  }
}

const UrlResolverContext = React.createContext((url) => url)

export const UrlResolverProvider = ({ params, children }) => {
  const [urlResolver, setUrlResolver] = useState(null)
  useEffect(() => {
    if (!urlResolver) {
      const url = new URL(window.location.href)
      setUrlResolver(() =>
        createUrlResolver({
          ...params,
          ...fromEntries(url.searchParams),
        })
      )
    }
  }, [urlResolver])
  return (
    <UrlResolverContext.Provider value={urlResolver || ((url) => url)}>
      {children}
    </UrlResolverContext.Provider>
  )
}

export const useUrlResolver = () => {
  return useContext(UrlResolverContext)
}
