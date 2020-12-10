import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello</h1>
      <h2>I am Pranta. I am a full-stack developer</h2>
      <p>
        Need a developer? <Link to="/contact">Contact Me</Link>{" "}
      </p>
    </Layout>
  )
}

export default IndexPage
