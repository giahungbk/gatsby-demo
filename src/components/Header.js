import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import headerStyles from "../styles/header.module.scss"

export default function Header() {
  let data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className={headerStyles.header}>
      <nav>
        <div className={headerStyles.logo}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </div>
        <div className={headerStyles.menu}>
          <ul>
            <li>
              <Link activeClassName={headerStyles.active} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link activeClassName={headerStyles.active} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link activeClassName={headerStyles.active} to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link activeClassName={headerStyles.active} to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
