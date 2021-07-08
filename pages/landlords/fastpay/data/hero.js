export default {
    slice_type: "hero_unit",
    primary: {
      title: [
        {
          type: "heading1",
          text: "Rent scheduled Wednesday, June 2nd could be in your account on Thursday, June 3rd",
          spans: [
            {
                start: 63, 
                end: 81, 
                type: "strong"
            }
          ],
        },
      ],
      description: [
        {
          type: "paragraph", 
          text: "Next day payments now available for landlords on a…m plan. Get your money sooner without the hassle.", 
          spans: [],
        },
        {
          type: "paragraph", 
          text: "New to Avail? Sign up to get started", 
          spans: [],
        }
      ],
      background: "blue_500",
      color: "ui_100",
      skew: "left",
      stretch: true,
      image: {
        dimensions: {
          width: 257,
          height: 256,
        },
        alt: null,
        copyright: null,
        url: "/landlords/fastpay/fastpay__hero.png",
      },
      imagePosition: "background-top-right",
      primaryButtonId: null,
      primaryButtonLink: {link_type: "Web", url: "https://www.avail.co/users/new"},
      primaryButtonText: "Join Today",
      secondaryButtonId: null,
      secondaryButtonLink: {link_type: "Any"},
      secondaryButtonText: null,
      emailCaptureButtonText: "Join Today",
      emailCaptureLabel: "Email",
      emailCaptureOptInContext: null,
      emailCaptureOptInCopy: [],
      emailCaptureRedirectUrl: null
    },
  }  