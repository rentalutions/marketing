import React from "react"
import { Flex } from "@rent_avail/layout"
import { Text } from "@rent_avail/typography"
import { useTheme } from "styled-components"

import ArticleListSlice from "./components/ArticleListSlice"
import ButtonCTASlice from "./components/ButtonCTASlice"
import EmailCaptureSlice from "./components/EmailCaptureSlice"
import FAQSlice from "./components/FrequentlyAskedQuestionsSlice"
import HeroSlice from "./components/HeroSlice"
import HeroWithEmailCaptureSlice from "./components/HeroWithEmailCaptureSlice"
import HowItWorksSlice from "./components/HowItWorksSlice"
import PitchCardsSlice from "./components/PitchCardsSlice"
import PlansPricesSlice from "./components/PlansPricesSlice"
import ShowcaseSlice from "./components/ShowcaseSlice"
import TestimonialsCardsSlice from "./components/TestimonialsCardsSlice"
import TestimonialsCarouselSlice from "./components/TestimonialsCarouselSlice"

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
      case "button_cta":
        return <ButtonCTASlice key={key} slice={slice} />
      case "email_capture":
        return <EmailCaptureSlice key={key} slice={slice} />
      case "faq":
        return <FAQSlice key={key} slice={slice} />
      case "hero":
        return <HeroSlice key={key} slice={slice} />
      case "hero_unit":
      case "hero_email_capture":
        return <HeroWithEmailCaptureSlice key={key} slice={slice} />
      case "how_it_works":
        return <HowItWorksSlice key={key} slice={slice} />
      case "pitch_cards":
        return <PitchCardsSlice key={key} slice={slice} />
      case "plans_and_prices":
        return <PlansPricesSlice key={key} slice={slice} />
      case "show_case":
        return <ShowcaseSlice key={key} slice={slice} />
      case "testimonials":
      case "testimonials_cards":
        return <TestimonialsCardsSlice key={key} slice={slice} />
      case "testimonials_carousel":
        return <TestimonialsCarouselSlice key={key} slice={slice} />
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
