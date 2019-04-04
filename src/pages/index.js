import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <div>
      {edges.map(item => (
        <a href={item.node.fields.slug}>{item.node.frontmatter.name}</a>
      ))}
    </div>
  )
}

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            name
          }
        }
      }
    }
  }
`
