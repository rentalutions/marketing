import React from "react"
import { Container } from "@rent_avail/layout"
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "./index"

export default {
  title: "Tabs",
}

export function BasicUsage() {
  return (
    <Container>
      <Tabs searchParam="tab">
        <TabList>
          <Tab>Tab One</Tab>
          <Tab param="one">Tab Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>Tab Panel One</TabPanel>
          <TabPanel>Tab Panel Two</TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  )
}
