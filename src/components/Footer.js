import React from "react";
import styled from "styled-components";
import {ContentWrapper} from "./ContentWrapper";

const FooterContainer = styled.div`
  background-color: rgba(247, 245, 255);
  border-color: rgba(199, 199, 199);
  display: flex;
  justify-content: space-evenly;
`;

const EmailLink = styled.a`
  data-auto-recognition: true;
  text-decoration: none;
  color: black;
  font-size: 16px;
  letter-spacing: 0.2em;

  &:hover {
    color: red;
  }
`;

const FooterFlexWrapperFirst = styled.div`
  height: auto;
`;

const WithinFooterFirst = styled(FooterFlexWrapperFirst)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WithinFooterFirstSecond = styled(FooterFlexWrapperFirst)``;

const FooterFlexWrapperSecond = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 12px;
`;

const FooterLinkImage = styled.img`
  width: 21px;
  height: 20px;
`;

const Footer = () => {
  return (
    <ContentWrapper>
      <FooterContainer>
        <FooterFlexWrapperFirst>
          <p
            style={{
              fontSize: "13px",
              fontWeight: "bold",
              letterSpacing: "0.1em",
            }}
          >
            GET IN TOUCH
          </p>
          <p>
            <EmailLink href="mailto:Johnuxui@gmail.com">
              Johnuxui@gmail.com
            </EmailLink>
          </p>
          <WithinFooterFirst
            style={{
              fontSize: "12px",
            }}
          >
            <FooterLinkImage
              src="https://static.wixstatic.com/media/71546a_eb2b4226bfda49229e0bbd4b8ef1724c~mv2.png/v1/fill/w_25,h_25,al_c,lg_1,q_85,enc_auto/baseline_copyright_black_18dp.png"
              alt="baseline_copyright_black_18dp.png"
            ></FooterLinkImage>
            <p>2021 John Nguyen</p>
          </WithinFooterFirst>
          <WithinFooterFirstSecond
            style={{
              fontSize: "12px",
            }}
          >
            Made In San Francisco, CA
          </WithinFooterFirstSecond>
        </FooterFlexWrapperFirst>
        <FooterFlexWrapperSecond>
          <strong>LET'S CONNECT</strong>
          <LinkWrapper>
            <a
              href="https://www.linkedin.com/in/johnguyen/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterLinkImage
                src="https://static.wixstatic.com/media/71546a_30d3b9b3fe8d48d18d77ef1230fec3fd~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201372.png"
                alt="linkedin"
              ></FooterLinkImage>
            </a>
            <a
              href="https://www.instagram.com/avocado.dude/"
              target="_blank"
              rel="noreferrer"
            >
              <FooterLinkImage
                src="https://static.wixstatic.com/media/71546a_a47dc43876ae43df9ca55a484d378d78~mv2.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201370.png"
                alt="instagram"
              ></FooterLinkImage>
            </a>
            <a
              href="https://twitter.com/johnuxui"
              target="_blank"
              rel="noreferrer"
            >
              <FooterLinkImage
                src="https://static.wixstatic.com/media/71546a_dd2291a233814c3a93a48d8412da8af0~mv2.png/v1/fill/w_44,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201371.png"
                alt="twitter"
              ></FooterLinkImage>
            </a>
            <a
              href="https://dribbble.com/johnuxui"
              target="_blank"
              rel="noreferrer"
            >
              <FooterLinkImage
                src="https://static.wixstatic.com/media/71546a_83e4837ecf2c449090f39c3c210430d5~mv2.png/v1/fill/w_42,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201373.png"
                alt="website"
              ></FooterLinkImage>
            </a>
          </LinkWrapper>
        </FooterFlexWrapperSecond>
      </FooterContainer>
    </ContentWrapper>
  );
};

export default Footer;
