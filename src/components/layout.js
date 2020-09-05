import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";

const Header = () => (
  <div style={{ margin: "0 auto", paddingTop: "10%", textAlign: "center" }}>
    <h1> ⛰Picoblog </h1>{" "}
  </div>
);

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <Container>
        <Header />
        <Navigation />
        {children}
      </Container>
    );
  }
}

export default Template;
