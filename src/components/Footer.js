import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "./ContentWrapper";

const Container = styled.div`
  background-color: rgba(247, 245, 245);
  border-color: rgba(199, 199, 199);
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 0 80px 0;

  @media only screen and (max-width: 768px) {
    padding: 0 0 20px 0;
    flex-direction: column;
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: black;
  font-size: 16px;
  letter-spacing: 3px;

  &:hover {
    color: red;
  }
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const LeftHalfOfFooterContainer = styled.div`
  height: auto;
`;

const TextFontTypeOne = styled(LeftHalfOfFooterContainer)`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
`;

const TextFontTypeTwo = styled(TextFontTypeOne)``;

const RightHalfOfFooterContainer = styled.div``;

const LeftFootHeader = styled.p`
  font-size: 13px;
  font-weight: bold;
  letter-spacing: 2px;
`;

const RightFootHeader = styled(LeftFootHeader)`
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 15px;

  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;

const CopyRightImage = styled.img`
  width: 21px;
  height: 20px;
  @media only screen and (max-width: 768px) {
    width: 14px;
    height: 16px;
  }
`;

const FooterLinkImage = styled(CopyRightImage)`
  @media only screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

const FooterContent = () => {
  return (
    <>
      <LeftHalfOfFooterContainer>
        <LeftFootHeader>GET IN TOUCH</LeftFootHeader>
        <p>
          <EmailLink href="mailto:Johnuxui@gmail.com">
            Johnuxui@gmail.com
          </EmailLink>
        </p>
        <TextFontTypeOne>
          <CopyRightImage
            src="https://static.wixstatic.com/media/71546a_eb2b4226bfda49229e0bbd4b8ef1724c~mv2.png/v1/fill/w_25,h_25,al_c,lg_1,q_85,enc_auto/baseline_copyright_black_18dp.png"
            alt="baseline_copyright_black_18dp.png"
          ></CopyRightImage>
          <p>2021 John Nguyen</p>
        </TextFontTypeOne>
        <TextFontTypeTwo>Made In San Francisco, CA</TextFontTypeTwo>
      </LeftHalfOfFooterContainer>
      <RightHalfOfFooterContainer>
        <RightFootHeader>LET'S CONNECT</RightFootHeader>
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
      </RightHalfOfFooterContainer>
    </>
  );
};

const Footer = () => {
  return (
    <Container>
      <ContentWrapper>
        <FooterContainer>
          <FooterContent />
        </FooterContainer>
      </ContentWrapper>
    </Container>
  );
};

export default Footer;
