import React from "react";
import { connect, styled } from "frontity";

const Bocker = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];

  return (
    <Container>
      <Content>
        <Title>{post.title.rendered}</Title>

        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        {/* <div dangerouslySetInnerHTML={{ __html: post.content.date}} /> */}
      </Content>
    </Container>

  );
};

export default connect(Bocker);

const Container = styled.div`
font-family: 'Merriweather';
margin: 0;
padding: 24px;
list-style: none;
width: 90%;
@media(min-width: 668px) {
  width: 90%;
}
@media(min-width: 1024px){
  width: 800px;
}

`;


const Title = styled.h2`
font-family: 'Roboto';
font-size: 2rem;
color: rgba(12, 17, 43);
margin: 0;
padding-top: 24px;
padding-bottom: 8px;
box-sizing: border-box;
`
const Content = styled.div`

p {
  line-height: 1.6em;
  font-family: "Roboto"; 
}

img {
  width: 40%;
  height: auto; 
  object-fit: cover;
}

strong {
  font-weight: 800; 
  font-size: 1.2rem;
}

figure {
  margin: 24px auto;
  /* next line overrides an inline style of the figure element. */
  width: 100% !important;

  figcaption {
    font-size: 0.7em;
  }
}

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
`
