import React from "react"
import { Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useTheme } from "styled-components"
import dynamic from "next/dynamic"

const SliceZone = ({ slices }) => {
  if (!slices) {
    return null
  }
  const { colors } = useTheme()
  return slices.map((slice, idx) => {
    const key = `${slice.slice_type}-${slice.version}-${idx}`
    switch (slice.slice_type) {
      case "button_cta": {
        const ButtonCTASlice = dynamic(() =>
          import("./components/ButtonCTASlice")
        )
        return <ButtonCTASlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "email_capture": {
        const EmailCaptureSlice = dynamic(() =>
          import("./components/EmailCaptureSlice")
        )
        return <EmailCaptureSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "faq": {
        const FAQSlice = dynamic(() =>
          import("./components/FrequentlyAskedQuestionsSlice")
        )
        return <FAQSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "hero": {
        const HeroSlice = dynamic(() => import("./components/HeroSlice"))
        return <HeroSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "hero_unit":
      case "hero_email_capture": {
        const HeroWithEmailCaptureSlice = dynamic(() =>
          import("./components/HeroWithEmailCaptureSlice")
        )
        return (
          <HeroWithEmailCaptureSlice key={key} slice={slice} sliceIndex={idx} />
        )
      }
      case "how_it_works": {
        const HowItWorksSlice = dynamic(() =>
          import("./components/HowItWorksSlice")
        )
        return <HowItWorksSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "pitch_cards": {
        const PitchCardsSlice = dynamic(() =>
          import("./components/PitchCardsSlice")
        )
        return <PitchCardsSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "plans_and_prices": {
        const PlansPricesSlice = dynamic(() =>
          import("./components/PlansPricesSlice")
        )
        return <PlansPricesSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "show_case": {
        const ShowcaseSlice = dynamic(() =>
          import("./components/ShowcaseSlice")
        )
        return <ShowcaseSlice key={key} slice={slice} sliceIndex={idx} />
      }
      case "testimonials":
      case "testimonials_cards": {
        const TestimonialsCardsSlice = dynamic(() =>
          import("./components/TestimonialsCardsSlice")
        )
        return (
          <TestimonialsCardsSlice key={key} slice={slice} sliceIndex={idx} />
        )
      }
      case "testimonials_carousel": {
        const TestimonialsCarouselSlice = dynamic(() =>
          import("./components/TestimonialsCarouselSlice")
        )
        return (
          <TestimonialsCarouselSlice key={key} slice={slice} sliceIndex={idx} />
        )
      }
      default:
        return (
          <Flex
            p="2rem"
            border={`2px dashed ${colors.red_500}`}
            alignContent="center"
            justifyContent="center"
            bg="red_300"
            color="ui_100"
            key="slice_warning"
          >
            <Text fontSize="3rem" fontWeight="800">
              Slice of type {slice.slice_type} is not implemented
            </Text>
          </Flex>
        )
    }
  })
}

export default SliceZone
