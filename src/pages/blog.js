import React from "react";
import Layout from "../components/layout"
import { graphql} from "gatsby"

import Post from "../components/post";



const BlogPage = ({ data }) => (
  
  <Layout>
  <div className="container">
  <div className="row justify-content-md-center">

    <h1>Our Blog</h1>
    { 
      
      data.allposts.posts.data.map(post => {
         const { title, id, body} = post;
         const path = `/posts/${id}`;
         console.log(post);
        return (
          <Post
            title={title}
            id={id}
            body={body}
            key={id}
            path={path}
          />
        )
      })
    }
    </div>
    </div>
  </Layout>
);

  export default BlogPage


export const query = graphql `
query {
  allposts {
    posts {
      data {
        body
        id
        title
      }
    }
  }
}`