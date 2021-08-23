import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { Card, CardColumns }  from "../components/style/emo-home-posts";
import { PostInfo2, PreTitle2, Subtitle2, Excrept2, Card2, CardColumns2 }  from "../components/style/emo-home-posts-2";


export default ({ data }) => {
  return (
	  <Layout>
		  <CardColumns2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card2 key={node.id}>
            <Link to={node.fields.slug}>
                <PostInfo2>
                  <PreTitle2>{node.frontmatter.category}</PreTitle2>
	                <Subtitle2>{node.frontmatter.subtitle}</Subtitle2>
                  <Excrept2>{node.excerpt}</Excrept2>
                </PostInfo2>
            </Link>
          </Card2>
        ))}
      </CardColumns2>
      <CardColumns>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <Link to={node.fields.slug}>

                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                
            </Link>
          </Card>
        ))}
      </CardColumns>
	  </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: "background" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            category
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 500, maxHeight: 500) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                  presentationWidth
                  presentationHeight
                }
              }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`;
