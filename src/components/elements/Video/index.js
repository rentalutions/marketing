import React, { useEffect, useState } from "react"
import { Box } from "@rent_avail/layout"
import { isSafari } from "react-device-detect"

function Video({ src, ...props }) {
  const [forcePreview, setForcePreview] = useState(false)
  useEffect(() => {
    setForcePreview(isSafari)
  }, [])

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
