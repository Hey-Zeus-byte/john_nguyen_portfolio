import styled from "styled-components";
import { Link } from "react-router-dom";

const DropDownContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgb(245, 244, 220);
  transform: ${({ openDropDown }) =>
    openDropDown ? "translateY(0)" : "translateY(100%)"};
  opacity: ${({ openDropDown }) => (openDropDown ? "0" : "1")};
`;

const SubNavLink = styled(Link)`
  text-decoration: none;
  text-align: left;
  color: #000000;
  font-size: 20px;
  font-weight: 500;
  padding: 9px 20px;
  line-height: 38px;
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
