export default {
  slice_type: "email_capture",
  slice_label: null,
  items: [],
  primary: {
    title: [{ type: "heading1", text: "Ready to get started?", spans: [] }],
    description: [
      {
        type: "heading4",
        text: "Create an account for free.",
        spans: [{ start: 0, end: 27, type: "strong" }],
      },
    ],
    background: "ui_300",
    color: "blue_900",
    orientation: "left",
    skew: "none",
    image: {},
    label: "Email",
    buttonText: "JOIN TODAY",
    redirectUrl:
      "https://www.avail.co/users/new?utf8=%E2%9C%93&commit=Join+Today",
    optInContext: null,
    optInCopy: [],
    outro: [
      {
        type: "paragraph",
        text: "Already a member? Sign in here.",
        spans: [
          { start: 18, end: 31, type: "strong" },
          {
            start: 18,
            end: 31,
            type: "hyperlink",
            data: { link_type: "Web", url: "https://www.avail.co/login" },
          },
        ],
      },
    ],
  },
}