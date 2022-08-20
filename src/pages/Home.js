import React from "react";
import styled from "styled-components";
import {ContentWrapper} from "../components/ContentWrapper";

const UpperHalfHomePage = styled.div`
  background-color: rgb(250, 250, 250);
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const GreyLine = styled.div`
  display: block;
  background-color: grey;
  height: 175px;
  width: 1px;
  margin: 0 50%;
`;

const JohnsIntro = styled.h1`
  font-size: 40px;
  display: flex;
  flex-direction: column;
  line-height: 1.2em;
`;

const ImgOfJohn = styled.img`
  width: 406px;
  height: 405px;
  transition-duration: 600ms;
`;

const FontType = styled.h4`
  color: #919191;
  font-size: 15px;
  text-align: center;
`;

const PhoneScreenShotSize = styled.img``;
const YumYumSection = styled.div``;
const KeepKidsFireFoundationSection = styled.div``;
const JoblifySection = styled.div``;
const MontanaStateSection = styled.div``;

const Home = () => {
  return (
    <ContentWrapper>
      <UpperHalfHomePage>
        <a href="/about-me">
          <ImgOfJohn
            src="https://static.wixstatic.com/media/71546a_3f715f9bdae94883b91336d257fba2c5~mv2.gif"
            alt=""
          />
        </a>
        <JohnsIntro>
          <span>Hi there!</span>
          <span>My name is John</span>
          <span>and I'm a</span>
          <span style={{color: "#407C51"}}> UX & UI </span>
          <span>designer.</span>
        </JohnsIntro>
      </UpperHalfHomePage>
      <div>
        <FontType>PROJECTS</FontType>
        <GreyLine />
        <YumYumSection>
          <PhoneScreenShotSize
            src="https://static.wixstatic.com/media/71546a_c5ed89a378a74c8ebe3c6efd6f7f6a38~mv2.png/v1/fill/w_193,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201421.png"
            alt=""
            style={{
              width: "193px",
              height: "405px",
            }}
          ></PhoneScreenShotSize>
          <PhoneScreenShotSize
            src="https://static.wixstatic.com/media/71546a_fae5e95e816f40ddbecf5a8b8d989f7f~mv2.gif"
            alt="screenshot"
            style={{
              width: "161px",
              height: "357px",
            }}
          ></PhoneScreenShotSize>
          {/* // the image element above alt="screenshot" must be on top of the image alt="phone" z-index  */}
          <PhoneScreenShotSize
            src="https://static.wixstatic.com/media/71546a_dd662d1a0d57493f8202ff1228f0f797~mv2.png/v1/fill/w_185,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2014092.png"
            alt="phone"
            style={{
              width: "185px",
              height: "405px",
            }}
          ></PhoneScreenShotSize>
        </YumYumSection>
        <KeepKidsFireFoundationSection />
        <JoblifySection />
        <MontanaStateSection />
        <FontType>UI DESIGNS</FontType>
        <GreyLine />
      </div>
    </ContentWrapper>
  );
};

export default Home;
