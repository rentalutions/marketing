import React from "react"
import { Box } from "@rent_avail/layout"
import { ArticleList } from "./index"

export default { title: "Components/ArticleList" }

export function Default() {
  return (
    <Box width="100%" py="4rem" background="#F9F9F9">
      <ArticleList
        title={<Box as="h1">Recent Articles</Box>}
        articles={[
          {
            image: {
              bg: "ui_500",
              url: "https://picsum.photos/300/400?cache=0",
              alt: "",
            },
            title: "Lorem ipsum",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>Nam mattis sapien sit amet justo aliquam venenatis.</b>
                <p>
                  Suspendisse tincidunt nisl vel pellentesque sollicitudin.
                  Donec Donec nec vestibulum orci. Praesent id mauris nisl.
                  Curabitur ornare nisl quis velit mollis, non consectetur neque
                  efficitur.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            title: "Dolor sit amet",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>Donec id elit vel metus feugiat consectetur quis a odio. </b>
                <p>
                  Vestibulum fermentum massa non quam interdum auctor. Integer
                  accumsan ornare commodo. Consectetur adipiscing elit. Nam
                  mattis sapien sit amet justo aliquam venenatis. Suspendisse
                  tincidunt nisl vel pellentesque sollicitudin. Donec nec
                  vestibulum orci. Praesent id mauris nisl.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            image: {
              bg: "ui_500",
              url: "https://picsum.photos/300/200?cache=1",
              alt: "",
            },
            title: "Consectetur adipiscing",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>
                  Sed sed turpis nec ligula laoreet aliquet bibendum nec magna.
                </b>
                <p>
                  In egestas nibh vel leo malesuada, ac convallis justo blandit.
                  Cras nec tortor non ligula volutpat laoreet nec at ipsum. Nunc
                  eu tincidunt velit. Nam tincidunt tincidunt mauris pulvinar
                  tincidunt.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            image: {
              bg: "ui_500",
              url: "https://picsum.photos/300?cache=2",
              alt: "",
            },
            title: "Ipsum dolor",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>Vestibulum fermentum massa non quam interdum auctor.</b>
                <p>
                  Integer accumsan ornare commodo. Donec id elit vel metus
                  feugiat consectetur quis a odio.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            title: "Nam mattis sapien",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>Donec vitae rhoncus nibh.</b>
                <p>
                  Etiam erat leo, accumsan sed finibus cursus, sodales sed
                  sapien. Duis at massa at justo fringilla placerat. Sed rutrum
                  neque elit, in mollis mauris laoreet at. Nulla laoreet neque
                  massa, eu tristique ligula porta sit amet. Nam sit amet ex vel
                  arcu convallis dapibus.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            image: {
              bg: "ui_500",
              url: "https://picsum.photos/200/400?cache=3",
              alt: "",
            },
            title: "Ipsum dolor",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <b>Suspendisse imperdiet auctor felis in hendrerit.</b>
                <p>
                  Donec sollicitudin dolor venenatis magna venenatis, vel
                  viverra ligula rutrum. Interdum et malesuada fames ac ante
                  ipsum primis in faucibus. Pellentesque egestas ex sit amet
                  faucibus pretium.
                </p>
              </Box>
            ),
            action: {
              type: "link",
              label: "Read More",
            },
          },
          {
            bg: "blue_100",
            link: {
              href: "https://avail.co",
            },
            content: (
              <Box>
                <h4>Sed turpis ligula nec magna!</h4>
                <p>
                  In egestas nibh vel leo malesuada, ac convallis justo blandit.
                  Cras nec tortor non ligula volutpat laoreet nec at ipsum. Nunc
                  eu tincidunt velit. Nam tincidunt tincidunt mauris pulvinar
                  tincidunt. Nam ac placerat tellus. Nunc at eleifend ipsum.
                  Phasellus a est a felis sollicitudin tincidunt.
                </p>
              </Box>
            ),
            action: {
              type: "button",
              label: "See more guides",
            },
          },
        ]}
      />
    </Box>
  )
}