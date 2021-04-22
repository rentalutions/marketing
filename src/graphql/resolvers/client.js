import objectHash from "object-hash"
import { ApolloError, throwServerError } from "@apollo/client"

const IN_PROGRESS_REQUESTS = {}

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

  if (!IN_PROGRESS_REQUESTS[hash]) {
    IN_PROGRESS_REQUESTS[hash] = execRequest(params).then((result) => {
      delete IN_PROGRESS_REQUESTS[hash]
      return result
    })
  }
  return IN_PROGRESS_REQUESTS[hash]
}
