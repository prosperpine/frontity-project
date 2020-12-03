import React from "react";
import { connect, styled } from "frontity";

const Link = ({ href, actions, children }) => {
  return (
    <div>
      <Anchor

        href={href}
        onClick={event => {
          event.preventDefault();
          actions.router.set(href);
        }}
      >
        {children}

      </Anchor>
    </div>
  );
};

export default connect(Link);

const Anchor = styled.a`
color: rgba(255, 255, 255, 0.9);
font-family: "Roboto"; 
`;