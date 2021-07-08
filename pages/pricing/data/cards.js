export default {
  slice_type: "plans_and_prices",
  slice_label: null,
  items: [
    {
      image: {},
      title: "Unlimited Plan",
      price: "$0/unit",
      subtext: "Unlimited Units",
      description: null,
      features: [
        { type: "list-item", text: "Syndicated Listings", spans: [] },
        { type: "list-item", text: "Credit and Criminal Screening", spans: [] },
        { type: "list-item", text: "StateSpecific Leases", spans: [] },
        { type: "list-item", text: "Online Rent Payments", spans: [] },
        { type: "list-item", text: "Maintenance Tracking", spans: [] },
      ],
      buttonText: "GET STARTED",
      buttonLink: {
        link_type: "Web",
        url: "https://www.avail.co/users/new?subscription_plan=unlimited",
        target: "_blank",
      },
      buttonId: null,
      buttonIsPrimary: true,
      background: "ui_100",
      color: "blue_500",
      specialOffer: [],
    },
    {
      image: {},
      title: "Unlimited Plus Plan",
      price: "$5/unit",
      subtext: "Per Month",
      description: null,
      features: [
        {
          type: "paragraph",
          text:
            "Unlimited Plus includes everything in Unlimited, plus these premium features:",
          spans: [
            { start: 0, end: 14, type: "strong" },
            { start: 38, end: 47, type: "strong" },
          ],
        },

        { type: "list-item", text: "NextDay Rent Payments", spans: [] },
        { type: "list-item", text: "Waived ACH Fees", spans: [] },
        {
          type: "list-item",
          text: "Custom Applications and Leases",
          spans: [],
        },
        {
          type: "list-item",
          text: "Clone and Reuse Custom Lease Agreements",
          spans: [],
        },
        { type: "list-item", text: "Create a Properties Website", spans: [] },
      ],
      buttonText: "GET STARTED",
      buttonLink: {
        link_type: "Web",
        url: "https://www.avail.co/users/new?subscription_plan=unlimitedplus",
        target: "_blank",
      },
      buttonId: null,
      buttonIsPrimary: false,
      background: "blue_100",
      color: "blue_500",
      specialOffer: [],
    },
  ],
  primary: {
    title: [{ type: "heading1", text: "Free for landlords", spans: [] }],
    subtitle: [],
    linkText: null,
    link: { link_type: "Any" },
    background: "ui_300",
    color: "blue_900",
    skew: "none",
    direction: "vertical",
  },
}
