import React from "react"
import { Box, Flex, Grid, Col, Stack, Container } from "@rent_avail/layout"
import {
  ChevronUp,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "react-feather"
import { Heading, Text } from "@rent_avail/typography"
import styled from "styled-components"
import { CONTAINER_WIDTHS } from "config"
import { useUrlResolver } from "components/partials/UrlResolver"
import Image from "next/image"

const FooterLinks = styled(Box)`
  margin-top: 3rem;
`

const FooterLinksHeading = styled(Heading)`
  color: ${({ theme }) => theme.colors.blue_500};
  text-transform: uppercase;
  font-size: 1.334rem;
  margin-bottom: 0.75rem;
`

const FooterText = styled(Text)`
  color: ${({ theme }) => theme.colors.blue_500};
  display: block;
  font-size: 1.334rem;
  margin-top: 0.6667rem;
`

const FooterIcon = styled(Box).attrs({
  as: "a",
  margin: [0, 0, 0, "2rem 0 0"],
})`
  display: inline-block;
  margin: 
  &:first-child {
    margin: 0;
  }
  &,
  &:hover,
  &:visited {
    color: ${({ theme }) => theme.colors.blue_500};
  }
`

const AvailFooter = () => {
  const currentYear = new Date().getFullYear()
  const urlResolver = useUrlResolver()

  return (
    <Box bg="blue_100">
      <Container maxWidth={CONTAINER_WIDTHS} p="2rem 2rem 3rem">
        <Flex justifyContent="center">
          <Flex
            as="a"
            href="#top"
            color="blue_500"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo(0, 0)
            }}
          >
            To Top
            <ChevronUp style={{ marginLeft: ".5rem" }} />
          </Flex>
        </Flex>
        <Grid gap={["2rem", "2rem", "4rem"]} justifyContent="space-between">
          <Col span={[12, 12, 12, 3]} order={[1, 1, 1, 0]}>
            <Flex>
              <Stack
                direction={["row", "row", "row", "column"]}
                alignItems="center"
                justifyContent={[
                  "space-between",
                  "space-between",
                  "space-between",
                  "center",
                ]}
                width={["100%", "100%", "100%", "initial"]}
                mt="2rem"
                color="blue_500"
              >
                <FooterIcon
                  aria-label="Avail.co"
                  mt="0"
                  href={urlResolver("https://www.avail.co/")}
                >
                  <Image
                    src="/logo-glyph.svg"
                    width={48}
                    height={48}
                    alt="Avail Logo"
                    title="Avail"
                  />
                </FooterIcon>
                <FooterIcon
                  aria-label="Avail on Facebook"
                  href="https://www.facebook.com/helloavail"
                  target="_blank"
                  rel="noopener"
                >
                  <Facebook />
                </FooterIcon>
                <FooterIcon
                  aria-label="Avail on Twitter"
                  href="https://www.twitter.com/helloavail"
                  target="_blank"
                  rel="noopener"
                >
                  <Twitter />
                </FooterIcon>
                <FooterIcon
                  aria-label="Avail on LinkedIn"
                  href="https://www.linkedin.com/company/helloavail"
                  target="_blank"
                  rel="noopener"
                >
                  <Linkedin />
                </FooterIcon>
                <FooterIcon
                  aria-label="Avail on Instagram"
                  href="https://www.instagram.com/helloavail"
                  target="_blank"
                  rel="noopener"
                >
                  <Instagram />
                </FooterIcon>
                <FooterIcon
                  aria-label="Avail on Youtube"
                  href="https://www.youtube.com/channel/UC4DQLbxKjV2r9xhMtLIDAqQ"
                  target="_blank"
                  rel="noopener"
                >
                  <Youtube />
                </FooterIcon>
              </Stack>
            </Flex>
          </Col>
          <Col span={[12, 6, 4, 3]}>
            <FooterLinks>
              <FooterLinksHeading as="h5">Get Started</FooterLinksHeading>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/users/new")}
              >
                Sign up as a landlord
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/users/new?tenant=true")}
              >
                Sign up as a tenant
              </FooterText>
            </FooterLinks>
            <FooterLinks>
              <FooterLinksHeading as="h5">About Us</FooterLinksHeading>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/about")}
              >
                Company
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/house-rules")}
              >
                House Rules
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/testimonials")}
              >
                Testimonials
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/jobs")}
              >
                Jobs
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver("https://www.avail.co/press")}
              >
                Press
              </FooterText>
            </FooterLinks>
          </Col>
          <Col span={[12, 6, 4, 3]}>
            <FooterLinks>
              <FooterLinksHeading as="h5">How It Works</FooterLinksHeading>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/rental-listings"
                )}
              >
                Rental Listings
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/online-rental-applications"
                )}
              >
                Rental Applications
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/online-tenant-screening"
                )}
              >
                Tenant Screening
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/credit-and-background-check"
                )}
              >
                Credit, Criminal, Eviction Reports
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/rental-lease-agreement"
                )}
              >
                Digital Leasing
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/online-rent-collection"
                )}
              >
                Online Rent Payments
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/maintenance-tracking"
                )}
              >
                Maintenance Tracking
              </FooterText>
              <FooterText
                as="a"
                href={urlResolver(
                  "https://www.avail.co/landlords/rent-analysis"
                )}
              >
                Rent Price Analysis
              </FooterText>
            </FooterLinks>
          </Col>
          <Col span={[12, 6, 4, 3]}>
            <Flex
              flexDirection="column"
              alignItems={[
                "flex-start",
                "flex-start",
                "flex-start",
                "flex-end",
              ]}
            >
              <Box>
                <FooterLinks>
                  <FooterLinksHeading as="h5">Resources</FooterLinksHeading>
                  <FooterText
                    as="a"
                    href={urlResolver("https://www.avail.co/education")}
                  >
                    Landlord Education
                  </FooterText>
                  <FooterText
                    as="a"
                    href={urlResolver("https://community.avail.co")}
                  >
                    Avail Community
                  </FooterText>
                  <FooterText
                    as="a"
                    href={urlResolver("https://www.avail.co/blog")}
                  >
                    Avail Blog
                  </FooterText>
                  <FooterText
                    as="a"
                    href={urlResolver("https://support.avail.co")}
                  >
                    Help Center
                  </FooterText>
                  <FooterText
                    as="a"
                    href={urlResolver("https://www.avail.co/contact")}
                  >
                    Contact Us
                  </FooterText>
                  <FooterText
                    as="a"
                    href={urlResolver("https://www.avail.co/sitemap")}
                  >
                    Site Map
                  </FooterText>
                </FooterLinks>
                <FooterLinks>
                  <FooterLinksHeading as="h5">Avail</FooterLinksHeading>
                  <FooterText as="div">
                    <address style={{ fontStyle: "normal" }}>
                      Suite #404 <br />
                      900 N Franklin St. <br />
                      Chicago, IL 60610
                    </address>
                  </FooterText>
                  <FooterText>(312) 292-9347</FooterText>
                </FooterLinks>
              </Box>
            </Flex>
          </Col>
        </Grid>
      </Container>
      <Box bg="blue_500" color="blue_300">
        <Box
          as={Container}
          maxWidth={CONTAINER_WIDTHS}
          p="2.667rem 2rem"
          fontSize="1.334rem"
        >
          <Flex mb="1rem">
            <Text
              color="blue_100"
              as="a"
              href={urlResolver("https://www.avail.co/privacy")}
            >
              Privacy
            </Text>
            <Text mx=".5rem">|</Text>
            <Text
              color="blue_100"
              as="a"
              href={urlResolver("https://www.avail.co/terms")}
            >
              Terms
            </Text>
          </Flex>
          <Box>© 2011—{currentYear} Avail, All Rights Reserved.</Box>
        </Box>
      </Box>
    </Box>
  )
}

export default AvailFooter
