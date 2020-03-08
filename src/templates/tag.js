import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Sidebar from "../components/Sidebar"

import blogStyle from "../styles/blog.module.scss"

const Tag = props => {
  let data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "DD/MM/YYYY")
            tags
            categories
          }
        }
      }
    }
  `)
  let blogTags = data.allContentfulBlogPost.edges.filter(
    ({ node }) => node.tags.indexOf(props.pageContext.tag) > -1
  )

  return (
    <Layout>
      <Head title="Tags" />
      <main className={blogStyle.mainBlog}>
        <div className={blogStyle.content}>
          <h1>Tag {props.pageContext.tag}</h1>
          <ol>
            {blogTags.map((blogTag, i) => {
              return (
                <li key={i}>
                  <Link to={`/blog/${blogTag.node.slug}`}>
                    {blogTag.node.title}
                  </Link>
                  <p>{blogTag.node.publishedDate}</p>
                </li>
              )
            })}
          </ol>
        </div>
        <div className={blogStyle.sidebar}>
          <Sidebar edges={data.allContentfulBlogPost.edges} />
        </div>
      </main>
    </Layout>
  )
}

export default Tag
