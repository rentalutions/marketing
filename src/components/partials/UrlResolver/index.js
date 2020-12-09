import React, { useContext } from "react"
import { useRouter } from "next/router"
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
  const router = useRouter()
  const url = new URL(`http://irrelevant/${router.asPath}`)
  const urlResolver = createUrlResolver({
    ...params,
    ...fromEntries(url.searchParams),
  })
  return (
    <UrlResolverContext.Provider value={urlResolver}>
      {children}
    </UrlResolverContext.Provider>
  )
}

export const useUrlResolver = () => {
  return useContext(UrlResolverContext)
}
