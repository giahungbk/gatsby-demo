import React from "react"


import "../styles/index.scss"


import layoutStyles from "../styles/layout.module.scss"

export default function Layout(props) {
  return (
    <div>
      <div className={layoutStyles.content}>{props.children}</div>
    </div>
  )
}
