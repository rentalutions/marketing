import objectHash from "object-hash"
import { ApolloError, throwServerError } from "@apollo/client"
import LRU from "lru-cache"

const inProgressRequestsCache = new LRU({ maxAge: 1000 * 5 })

function parseBody(input) {
  if (/^\s*<!doctype/i.test(input)) {
    return ""
  }
  try {
    return JSON.parse(input)
  } catch (e) {
    return input
  }
}

async function execRequest({ url, ...params }) {
  try {
    const response = await fetch(url, params)
    const responseBody = parseBody(await response.text())
    if (!response.ok) {
      throwServerError(
        response,
        responseBody,
        responseBody?.message || "Unknown request failure"
      )
    }
    return responseBody
  } catch (error) {
    throw new ApolloError({
      errorMessage: error?.message || "Unknown request failure",
    })
  }
}

export async function makeResolverRequest(url, method = "GET", body = null) {
  const params = {
    url,
    method,
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }
  if (body) {
    params.body = JSON.stringify(body)
  }
  const hash = objectHash(params)
  let request = inProgressRequestsCache.get(hash)
  if (!request) {
    request = execRequest(params).finally(() =>
      inProgressRequestsCache.del(hash)
    )
    inProgressRequestsCache.set(hash, request)
  }
  return request
}
