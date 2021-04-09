import { prismicClient, linkResolver } from "src/prismic.config"

export function fixCookies(res) {
  const cookies = res.getHeader("Set-Cookie")
  res.setHeader(
    "Set-Cookie",
    cookies.map((cookie) =>
      cookie.replace("Secure;", "").replace("SameSite=None", "")
    )
  )
}

async function preview(req, res) {
  const { token: ref, documentId } = req.query

  // Check the token parameter against the Prismic SDK
  const url = await prismicClient
    .getPreviewResolver(ref, documentId)
    .resolve(linkResolver, "/")

  if (!url) {
    return res.status(401).json({ message: "Invalid token" })
  }

  // Enable Preview Mode by setting the cookies
  res.setPreviewData({
    ref, // pass the ref to pages so that they can fetch the draft ref
  })

  if (process.env.NODE_ENV === "development") {
    fixCookies(res)
  }

  // Redirect the user to the share endpoint from same origin. This is
  // necessary due to a Chrome bug:
  // https://bugs.chromium.org/p/chromium/issues/detail?id=696204
  res.write(
    `<!DOCTYPE html><html><head><meta http-equiv="Refresh" content="0; url=${url}" />
    <script>window.location.href = '${url}'</script>
    </head>`
  )

  res.end()
}

export default preview
