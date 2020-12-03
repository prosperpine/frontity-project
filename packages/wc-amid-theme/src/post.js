import React from "react";
import { connect, styled, Global, css } from "frontity";
import FeaturedMedia from "./featured-media";


const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const date = new Date(post.date);


  return (
    <Container>
      <a href="/">
        <Icon className="fas fa-chevron-circle-left"></Icon>
      </a>
      <Title>{post.title.rendered}</Title>

      <DateWrapper>
        <b>{date.toDateString()}</b>
      </DateWrapper>
      <Section dangerouslySetInnerHTML={{ __html: post.content.rendered }}>

      </Section>
      <a href="/">
        <Icon className="fas fa-chevron-circle-left"></Icon>
      </a>
    </Container>
  );
};

export default connect(Post);

const Container = styled.div`
margin: 0;
padding: 24px;
width: 90%;
@media(min-width: 668px) {
  width: 90%;
}
@media(min-width: 1024px){
  width: 800px;
}

`;


const Icon = styled.i`
color: lightgrey;
font-size: 2rem; 
`

const Title = styled.h1`
font-family: 'Roboto';
font-size: 2rem;
color: rgba(12, 17, 43);
margin: 0;
padding-top: 24px;
padding-bottom: 8px;
box-sizing: border-box;
`

const DateWrapper = styled.p`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
  display: inline;

`;

const Section = styled.section`
width: 100%;
box-sizing: border-box;
justify-content: center; 
  color: rgba(12, 17, 43, 0.8);
  word-break: break-word;


  * {
    max-width: 100%;
  }

  p {
    line-height: 1.6em;
    font-family: "Roboto"; 
  }

  img {
    width: 100;
    object-fit: cover;

  }

  figure {
    margin: 24px auto;
    /* next line overrides an inline style of the figure element. */
    width: 100% !important;

    figcaption {
      font-size: 0.7em;
    }
  }

  iframe {
    display: block;
    margin: auto;
  }

  blockquote {
    margin: 16px 0;
    background-color: rgba(0, 0, 0, 0.1);
    border-left: 4px solid rgba(12, 17, 43);
    padding: 4px 16px;
  }

  a {
    color: rgb(31, 56, 197);
    text-decoration: underline;
  }

  /* Input fields styles */

  input[type="text"],
  input[type="email"],
  input[type="url"],
  input[type="tel"],
  input[type="number"],
  input[type="date"],
  textarea,
  select {
    display: block;
    padding: 6px 12px;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 4px;
    outline-color: transparent;
    transition: outline-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin: 8px 0 4px 0;

    &:focus {
      outline-color: #1f38c5;
    }
  }

  input[type="submit"] {
    display: inline-block;
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid #1f38c5;
    padding: 12px 36px;
    font-size: 14px;
    line-height: 1.42857143;
    border-radius: 4px;
    color: #fff;
    background-color: #1f38c5;
  }

  /* WordPress Core Align Classes */

  @media (min-width: 420px) {
    img.aligncenter,
    img.alignleft,
    img.alignright {
      width: auto;
    }

    .aligncenter {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }

    .alignright {
      float: right;
      margin-left: 24px;
    }

    .alignleft {
      float: left;
      margin-right: 24px;
    }
  }
`;
