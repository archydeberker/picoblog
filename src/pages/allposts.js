import React from "react";
import { graphql } from "gatsby";
import get from "lodash/get";
import { Helmet } from "react-helmet";
import styles from "./allposts.module.css";
import Layout from "../components/layout";
import ArticlePreview from "../components/article-preview";

class AllPosts extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const posts = get(this, "props.data.allContentfulPost.edges");
    const user = get(this, "props.data.contentfulUser");
    return (
      <Layout location={this.props.location}>
        <div style={{ background: "#fff" }}>
          <Helmet title={siteTitle} />
          <div className="wrapper">
            <h2 className="section-headline">Posts by all users</h2>
            <ul className="article-list">
              {posts.map(({ node }) => {
                return (
                  <li key={[node.user.slug, node.slug].join("/")}>
                    <ArticlePreview article={node} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Layout>
    );
  }
}

export default AllPosts;

export const pageQuery = graphql`
  query AllPosts {
    allContentfulPost(sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          createdAt(formatString: "MMMM Do, YYYY")
          slug
          body {
            childMarkdownRemark {
              html
            }
          }
          user {
            name
            slug
          }
        }
      }
    }
  }
`;
