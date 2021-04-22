import React from "react"
import { Container } from "@rent_avail/layout"

import RichText from "components/partials/SliceZone/components/RichText"
import EmailCapture from "components/organisms/EmailCapture"

import { CONTAINER_WIDTHS } from "config"

const EMAIL_CAPTURE_PROPS = {
  title: "Your first unit is always free.",
  inputLabel: "Enter your Email",
  buttonText: "Join Today",
  buttonUrl: "https://www.avail.co/users/new?utf8=%E2%9C%93&commit=Join+Today",
  queryParamName: "email",
}

const TenantFeaturesEmailCapture = (props) => (
  <Container {...props} maxWidth={CONTAINER_WIDTHS} color="blue_900">
    <EmailCapture
      title={
        <RichText
          render={[
            {
              text: EMAIL_CAPTURE_PROPS.title,
              type: "heading2",
              spans: [],
            },
          ]}
        />
      }
      inputLabel={EMAIL_CAPTURE_PROPS.inputLabel}
      buttonText={EMAIL_CAPTURE_PROPS.buttonText}
      buttonUrl={EMAIL_CAPTURE_PROPS.buttonUrl}
      queryParamName={EMAIL_CAPTURE_PROPS.queryParamName}
    />
  </Container>
)

export default TenantFeaturesEmailCapture
