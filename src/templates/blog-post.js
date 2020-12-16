import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/layout";

export default function BlogPost({ data }) {
    const post = data.markdownRemark;
    const styleObj = {display:"contents"};
  return (
    <Layout>
      <div className="container">
        <div className="postTagList">
          {post.frontmatter.tags.map(function (tag, i) {
            return (
              <a className="postTag" href={"/tags/" + tag.toLowerCase()} key={i}>
                {tag}
              </a>
            );
          })}
        </div>
        <h1 className="blogPostTitle">{post.frontmatter.title}</h1>
          <div style={styleObj} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};

export const query = graphql`
  query BlogPost($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
