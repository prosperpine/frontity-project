import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {


  return (
    <article>
      <Link link={item.link}>
        <Title dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
      </Link>


      {/*
       * If the want to show featured media in the
       * list of featured posts, we render the media.
       */}
      {state.theme.featured.showOnList && (
        <FeaturedMedia id={item.featured_media} />
      )}

      {/* If the post has an excerpt (short summary text), we render it */}
      {item.excerpt && (
        <Excerpt dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />

      )}
    </article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Title = styled.h1`
  font-family: 'Roboto';
  font-size: 1.6rem;
  color: rgba(12, 17, 43);
  margin: 0;
  padding-top: 24px;
  padding-bottom: 8px;
  box-sizing: border-box;
  &:hover {
    color: grey;
  }
  @media(min-width: 668px) {
    font-size: 2rem;

  }

`;



const StyledLink = styled(Link)`
  padding: 15px 0;
`;

// const PublishDate = styled.span`
//   color: rgba(12, 17, 43, 0.9);
//   font-size: 0.9em;
// `;

const Excerpt = styled.div`
  line-height: 1.2em;
  color: rgba(12, 17, 43, 0.8);
  font-family: 'Roboto';
`;
