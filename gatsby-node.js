const Promise = require("bluebird");
const path = require("path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve("./src/templates/blog-post.js");
    const userPage = path.resolve("./src/templates/user-page.js");
    resolve(
      graphql(
        `
          query MyQuery {
            allContentfulPost(filter: {}) {
              edges {
                node {
                  title
                  slug
                  createdAt
                  body {
                    body
                  }
                  user {
                    number
                  }
                }
              }
            }
            allContentfulUser {
              edges {
                node {
                  number
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const posts = result.data.allContentfulPost.edges;
        posts.forEach((post) => {
          createPage({
            path: `/blog/${post.node.user.number}/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          });
        });

        const users = result.data.allContentfulUser.edges;

        users.forEach((user) => {
          createPage({
            path: `/blog/${user.node.number}`,
            component: userPage,
            context: {
              number: user.node.number,
            },
          });
        });
      })
    );
  });
};
