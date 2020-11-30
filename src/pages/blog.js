import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import { Layout } from "../components/layout"

export default function Blog({ data }) {
  return (
    <Layout>
      <div>
        <h1
          css={css`
            display: inline-block;
          `}
        >
          The Main Squeeze Blog
        </h1>
        <h4>
          {data.allMarkdownRemark.totalCount} Post
          {data.allMarkdownRemark.totalCount > 1 ? "s" : ""}
        </h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>
                {node.frontmatter.title}{" "}
                <span
                  css={css`
                    color: #555;
                  `}
                >
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
