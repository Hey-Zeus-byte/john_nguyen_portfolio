import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DropDownButton } from "./DropDownButton";

const MobileNavLinkWrapper = styled.div`
  display: flex;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    background-color: rgb(245, 244, 220);
    transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
    transition: transform 0.3s ease-in-out;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    padding-top: 56px;
    z-index: 1;
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

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    font-weight: 500;
    color: #000000;
    line-height: 38px;
  }
`;

const DropDownContainer = styled.div``;

const MobileNavLinksMenu = ({ open }) => {
  const [openDropDown] = useState();

  return (
    <MobileNavLinkWrapper open={open}>
      <NavLink to="/about-me">ABOUT ME</NavLink>
      <NavLink to="/designs">DESIGNS</NavLink>
      <NavLink to="/projects">PROJECTS</NavLink>
      <DropDownButton onToggle={openDropDown} />
      <NavLink to="/contact">CONTACT</NavLink>
    </MobileNavLinkWrapper>
  );
};

export default MobileNavLinksMenu;
