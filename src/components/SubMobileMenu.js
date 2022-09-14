import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDownContent = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  border: 3px solid red;
`;

const SubNavLink = styled(Link)`
  text-decoration: none;
  display: block;
  text-align: left;
  padding: 10px;
`;

export const SubMobileMenu = ({ openDropDown }) => {
  return (
    <DropDownContent openDropDown={openDropDown}>
      <SubNavLink to="/projects/yumyum">Yum Yum</SubNavLink>
      <SubNavLink to="/projects/nonprofit">Non Profit Organization</SubNavLink>
      <SubNavLink to="/projects/joblify">Joblify</SubNavLink>
      <SubNavLink to="/projects/montana">Montana State Park</SubNavLink>
    </DropDownContent>
  );
};
