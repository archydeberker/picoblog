import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import get from "lodash/get";
import Img from "gatsby-image";
import Layout from "../components/layout";
import Gallery from "@browniebroke/gatsby-image-gallery";
import "@browniebroke/gatsby-image-gallery/dist/style.css";
import heroStyles from "../components/hero.module.css";

class UserPageTemplate extends React.Component {
  render() {
    const user = get(this.props, "data.contentfulUser");
    const siteTitle = get(this.props, "data.site.siteMetadata.title");

    return (
      <Layout location={this.props.location}>
        <div> {user.name} </div>
      </Layout>
    );
  }
}

export default UserPageTemplate;

export const pageQuery = graphql`
  query UserBySlug($slug: String!) {
    contentfulUser(slug: { eq: $slug }) {
      name
    }
  }
`;
