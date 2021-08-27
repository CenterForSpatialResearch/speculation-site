import "./style/global.css";
import "./style/strucutres.css";
import "./style/fontawesome.css";

import favicon16 from "../img/favicon/favicon16.png"
import favicon32 from "../img/favicon/favicon32.png"
import favicon48 from "../img/favicon/favicon48.png"

import React from "react";
import { StaticQuery, Link, graphql } from "gatsby";
import { Main, Main2, Aside, Logo, Navigator, LinksList, SocialList } from "./style/emo-layout.js";
import { Helmet } from "react-helmet"
import Marquee from "react-fast-marquee";



const Layout = ({ children }) => (
	<StaticQuery
	query = { 
		graphql`
		query {
			site {
				siteMetadata {
					title
					subtitle
					description
					keywords
				}
			}
		}
		`}
		render = { data => (
			<React.Fragment>
			<div class = "banner"> <h3>{data.site.siteMetadata.title}</h3> </div>
			<Marquee gradient = {false} speed = {30} pauseOnHover = {true} ><div class = "marquee"> <h4> INVESTIGATING THE METHODS AND GEOGRAPHIES CONTEMPORARY REAL ESTATE SPECULATION. FROM THE CENTER FOR SPATIAL RESEARCH AT THE COLUMBIA GSAPP.  </h4></div></Marquee>
			<Helmet
			
			meta = {[
				{
					name: "description",
					content: data.site.siteMetadata.description,
				},
				{
					name: "keywords",
					content: data.site.siteMetadata.keywords,
				},
				]}
				link={[
					{ rel: 'icon', type: 'image/png', sizes: "16x16", href: `${favicon16}` },
					{ rel: 'icon', type: 'image/png', sizes: "32x32", href: `${favicon32}` },
					{ rel: 'shortcut icon', type: 'image/png', href: `${favicon48}` },
					]}
					/>
					<Aside>
						<Navigator>
							
							<nav>
								<LinksList>
									<li><Link to={`/`} activeClassName="active">All</Link></li>
									<li><Link to={`/cat2/`} activeClassName="active">Background</Link></li>
									<li><Link to={`/cat3/`} activeClassName="active">Rise of the SFR</Link></li>
									<li><Link to={`/cat4/`} activeClassName="active">Institutionalized Flipping</Link></li>
									<li><Link to={`/cat5/`} activeClassName="active">Diverging Geographies</Link></li>
									
								</LinksList>
							</nav>
						</Navigator>
					</Aside>
					<Main>
						<div class = "overarching-grid">
								{children}</div>
						</Main>
					</React.Fragment>
					)}
		/>
		);

export default Layout;
