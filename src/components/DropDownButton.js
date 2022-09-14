import { useState } from "react";
import styled from "styled-components";
import { SubMobileMenu } from "./SubMobileMenu";

const DropDownButtonWrapper = styled.div`
  z-index: 2;

  div {
    position: fixed;
    border: solid black;
    border-width: 0 2px 2px 0;
    padding: 5px;

    &:nth-child(1) {
      transform: ${({ openDropDown }) =>
        openDropDown ? "rotate(225deg)" : "rotate(45deg)"};
    }
  }
`;

export const DropDownButton = ({ onToggle }) => {
  const [openDropDown, setOpenDropDown] = useState();

  const toggleOpen = () => {
    setOpenDropDown(!openDropDown);
    if (onToggle) {
      onToggle(!openDropDown);
    }
  };

  return (
    <>
      <DropDownButtonWrapper openDropDown={openDropDown} onClick={toggleOpen}>
        <div />
      </DropDownButtonWrapper>
      <SubMobileMenu openDropDown={!openDropDown} />
    </>
  );
};
