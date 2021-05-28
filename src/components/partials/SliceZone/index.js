import React from "react"
import { Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useTheme } from "styled-components"
import dynamic from "next/dynamic"

const ArticleListSlice = dynamic(() => import("./components/ArticleListSlice"))
const BlockquoteSlice = dynamic(() => import("./components/BlockquoteSlice"))
const ButtonCTASlice = dynamic(() => import("./components/ButtonCTASlice"))
const EmailCaptureSlice = dynamic(() =>
  import("./components/EmailCaptureSlice")
)
const FAQSlice = dynamic(() =>
  import("./components/FrequentlyAskedQuestionsSlice")
)
const HeroSlice = dynamic(() => import("./components/HeroSlice"))
const HeroWithEmailCaptureSlice = dynamic(() =>
  import("./components/HeroWithEmailCaptureSlice")
)
const HowItWorksSlice = dynamic(() => import("./components/HowItWorksSlice"))
const PitchCardsSlice = dynamic(() => import("./components/PitchCardsSlice"))
const PlansPricesSlice = dynamic(() => import("./components/PlansPricesSlice"))
const ShowcaseSlice = dynamic(() => import("./components/ShowcaseSlice"))
const TestimonialsCardsSlice = dynamic(() =>
  import("./components/TestimonialsCardsSlice")
)
const TestimonialsCarouselSlice = dynamic(() =>
  import("./components/TestimonialsCarouselSlice")
)

const SliceZone = ({ slices }) => {
  if (!slices) {
    return null
  }
  const { colors } = useTheme()
  return slices.map((slice, idx) => {
    const key = `${slice.slice_type}-${slice.version}-${idx}`
    switch (slice.slice_type) {
      case "article_list":
        return <ArticleListSlice key={key} slice={slice} />
      case "blockquote":
        return <BlockquoteSlice key={key} slice={slice} />
      case "button_cta":
        return <ButtonCTASlice key={key} slice={slice} sliceIndex={idx} />
      case "email_capture":
        return <EmailCaptureSlice key={key} slice={slice} sliceIndex={idx} />
      case "faq":
        return <FAQSlice key={key} slice={slice} sliceIndex={idx} />
      case "hero":
        return <HeroSlice key={key} slice={slice} sliceIndex={idx} />
      case "hero_unit":
      case "hero_email_capture":
        return (
          <HeroWithEmailCaptureSlice key={key} slice={slice} sliceIndex={idx} />
        )
      case "how_it_works":
        return <HowItWorksSlice key={key} slice={slice} sliceIndex={idx} />
      case "pitch_cards":
        return <PitchCardsSlice key={key} slice={slice} sliceIndex={idx} />
      case "plans_and_prices":
        return <PlansPricesSlice key={key} slice={slice} sliceIndex={idx} />
      case "show_case":
        return <ShowcaseSlice key={key} slice={slice} sliceIndex={idx} />
      case "testimonials":
      case "testimonials_cards":
        return (
          <TestimonialsCardsSlice key={key} slice={slice} sliceIndex={idx} />
        )
      case "testimonials_carousel":
        return (
          <TestimonialsCarouselSlice key={key} slice={slice} sliceIndex={idx} />
        )
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
