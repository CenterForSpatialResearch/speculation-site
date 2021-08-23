import  styled , { css } from "react-emotion";
import  { mwS } from "./breakpoints";

export const Card2 = styled.div`
    background: #fff;
    margin-bottom: 20px;
    transform: scale(1);
    -o-transition: 0.5s all ease;
    transition: 0.5s all ease;
    opacity: 1;
  &:hover {
    background: #e6e6e6;
    transform: scale(0.96);
  }
`;

export const CardColumns2 = styled.div`
  -moz-column-gap: 3rem;
  column-gap: 3rem;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  
  ${mwS.small(css`
    opacity: 1;
  `)};
  ${mwS.medium(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
  ${mwS.large(css`
    grid-template-columns: repeat(2, 1fr);
  `)};
  ${mwS.xLarge(css`
    grid-template-columns: repeat(3, 1fr);
  `)};
`;

export const SinglePost2 = styled.div`
  & .gatsby-image-wrapper {
    -o-transition: 0.2s all ease;
    transition: 0.2s all ease;
  }
  ${Card2}:hover & .gatsby-image-wrapper {
    opacity: 0.5;
  }
  & .gatsby-image-wrapper {
    height: 250px;
  }
  ${mwS.small(css`
    opacity: 1;
  `)};
`;

export const PostImage2 = styled.img(props => ({
  width: "100%"
}));

export const PostInfo2 = styled.div(props => ({}));

export const PreTitle2 = styled.h6(props => ({
  fontWeight: "500",
  display: "block",
  padding: "17px",
  textTransform: "uppercase"
}));

export const Freshnew2 = styled.span(props => ({
  position: "absolute",
  zIndex: 1,
  padding: "15px",
  background: "#a5d6a7",
  right: 0
}));
export const Update2 = styled.span(props => ({
	position: "absolute",
	zIndex: 1,
	padding: "15px",
	background: "#fdd835",
	right: 0
}));

export const Title2 = styled.h4(props => ({
  fontWeight: "500",
  display: "block",
  padding: "17px",
	paddingBottom: 0
}));

export const Subtitle2 = styled.h5(props => ({
	fontWeight: "200",
	display: "block",
	color: "black",
	paddingLeft: "17px",
	paddingBottom: "17px",
}));

export const Excrept2 = styled.p(props => ({
  padding: "17px",
  paddingTop: 0,
  a: {
    fontWeight: 700
  }
}));
