import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Head from "../components/Head"
import Sidebar from '../components/Sidebar'

import blogStyle from '../styles/blog.module.scss'

/**
 * Goal: Link to blog post
 * 1. Fetch the slug for posts
 * 2. Use slug to generate a link to the post page
 * 3. test your work
 */

const Blog = () => {
  // let data = useStaticQuery(graphql`
  //   query {
  //     allMarkdownRemark {
  //       edges {
  //         node {
  //           frontmatter {
  //             title
  //             date
  //           }
  //           fields {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
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

  return (
    <Layout>
      <Head title="Blog" />
      <main className={blogStyle.mainBlog}>
        <div className={blogStyle.content}>
          <h1>Blog</h1>
          <ol>
            {data.allContentfulBlogPost.edges.map((edge, i) => {
              return (
                <li key={i}>
                  <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
                  <p>{edge.node.publishedDate}</p>
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

export default Blog
