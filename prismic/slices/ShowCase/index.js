import React from "react"
import Showcase from "components/core/Showcase"
import { availContainerWidth } from "lib/config"
import RichText from "prismic/components/RichText"
import Anchor from "prismic/components/Anchor"

const MySlice = ({ slice }) => {
  const {
    primary: { title, description, image, flip, hash },
  } = slice
  const cases = slice.items.map(({ icon, copy }) => ({
    icon,
    copy: <RichText render={copy} />,
  }))
  return (
    <React.Fragment>
      {hash && <Anchor hash={hash} />}
      <Showcase
        copy={
          <React.Fragment>
            <RichText
              color="blue_500"
              render={title}
              heading
              fontSize="3rem"
              mb="2rem"
            />
            <RichText render={description} />
          </React.Fragment>
        }
        image={image}
        cases={cases}
        caseInterval={4000}
        containerWidth={availContainerWidth}
        flip={flip}
        mb="10rem"
      />
    </React.Fragment>
  )
}

export default MySlice
