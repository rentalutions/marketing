import React from "react"
import { useUID } from "react-uid"
import { Container } from "@rent_avail/layout"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { useUrlResolver } from "components/partials/UrlResolver"
import { STYLING } from "config"

import { FadeIn, withFadeIn } from "components/fadeIn"

function EmailCapture({
  containerWidth,
  title,
  hash,
  label,
  buttonText,
}) {
  const urlResolver = useUrlResolver()
  const inputLabelId = useUID()

  const FadeInEmailCaptureInput = withFadeIn(EmailCaptureInput)

  return (
    <Container maxWidth={containerWidth} my="6rem">
      {hash}
      <Container maxWidth="66rem" px="0">
        {title &&
          <FadeIn>
            {React.cloneElement(title, {
              sx: { ...STYLING.title, ...title?.props?.sx },
              my: "2.5rem",
              textAlign: ["left", "center"],
              color: "blue_500",
            })}
          </FadeIn>
        }
        <FadeInEmailCaptureInput
          transition={{ delay: 0.7 }}
          inputLabel={label}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={urlResolver("https://www.avail.co/users/new")}
          queryParamName="email"
        />
      </Container>
    </Container>
  )
}

export { EmailCapture }
