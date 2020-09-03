import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import {graphql, StaticQuery} from "gatsby"
import Posts from "../components/Posts"
import {Row, Col} from 'reactstrap'
const Latest = () => (
    <Layout>
         <SEO title="Home"/>
        <div className="index-wrapper">
        <div className="container">
          <h1 className="sec"><div className="vr"><h1 className="heads">Latest Posts</h1></div></h1>
       <StaticQuery query={latestQuery} render={data =>{
         return (
           <div>
             <Row>
             {data.allStrapiArticle.edges.map(({node})=>{
               return (
         
                   <Col md='4'>
                   <Posts
                title={node.title}
                key={node.id}
                date={node.date}
                path={node.Slug}
                fluid={node.image.childImageSharp.fluid}
                author={node.author.name}
              
               
                />
                </Col>
                
              
             
               )
             })}
              </Row>
           </div>
         )
       }}/>
          </div>
          </div>

    </Layout>
)

export const latestQuery =graphql`
query MyQuery {
  allStrapiArticle(filter: {categorie: {categoryname: {eq: "latest"}}}) {
    edges {
      node {
        id
        date
        Slug
        title
        image {
            childImageSharp {
              fluid(maxWidth: 600){
                ...GatsbyImageSharpFluid
              }
            }
          }
        author {
          name
        }
      }
    }
  }
}
`
export default Latest
