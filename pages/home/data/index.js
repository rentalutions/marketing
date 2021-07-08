import blockquote from "./blockquote"
import hero from "./hero"
import showcase from "./showcase"
import testimonials from "./testimonials"
import emailcapture from "./emailcapture"
import howitworks from "./howitworks"
import articlelist from "./articlelist"

export default {
  meta_title:
    "Free Landlord Software: Rental Listings, Tenant Screening &amp; More | Avail",
  meta_description:
    "Free landlord software to help you manage your rental properties. List your rental, find and screen tenants, draft leases, collect rent online, and more.",
  url: "https://info.avail.co/",
  background: "ui_300",
  body: [
    { ...hero },
    // timeline,
    { ...blockquote },
    { ...howitworks },
    { ...testimonials },
    { ...showcase },
    { ...articlelist },
    { ...emailcapture },
  ],
}
