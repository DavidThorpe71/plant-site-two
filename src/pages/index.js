import React from "react"
import { graphql, Link } from "gatsby"

export default ({ data }) => {
  const { allMarkdownRemark } = data
  const { edges } = allMarkdownRemark

  return (
    <div>
      {edges.map(item => {
        console.log(item.node.fields.slug)
        return (
          <Link to={item.node.fields.slug}>{item.node.frontmatter.name}</Link>
        )
      })}
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
