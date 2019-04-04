import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.name}</h1>
      {/* <p>{post.frontmatter.date}</p>
      <img src={post.frontmatter.thumbnail} />
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <p>{post.frontmatter.notes}</p> */}
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
      }
    }
  }
`
