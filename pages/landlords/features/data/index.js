import hero from "./hero"
import pitchCards from "./pitch-cards"
import howItWorks from "./how-it-works"
import testimonials from "./testimonials"
import emailCapture from "./email-capture"

export default {
  meta_title:
    "Landlords Features | Avail",
  meta_description:
    "Manage your rental property with free landlord software to simplify the way you find, screen, and manage tenants.",
  url: "https://www.avail.co/landlords/features?",
  background: "ui_300",
  body: [{ ...hero }, { ...pitchCards }, { ...howItWorks }, { ...testimonials }, { ...emailCapture }],
}