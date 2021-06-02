import fromEntries from "fromentries"

const TRAITS_MAP = {
  gclid: "gclid",
  msclkid: "msclkid",
  Keyword: "utm_term",
  Campaign: "utm_campaign",
  "Sales Channel": "channel",
  "Partner Name": "partner_name",
  Source: "utm_source",
  Medium: "utm_medium",
  "Ad Group": "ad_group",
  Content: "utm_content",
  "Signup Page": "signup_page",
  "Conversion Gclid": "gclid",
  "Conversion Msclkid": "msclkid",
  "Conversion Keyword": "utm_term",
  "Conversion Campaign": "utm_campaign",
  "Conversion Channel": "channel",
  "Conversion Partner Name": "partner_name",
  "Conversion Source": "utm_source",
  "Conversion Medium": "utm_medium",
  "Conversion Ad Group": "ad_group",
  "Conversion Content": "utm_content",
}

export function extractTraits(params) {
  if (!params || Object.keys(params).length === 0) return {}
  return Object.entries(TRAITS_MAP).reduce((res, [key, value]) => {
    if (params[value]) {
      res[key] = params[value]
    }
    return res
  }, {})
}

export function extractTraitsFromLocation(location) {
  if (!location?.href) return {}
  const url = new URL(location.href)
  return extractTraits(fromEntries(url.searchParams))
}
