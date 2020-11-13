import * as React from "react"
import { MediaMentions } from "."

export default { title: "Components/Media Mentions" }

export function Default() {
  return (
    <MediaMentions
      title="Mentioned In"
      logos={[
        "/media/wsj.svg",
        "/media/fortune.svg",
        "/media/techcrunch.svg",
        "/media/fast_company.svg",
        "/media/chicago_tribune.svg",
      ]}
      description={<a>View our press page.</a>}
    />
  )
}
