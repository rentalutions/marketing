import React from "react"
import * as icons from "react-feather"

const Icon = ({ name, ...props }) => {
  const IconTag = icons[name]
  return IconTag ? <IconTag {...props} /> : null
}

export default Icon
