import React from "react"

import StaticBasePage from "components/static/StaticBasePage"
import SliceZone from "components/partials/SliceZone"
import data from "./data"

const LandlordsFeatures = () => {
  const {
    meta_title: title,
    meta_description: description,
    url,
    background = "ui_100",
    body: slices,
  } = data

  return (
    <StaticBasePage
      title={title}
      description={description}
      url={url}
      background={background}
    >
      <SliceZone slices={slices} />
    </StaticBasePage>
  )
}

export default LandlordsFeatures
