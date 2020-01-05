import React from "react"

import Header from "./Header"
import Footer from "./Footer"

import "../styles/index.scss"
import layoutStyles from "../styles/layout.module.scss"

export default function Layout(props) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}
