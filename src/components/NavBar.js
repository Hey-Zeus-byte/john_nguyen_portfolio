import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {ContentWrapper} from "./ContentWrapper";

const NavBarContainer = styled.div``;

const NavFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 84px;
`;

const NavLinkWrapper = styled.div``;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #919191;
  font-size: 11px;
  line-height: 12px;
  padding: 9px 20px;
  font-weight: bold;

  &:hover {
    color: #000000;
  }
`;

const NavHomeLink = styled(Link)`
  text-decoration: none;
  color: #407c51;
  font-size: 25px;
  /* padding-left: 100px; */
`;

const NavBar = () => {
  return (
    <NavBarContainer>
      <ContentWrapper>
        <NavFlexWrapper>
          <NavHomeLink to="/">John Nguyen</NavHomeLink>
          <NavLinkWrapper>
            <NavLink to="/about-me">ABOUT ME</NavLink>
            <NavLink to="/designs">DESIGNS</NavLink>
            <NavLink to="/projects">PROJECTS</NavLink>
            <NavLink to="/contact">CONTACT</NavLink>
            {/* <Link to="/projects/yumyum"></Link>
        <Link to="/projects/nonprofit"></Link>
        <Link to="/projects/joblify"></Link>
      <Link to="/projects/montana"></Link> */}
          </NavLinkWrapper>
        </NavFlexWrapper>
      </ContentWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
