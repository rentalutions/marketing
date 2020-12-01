export const availContainerWidth = ["62rem", "62rem", "62rem", "80rem", "96rem"]
export const breakpoints = ["480px", "720px", "960px", "1200px", "1440px"]

export const defaultSeo = {
  openGraph: {
    type: "business.business",
    site_name: "Rentalutions, Inc., dba Avail",
    images: [
      {
        url:
          "https://s3.amazonaws.com/rentalutions-assets/marketing/og-image-home.png",
      },
    ],
  },
  additionalMetaTags: [
    { property: "fb:profile_id", content: "285256198168466" },
    {
      property: "business:contact_data:street_address",
      content: "900 North Franklin Suite 404",
    },
    { property: "business:contact_data:locality", content: "Chicago" },
    { property: "business:contact_data:region", content: "Illinois" },
    { property: "business:contact_data:postal_code", content: "60610" },
    {
      property: "business:contact_data:country_name",
      content: "United States",
    },
    { property: "business:contact_data:email", content: "support@avail.co" },
    {
      property: "business:contact_data:phone_number",
      content: "(312) 292-9347",
    },
    {
      property: "business:contact_data:website",
      content: "https://www.avail.co",
    },
    { property: "place:location:latitude", content: "41.89922" },
    { property: "place:location:longitude", content: "-87.63611" },
  ],
}
