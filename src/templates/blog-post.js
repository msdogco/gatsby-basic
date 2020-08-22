import React from "react"
import { graphql } from "gatsby"
import { Layout } from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <div class="postTagList">
          {post.frontmatter.tags.map(function (tag, i) {
            return (
              <a class="postTag" href={"/tags/" + tag.toLowerCase()} key={i}>
                {tag}
              </a>
            )
          })}
        </div>
        <h1 class="blogPostTitle">{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

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
