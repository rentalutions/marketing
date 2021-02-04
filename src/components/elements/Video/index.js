import React from "react"
import { Box } from "@rent_avail/layout"
import usePlatformDetector, { BROWSER } from "utils/usePlatformDetector"

function Video({ src, ...props }) {
  const { browser } = usePlatformDetector()
  const forcePreview = browser === BROWSER.Safari

  return src ? (
    <Box
      as="video"
      controls
      preload="metadata"
      src={forcePreview ? `${src}#t=0.001` : src}
      width="100%"
      {...props}
    />
  ) : null
}

export default Video
