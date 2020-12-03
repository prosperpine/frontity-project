import React from "react";
import { connect, Global, css, styled, Head } from "frontity";
import Link from "./link";
import List from "./list";
import Post from "./post";
import Bocker from "./bocker";
import Om from "./om";
import kabullight from "./kabullight.jpg";
import { useTransition, animated } from "react-spring";

import Nav from "./nav";






const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  const transitions = useTransition(state.router.link, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0, display: "none" },

  })

  return (
    <>
      <Head>
        <title>Faqirzada</title>

        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;1,400&family=Roboto:wght@300;400;800&display=swap" rel="stylesheet"></link>
        <script src="https://kit.fontawesome.com/d31731020c.js" crossorigin="anonymous"></script>
      </Head>
      <Global styles={globalStyles} />

      <HeadContainer>
        <Header
          isPostType={data.isPostType}>
          <Link href="/">
            <Title>{state.frontity.title}</Title>
          </Link>
          <Description>{state.frontity.description}</Description>
          {/* {state.theme.isMenuOpen ? (
            <>
              <Button onClick={actions.theme.closeMenu}>Close</Button> */}
          <Menu>
            <NavContainer>
              <NavItem>
                <Link href="/">Dikter</Link>
              </NavItem>
              <NavItem>
                <Link href="/bocker/">Böcker</Link>
              </NavItem>
              <NavItem>
                <Link href="/om-mig/">Om mig</Link>
              </NavItem>
            </NavContainer>
          </Menu>
          {/* </>
          ) : (<Button onClick={actions.theme.openMenu}>Menu</Button>
            )} */}
        </Header>
      </HeadContainer>
      <Main>
        {transitions.map(({ props, key }) => (
          <animated.div style={props} key={key}>

            {data.isArchive && <List />}
            {data.isPost && <Post />}
            {data.isPage && state.router.link === "/bocker/" && <Bocker />}
            {data.isPage && state.router.link === "/om-mig/" && <Om />}
          </animated.div>
        ))}
      </Main>

    </>
  );
};

export default connect(Root);

const globalStyles = css`
  body {
    margin: 0;
    
  }
  a,
  a:visited {
    text-decoration: none;
  }
`;

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #1f38c5;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${kabullight});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

const Header = styled.header`
width: 848px;
max-width: 100%;
box-sizing: border-box;
padding: 24px 24px 0 24px;
color: #fff;
display: flex;
flex-direction: column;
justify-content: space-around;
   `;

const Title = styled.h2`
  font-family: "Roboto"; 
  font-size: 3rem;
  margin-top: 30px;
  margin-bottom: 50px;
  color: white; 
`;

const Description = styled.h4`
  margin: 0;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  font-family: "Merriweather";

`;

const Menu = styled.nav`
  display: flex;
flex - direction: row;
flex - wrap: wrap;
justify - content: center;

  & > div {
  margin: 16px;
}
`;

const Main = styled.main`
display: flex;
justify-content: center; 

  background: rgb(249,253,254);
  background: linear-gradient(0deg, rgba(210,210,210,1)) 0%, rgba(249,253,254,1) 100%);

`;
const Button = styled.button`
width: 92px;
margin: 16px;
padding: 8px 16px;
border - radius: 8px;
background: white;
color: black;
font - weight: bold;
`;

//  ${props =>
//   props.isPostType
//     ? "background-color: aliceblue"
//     : "background-color: pink"};

const NavContainer = styled.nav`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  overflow-x: auto;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 10px;
  color: #fff;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
    &[aria-current="page"] {
      border-bottom-color: #fff;
    }
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
      width: 24px;
    }
  }
`;