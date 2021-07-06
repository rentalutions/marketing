export default {
    slice_type: "hero",
    primary: {
      title: [
        {
          type: "heading1",
          text: "An Online Portal to Make Renting Easy",
          spans: [
            {
                start: 0, 
                end: 37, 
                type: "strong"
            }
          ],
        },
      ],
      description: [
        {
          type: "heading3",
          text:
            "The Avail resident portal gives you 24-hour access to pay rent, submit maintenance requests, improve your credit, and much more. Renting has never been so easy.",
          spans: [],
        },
      ],
      background: "ui_300",
      color: "blue_700",
      skew: "none",
      stretch: true,
      image: {
        dimensions: {
          width: 1160,
          height: 1073,
        },
        alt: null,
        copyright: null,
        url: "/tenants/features/hero.png",
      },
      imagePosition: "background-top-right",
      primaryButtonId: null,
      primaryButtonLink: {link_type: "Web", url: "https://www.avail.co/users/new"},
      primaryButtonText: "Join Today",
      secondaryButtonId: null,
      secondaryButtonLink: {link_type: "Any"},
      secondaryButtonText: null
    },
  } 