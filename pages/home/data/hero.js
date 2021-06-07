export default {
  slice_type: "hero_unit",
  primary: {
    title: [
      {
        type: "heading1",
        text: "Feel good about the way you manage your rentals.",
        spans: [],
      },
    ],
    description: [
      {
        type: "paragraph",
        text:
          "Find tenants, view credit history, sign leases, and collect rent — on any device, with tools built specifically for DIY landlords.",
        spans: [
          {
            start: 0,
            end: 154,
            type: "label",
            data: {
              label: "subtitle",
            },
          },
        ],
      },
    ],
    background: "ui_300",
    color: "blue_900",
    skew: "left",
    stretch: true,
    image: {
      dimensions: {
        width: 900,
        height: 675,
      },
      alt: null,
      copyright: null,
      url: "/home/hero-bg.png",
    },
    imagePosition: "background-top-right",
    emailCaptureLabel: "Email",
    emailCaptureButtonText: "Join Today",
    emailCaptureRedirectUrl:
      "https://www.avail.co/users/new?utf8=%E2%9C%93&commit=Join+Today",
    emailCaptureOptInContext: null,
    emailCaptureOptInCopy: [],
  },
}
