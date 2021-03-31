import { fixCookies } from "./preview"

function exit(req, res) {
  // Exit the current user from "Preview Mode". This function accepts no args.
  res.clearPreviewData()
  if (process.env.NODE_ENV === "development") {
    fixCookies(res)
  }

  // Redirect the user back to the index page.
  res.writeHead(307, { Location: req.query.redirectUrl || "/" })
  res.end()
}

export default exit
