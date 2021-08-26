import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import Img from "gatsby-image";
import { SinglePost, Update, Freshnew, Card, CardColumns, Subtitle }  from "../components/style/emo-home-posts";
import { SinglePost2, PostInfo2, PreTitle2, Subtitle2, Update2, Freshnew2, Excrept2, Card2, CardColumns2 }  from "../components/style/emo-home-posts-2";

let minutes = 1000 * 60;
let hours = minutes * 60;
let days = hours * 24;
let months = days * 30;

const Index = ({ children }) => (
	<StaticQuery
	query = { 
		graphql`
		query {
      allMarkdownRemark(
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        edges {
          node {
            id
            excerpt(pruneLength: 5000)
            fields {
              slug
            }
            frontmatter {
              date(formatString: "DD MMMM, YYYY")
              update(formatString: "DD MMMM, YYYY")
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
          }
        }
      }
    }
		`}
		render = { data => (
			<Layout>
      <CardColumns2>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card2 key={node.id}>
            <Link to={node.fields.slug}>
              <SinglePost2>
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	               node.frontmatter.update !== node.frontmatter.date &&(
                  <Update2>Update</Update2>
                )}
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	              node.frontmatter.update === node.frontmatter.date &&(
		              <Freshnew2>Fresh New</Freshnew2>
	              )}
                <PostInfo2>
                  <PreTitle2>{node.frontmatter.category}</PreTitle2>
	                <Subtitle2>{node.frontmatter.subtitle}</Subtitle2>
                  <Excrept2>
                    {node.excerpt}
                    </Excrept2>
                </PostInfo2>
              </SinglePost2>
            </Link>
          </Card2>
        ))}
      </CardColumns2>
      <CardColumns>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Card key={node.id}>
            <Link to={node.fields.slug}>
              <SinglePost>
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	               node.frontmatter.update !== node.frontmatter.date &&(
                  <Update>Update</Update>
                )}
	              {Math.abs(Math.round((new Date(node.frontmatter.update).getTime() - new Date().getTime()) / months)) <= 1 &&
	              node.frontmatter.update === node.frontmatter.date &&(
		              <Freshnew>Fresh New</Freshnew>
	              )}
                <Img
                  fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
                />
                
              </SinglePost>
            </Link>
          </Card>
        ))}
      </CardColumns>
    </Layout>
					)}
		/>
		);

export default Index;

