import React, { useContext } from "react"

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

const UrlResolverContext = React.createContext(null)

export const UrlResolverProvider = ({ params, children }) => {
  const urlResolver = createUrlResolver(params)
  return (
    <UrlResolverContext.Provider value={urlResolver}>
      {children}
    </UrlResolverContext.Provider>
  )
}

export const useUrlResolver = () => {
  const urlResolver = useContext(UrlResolverContext)
  if (urlResolver === null) {
    throw new Error("Must use UrlResolver within an UrlResolverProvider")
  }
  return urlResolver
}
