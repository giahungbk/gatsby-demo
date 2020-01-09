import React from "react"

import Layout from "../components/Layout"
import Head from "../components/Head"
import springImg from '../posts/spring.jpg'

export default () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>HOME</h1>
      <img src='../../spring.jpg' alt="Static img" />
      <img src={springImg} alt="import img" />
    </Layout>
  )
}
