import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileSubMenuWrapper = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div.arrow {
    border: solid black;
    border-width: 0 2px 2px 0;
    width: 15px;
    height: 15px;
    margin-top: 15px;
    margin-right: 40px;

    transform: ${({ openDropDown }) =>
      openDropDown ? "rotate(225deg)" : "rotate(45deg)"};
  }
`;

const DropDownContent = styled.div`
  display: ${({ openDropDown }) => (openDropDown ? "none" : "block")};
  background-color: rgb(245, 244, 220);
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

const SubNavLink = styled(Link)`
  display: block;
  text-decoration: none;
  text-align: left;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  padding: 9px 20px;
  line-height: 38px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const SubMobileMenu = ({ openDropDown }) => {
  return (
    <DropDownContent openDropDown={openDropDown}>
      <SubNavLink to="/projects/yumyum">Yum Yum</SubNavLink>
      <SubNavLink to="/projects/nonprofit">Non Profit Organization</SubNavLink>
      <SubNavLink to="/projects/joblify">Joblify</SubNavLink>
      <SubNavLink to="/projects/montana">Montana State Park</SubNavLink>
    </DropDownContent>
  );
};

export const MobileSubMenu = ({ onToggle }) => {
  const [openDropDown, setOpenDropDown] = useState();

  const toggleOpen = () => {
    setOpenDropDown(!openDropDown);
    if (onToggle) {
      onToggle(!openDropDown);
    }
  };

  return (
    <>
      <MobileSubMenuWrapper openDropDown={openDropDown} onClick={toggleOpen}>
        <NavLink to="/projects">PROJECTS</NavLink>
        <div className="arrow" />
      </MobileSubMenuWrapper>
      <SubMobileMenu openDropDown={!openDropDown} />
    </>
  );
};
