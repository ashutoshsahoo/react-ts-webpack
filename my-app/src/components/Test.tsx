import React from "react";
import { Tabs, Tab } from "react-bootstrap";

export const Test = () => {
  return (
    <div className="mx-5">
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          home
        </Tab>
        <Tab eventKey="profile" title="Profile">
          profile
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          contact
        </Tab>
      </Tabs>
    </div>
  );
};
