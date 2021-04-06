import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import "bootstrap/dist/css/bootstrap.min.css";


import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
  <div className="container">
  <div className="row justify-content-md-center">
  <div className='blogTemplate'>
    <Seo title="Home" />
    <h1>Hi Team</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <StaticImage
      src="../images/gatsby-astronaut.png"
      width={300}
      quality={95}
      formats={["AUTO", "WEBP", "AVIF"]}
      alt="A Gatsby astronaut"
      style={{ marginBottom: `1.45rem` }}
    />
    <p>
      <Link to="/test-homepage/">Go to test homepage </Link> 
    </p>
  </div>
  </div>  
   </div>
  </Layout>
)

export default IndexPage
