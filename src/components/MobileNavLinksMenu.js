import React, {useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import {HamburgerButton} from "./HamburgerButton";

const MobileNavLinkWrapper = styled.div`
  @media only screen and (min-width: 768px) {
    display: none;
  }
  @media only screen and (max-width: 768px) {
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

const MobileNavLinksMenu = () => {
  const [open, setOpen] = useState();

  return (
    <MobileNavLinkWrapper>
      <HamburgerButton onToggle={setOpen} />
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
          <SubNavLink to="/projects/montana">Montana State Park</SubNavLink>
        </DropDownContent>
      </DropDownList>
      <NavLink to="/contact">CONTACT</NavLink>
    </MobileNavLinkWrapper>
  );
};

export default MobileNavLinksMenu;
