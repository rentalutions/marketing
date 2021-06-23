import React from "react"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { CallToAction } from "components/organisms/CallToAction"
import { useUrlResolver } from "components/partials/UrlResolver"
import { useUID } from "react-uid"
import { useEmailCaptureTracking } from "utils/analytics"
import { AVAIL_BASE_URL } from "utils/env"
import RichText from "components/partials/SliceZone/components/RichText"
import Image from "next/image"
import { CONTAINER_WIDTHS } from "config"

const CallToActionWithEmailCaptureSlice = ({ slice }) => {
  const {
    primary: {
      title,
      description,
      image,
      background,
      color,
      orientation = "left",
      skew = "none",
      label,
      redirectUrl,
      buttonText,
      optInCopy,
      optInContext,
      outro,
    },
  } = slice

  const urlResolver = useUrlResolver()
  const inputLabelId = useUID()

  const isEmailCapture = label && buttonText

  const [handleSubmit] = useEmailCaptureTracking({
    Location: "Call to Action w/ Email Capture Slice",
  })

  let captureRedirectUrl
  let queryParamName

  if (redirectUrl) {
    captureRedirectUrl = redirectUrl
  } else {
    captureRedirectUrl = `${AVAIL_BASE_URL}/users/new`
    queryParamName = "email"
  }

  return (
    <CallToAction
      containerWidth={CONTAINER_WIDTHS}
      bg={background}
      color={color}
      orientation={orientation}
      skew={skew}
      childrenGrow
      title={title && <RichText render={title} />}
      description={description && <RichText render={description} />}
      image={
        image?.url && (
          <Image
            src={image.url}
            width={image.dimensions.width}
            height={image.dimensions.height}
            alt={image.alt}
            title={image.alt}
            layout="intrinsic"
            priority
          />
        )
      }
    >
      {isEmailCapture && (
        <EmailCaptureInput
          background={background}
          inputLabel={label}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={urlResolver(captureRedirectUrl)}
          onSubmit={handleSubmit}
          queryParamName={queryParamName}
          optInContext={optInContext}
          optInCopy={<RichText render={optInCopy} />}
          outro={outro?.[0]?.text && <RichText render={outro} />}
        />
      )}
    </CallToAction>
  )
}

export default CallToActionWithEmailCaptureSlice
