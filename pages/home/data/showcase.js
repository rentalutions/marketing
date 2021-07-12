export default {
  slice_type: "show_case",
  slice_label: null,
  items: [
    {
      icon: "Code",
      copy: [
        {
          type: "paragraph",
          text: "Your information is yours alone and will never be shared with any third parties.",
          spans: [
            {
              start: 41,
              end: 57,
              type: "strong",
            },
          ],
        },
      ],
    },
    {
      icon: "Cpu",
      copy: [
        {
          type: "paragraph",
          text: "Your personal information is encrypted with 256bit, banklevel SSL encryption.",
          spans: [
            {
              start: 44,
              end: 78,
              type: "strong",
            },
          ],
        },
      ],
    },
    {
      icon: "Clock",
      copy: [
        {
          type: "paragraph",
          text: "Our servers are automatically monitored 24/7 and have a 99.7% uptime guarantee.",
          spans: [
            {
              start: 30,
              end: 45,
              type: "strong",
            },
          ],
        },
      ],
    },
  ],
  primary: {
    hash: null,
    title: [
      {
        type: "heading1",
        text: "Focus on your properties, let us worry about the hard stuff.",
        spans: [
          {
            start: 0,
            end: 60,
            type: "strong",
          },
        ],
      },
    ],
    description: [
      {
        type: "paragraph",
        text: "With 128bit encryption and a consistently monitored network, your data and privacy are our highest concern.",
        spans: [],
      },
    ],
    image: {
      dimensions: {
        width: 640,
        height: 640,
      },
      alt: null,
      copyright: null,
      url: "/home/safe.png",
    },
    flip: true,
  },
}
