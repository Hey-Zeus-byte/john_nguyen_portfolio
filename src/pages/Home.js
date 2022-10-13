import React from "react";
import styled from "styled-components";
import { ContentWrapper } from "../components/ContentWrapper";
import { Link, useNavigate } from "react-router-dom";
import { ProjectDescComp } from "../components/ProjectDescComp";

const TopSection = styled.div`
  width: 100%;
  height: 750px;
`;

const TopSectionBackground = styled.div`
  background-color: rgb(250, 250, 250);

  @media only screen and (max-width: 768px) {
    height: 500px;
  }
`;

const TempCont = styled.div`
  display: flex;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const TempCont2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 80px;

  @media only screen and (max-width: 768px) {
    margin-top: 15px;
  }
`;

const GreyLine = styled.div`
  display: block;
  background-color: grey;
  height: 175px;
  width: 1px;
  margin: 0 50%;

  @media only screen and (max-width: 768px) {
    height: 100px;
    margin-top: 8px;
  }
`;

const JohnsIntro = styled.h1`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  line-height: 1.2em;
  margin-top: 160px;
  margin-right: 50px;

  .green-text {
    color: #407c51;
  }

  @media only screen and (max-width: 768px) {
    font-size: 28px;
    margin-top: 20px;
  }
`;

const ImgOfJohn = styled.img`
  width: 406px;
  height: 405px;
  transition-duration: 600ms;
  margin-top: 100px;
  margin-left: 50px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 290px;
    height: 290px;
    margin-top: 20px;
  }
`;

const FontType = styled.h4`
  color: #919191;
  font-size: 15px;
  text-align: center;
  z-index: 2;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

// UI Design Section vvv
const UIDesignContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 50px;

  @media only screen and (max-width: 768px) {
    .display-none-mobile {
      display: none;
    }
  }
`;

const UIDesignScreenshots = styled.img`
  width: 175px;
  height: 360px;
  filter: drop-shadow(0 1px 5px #000000);
`;

const Arrows = styled.img`
  width: 60px;
  height: 30px;
  margin-top: 150px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
// UI Design Section ^^^
const ButtonContainer = styled.div`
  text-align: right;
  margin-right: 225px;
  margin-bottom: 150px;
`;
const MoreDesignsButton = styled.button`
  cursor: pointer;
  color: #407c51;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  background: transparent;
  border-color: #407c51;
  letter-spacing: 2px;
  padding: 15px 25px 15px 25px;

  &:hover {
    background-color: #407c51;
    color: white;
  }

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    width: 350px;
    height: 50px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const AccessibilityLink = styled(Link)`
  text-decoration: none;
`;

const UpperHalfHomePage = () => {
  return (
    <TopSectionBackground>
      <ContentWrapper>
        <TopSection>
          <TempCont>
            <AccessibilityLink to="/about-me">
              <ImgOfJohn
                src="https://static.wixstatic.com/media/71546a_3f715f9bdae94883b91336d257fba2c5~mv2.gif"
                alt=""
              />
            </AccessibilityLink>
            <JohnsIntro>
              <span>Hi there!</span>
              <span>My name is John</span>
              <span>and I'm a</span>
              <span className="green-text"> UX & UI </span>
              <span>designer.</span>
            </JohnsIntro>
          </TempCont>
          <TempCont2>
            <FontType>PROJECTS</FontType>
            <GreyLine />
          </TempCont2>
        </TopSection>
      </ContentWrapper>
    </TopSectionBackground>
  );
};

const UIDesigns = () => {
  return (
    <>
      <ContentWrapper>
        <FontType>UI DESIGNS</FontType>
        <GreyLine />
        <UIDesignContainer>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_411ab5220f12428bbe241963dfb4181c~mv2.png/v1/fill/w_361,h_707,al_c,lg_1,q_85,enc_auto/Group%201350.png"
            alt="first_phone_screenshot_bottomOfPage"
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_f868bcc9b6e64d9d80844ab70f117b09~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201359.png"
            alt="1st arrow"
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_c1ac8a9f449d4675bf4eedb348d890d4~mv2.png/v1/fill/w_320,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2013632.png"
            alt="second_phone_screenshot_bottomOfPage"
            className="display-none-mobile"
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_4c7b645e92a44f8d82302fd8694063f5~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%25201359_edited.png"
            alt="2nd arrow"
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_2148d376209244559b3979bf8a3f24b8~mv2.png/v1/fill/w_318,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201394.png"
            alt="third_phone_screenshot_bottomOfPage"
            className="display-none-mobile"
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_f868bcc9b6e64d9d80844ab70f117b09~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201359.png"
            alt="3rd arrow"
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_f76905a13bee477da0384e4f4113319f~mv2.png/v1/fill/w_332,h_680,al_c,lg_1,q_85,enc_auto/Group%201354.png"
            alt="fourth_phone_screenshot_bottomOfPage"
          ></UIDesignScreenshots>
        </UIDesignContainer>
      </ContentWrapper>
    </>
  );
};

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <UpperHalfHomePage />
      <ProjectDescComp />
      <UIDesigns />

      <ContentWrapper>
        <ButtonContainer>
          <MoreDesignsButton onClick={() => navigate("/designs")}>
            more designs
          </MoreDesignsButton>
        </ButtonContainer>
      </ContentWrapper>
    </>
  );
};

export default Home;
