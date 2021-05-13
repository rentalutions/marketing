import React, { cloneElement } from "react"
import { Box } from "@rent_avail/layout"
import { useInViewAnimation } from "utils/animation"
import EmailCaptureInput from "components/molecules/EmailCaptureInput"
import { STYLING } from "config"
import { motion } from "framer-motion"

function EmailCapture({
  containerBg,
  title,
  inputLabel,
  inputLabelId,
  buttonText,
  buttonUrl,
  queryParamName,
  onSubmit,
  animationPreset = "fadeIn",
}) {
  const [presets, intersectionView] = useInViewAnimation()
  const animation = presets[animationPreset]

  return (
    <Box as={motion.aside} {...animation?.container} ref={intersectionView}>
      {title && (
        <motion.aside {...animation?.item}>
          {cloneElement(title, {
            my: "2.5rem",
            sx: { ...STYLING.title, ...title.props?.sx },
          })}
        </motion.aside>
      )}
      <motion.aside {...animation?.item}>
        <EmailCaptureInput
          inputLabel={inputLabel}
          inputLabelId={inputLabelId}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
          queryParamName={queryParamName}
          background={containerBg}
          onSubmit={onSubmit}
        />
      </motion.aside>
    </Box>
  )
}

export default EmailCapture
