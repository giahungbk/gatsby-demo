import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const NotPage = () => (
  <Layout>
    <h2>Page not found!</h2>
    <p>
      <Link to="/">Go to Home</Link>
    </p>
  </Layout>
)

export default NotPage
