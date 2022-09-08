import React, {useState} from "react";
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

const NavLinkWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-flow: column;
    background-color: rgb(245, 244, 220);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 3.5rem;
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

  @media (max-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    line-height: 38px;
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

const HamburgerNavBar = styled.div`
  display: block;
  margin: 1em;

  div {
    width: 30px;
    height: 2px;
    background-color: black;
    margin: 8px 0;
    border-radius: 5px;
    transform-origin: 0;
    transition: all 0.3s linear;
    z-index: 20px;

    &:nth-child(1) {
      transform: ${({open}) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      transform: ${({open}) => (open ? "translateX(100%)" : "translateX(0)")};
      opacity: ${({open}) => (open ? "0" : "1")};
    }

    &:nth-child(3) {
      transform: ${({open}) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
  /* project uses max-width, but min-width is
   appropriate because should always dispplay block in mobiel devices only */
  @media only screen and (min-width: 768px) {
    display: none;
  }
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

const NavBar = () => {
  const [open, setOpen] = useState();
  // hamburger animation
  const [rightNavBarOpen, setRightNavBarOpen] = useState();

  return (
    <NavBarContainer>
      <ContentWrapper>
        <NavFlexWrapper>
          <NavHomeLink to="/">John Nguyen</NavHomeLink>
          <NavLinkWrapper
            rightNavBarOpen={!rightNavBarOpen}
            onClick={() => setRightNavBarOpen(rightNavBarOpen)}
          >
            <HamburgerNavBar open={open} onClick={() => setOpen(!open)}>
              <div />
              <div />
              <div />
            </HamburgerNavBar>
            {/* Should only appear when user visits using a mobile device */}
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
                <SubNavLink to="/projects/montana">
                  Montana State Park
                </SubNavLink>
              </DropDownContent>
            </DropDownList>
            <NavLink to="/contact">CONTACT</NavLink>
          </NavLinkWrapper>
        </NavFlexWrapper>
      </ContentWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
