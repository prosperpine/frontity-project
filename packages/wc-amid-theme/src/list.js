import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Item from "./List/list-item";
import FeaturedMedia from "./featured-media";


const List = ({ state }) => {

  const data = state.source.get(state.router.link);

  return (
    <Container>
      <Items>
        {/* <div>
          {data.items.map(({ id }) => {
            const post = state.source.post[id];
            return (
              <Link key={id} href={post.link}>
                {post.title.rendered}
              </Link>
            );
          })}
        </div> */}
        {/* Iterate over the items of the list. */}
        {data.items.map(({ type, id }) => {
          const item = state.source[type][id];
          // Render one Item component for each one.
          return (
            <Link key={id} href={item.link}>
              <Item key={item.id} item={item} /></Link>
          )
        })}

      </Items>
    </Container>
  );
};

export default connect(List);

const Items = styled.div`
  & > div {
    margin: 16px 0;
    font-size: 1.2em;
  }
`;

const Container = styled.section`
  font-family: 'Merriweather';
  margin: 0;
  padding: 24px;
  list-style: none;
  width: 90%;
  @media(min-width: 668px) {
    width: 90%
  }
  @media(min-width: 1024px){
    width: 800px;
  }

`;


const AuthorName = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const StyledLink = styled(Link)`
  padding: 15px 0;
`;

const PublishDate = styled.span`
  color: rgba(12, 17, 43, 0.9);
  font-size: 0.9em;
`;

const Excerpt = styled.div`
  line-height: 1.2em;
  color: rgba(12, 17, 43, 0.8);
  font-family: 'Roboto';
`;