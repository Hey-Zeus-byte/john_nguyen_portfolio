import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";
import { HamburgerButton } from "./HamburgerButton";

const NavBarContainer = styled.div``;

const NavFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 84px;
`;

const NavLinkWrapper = styled.div`
  display: none;
  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

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

const SubNavLink = styled(NavLink)`
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 10px;
`;

const NavHomeLink = styled(Link)`
  text-decoration: none;
  color: #407c51;
  font-size: 25px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
`;

const DropDownList = styled.li`
  display: inline-block;
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const DesktopNavLinks = () => {
  return (
    <NavLinkWrapper>
      <NavLink to="/about-me">ABOUT ME</NavLink>
      <NavLink to="/designs">DESIGNS</NavLink>
      <DropDownList>
        <NavLink to="/projects">PROJECTS</NavLink>
        <DropDownContent>
          <SubNavLink to="/projects/yumyum">Yum Yum</SubNavLink>
          <SubNavLink to="/projects/nonprofit">
            Non Profit Organization
          </SubNavLink>
          <SubNavLink to="/projects/joblify">Joblify</SubNavLink>
          <SubNavLink to="/projects/montana">Montana State Park</SubNavLink>
        </DropDownContent>
      </DropDownList>
      <NavLink to="/contact">CONTACT</NavLink>
    </NavLinkWrapper>
  );
};

const NavBar = () => {
  const [open] = useState();

  return (
    <NavBarContainer>
      <ContentWrapper>
        <NavFlexWrapper>
          <NavHomeLink to="/">John Nguyen</NavHomeLink>
          <DesktopNavLinks />
          <HamburgerButton onToggle={open} />
        </NavFlexWrapper>
      </ContentWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
