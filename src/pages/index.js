import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark
  return (
    <div>
      {edges.map(item => (
        <p>{item.node.frontmatter.name}</p>
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
          frontmatter {
            name
          }
        }
      }
    }
  }
`
