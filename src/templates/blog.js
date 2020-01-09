import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/Layout"

// export const query = graphql`
//   query($slug: String) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         date
//       }
//       html
//     }
//   }
// `
export const query = graphql`
  query($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "DD/MM/YYYY")
      body {
        json
      }
    }
  }
`

const BlogTemplate = props => {
  let options = {
    renderNode: {
      "embedded-asset-block": node => {
        let alt = node.data.target.fields.title["en-US"]
        let url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      <div>
        {documentToReactComponents(
          props.data.contentfulBlogPost.body.json,
          options
        )}
      </div>

    </Layout>
  )
}
/* <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html}}></div> => markdown*/

export default BlogTemplate
