import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <div>
      <h1>{post.frontmatter.name}</h1>
      <p>{post.frontmatter.date}</p>
      <img src={post.frontmatter.image} style={{ width: "200px" }} />
      {/* <div dangerouslySetInnerHTML={{ __html: post.html }} /> */}
      <p>{post.frontmatter.waterFreq}</p>
      <p>{post.frontmatter.lightInst}</p>
      <p>{post.frontmatter.notes}</p>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        name
        notes
        image
        date
        waterFreq
        lightInst
      }
    }
  }
`
