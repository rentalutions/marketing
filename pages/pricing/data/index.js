import cards from "./cards"
import text from "./text"
import emailcapture from "./emailcapture"

export default {
  meta_title: "Pricing Plans & Features | Avail",
  meta_description:
    "View pricing plans for Avail online landlord software. Avail helps landlords manage rental properties, find and screen tenants, create leases and collect rent.",
  url: "https://info.avail.co/pricing",
  background: "ui_300",
  body: [{ ...cards }, { ...text }, { ...emailcapture }],
}
