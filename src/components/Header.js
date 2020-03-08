import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TransitionLink, { TransitionPortal } from "gatsby-plugin-transition-link"
import anime from "animejs"

import Footer from "./Footer"

import headerStyles from "../styles/header.module.scss"

export default function Header(props) {
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
        <div>
          <TransitionLink
            to="/"
            exit={{
              length: 1,
              trigger: evt => animateHome("#ff7e25", evt),
            }}
            entry={{
              delay: 0.8,
              length: 1,
            }}
          >
            {data.site.siteMetadata.title}
          </TransitionLink>
        </div>
        <div className={headerStyles.menu}>
          <ul>
            <li>
              <TransitionLink
                to="/"
                exit={{
                  length: 1,
                  trigger: evt => animateHome("#ff7e25", evt),
                }}
                entry={{
                  delay: 0.5,
                  length: 1,
                }}
              >
                Home
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                to="/about"
                exit={{
                  length: 0.5,
                  trigger: evt => animateHome("#A6D8DF", evt),
                }}
                entry={{
                  length: 0.5,
                  delay: 0.5,
                }}
              >
                About
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                to="/blog"
                exit={{
                  length: 0.5,
                  trigger: evt => animateHome("#9f63f0", evt),
                }}
                entry={{
                  length: 0.5,
                  delay: 0.5,
                }}
              >
                Blog
              </TransitionLink>
            </li>
            <li>
              <TransitionLink
                to="/contact"
                exit={{
                  trigger: evt => animateHome("#fff337", evt),
                  length: 0.5,
                }}
                entry={{
                  length: 0.5,
                  delay: 0.5,
                }}
              >
                Contact
              </TransitionLink>
            </li>
          </ul>
        </div>
      </nav>
      <main>{props.children}</main>
      <Footer />

      <TransitionPortal>
        <div
          className="mask"
          style={{
            width: "1px",
            height: "1px",
            borderRadius: "50%",
            position: "fixed",
            backgroundColor: "transparent",
            transform: "scale(0)",
          }}
        ></div>
      </TransitionPortal>
    </div>
  )
}

const animateHome = (bgColor, evt) => {
  let top = evt.e.clientY;
  let left = evt.e.clientX;
  anime
    .timeline({
      targets: ".mask",
      duration: 100,
      easing: "easeInSine",
      direction: "alternate",
      backgroundColor: bgColor,
      top: `${top}px`,
      left: `${left}px`,
    })
    .add(
      {
        scale: [{ value: 0 }, { value: 5000, duration: 600 }],
      },
      100
    )
}
