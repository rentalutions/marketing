import hero from "./hero"
import pitchCards from "./pitch-cards"
import firstHowItWorks from "./first-how-it-works"
import secondHowItWorks from "./second-how-it-works"

export default {
  meta_title:
    "FastPay: Next-Day Payments for Landlords | Avail",
  meta_description:
    "Get rent payments deposited into your account as fast as the next day. With FastPay, landlords can receive rent payments faster than ever.",
  url: "https://www.avail.co/landlords/fastpay?",
  background: "ui_300",
  body: [{ ...hero }, { ...firstHowItWorks }, { ...pitchCards }, { ...secondHowItWorks }],
}  