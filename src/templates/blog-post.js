import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"


import "./blogTemplate.css";

 const BlogpostLayout = ({data}) => {
   const post = data.allposts.post;
   const { title, body } = post;
  
  return (
    <Layout>
    <div className='blogTemplate'>
      <Link to="/">Back to blogs</Link>
      <h1 className="blogTemplate-title">{title}</h1>
      <div className="blogTemplate-posted-by" dangerouslySetInnerHTML={{ __html: body }} />
      </div>
    </Layout>
   
  )
  };
    
export const query = graphql `
query ($postID: ID!) {
  allposts {
    post(id: $postID){
        id
        title
        body
      }
  }
}`


export default BlogpostLayout;
