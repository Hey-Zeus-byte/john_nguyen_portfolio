import React from "react";
import styled from "styled-components";
import {ContentWrapper} from "../components/ContentWrapper";
import {useNavigate} from "react-router-dom";

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

const SectionHeader = styled.div`
  display: flex;
  flex-direction: row;
  color: #000000;
  font-size: 36px;
  font-family: poppins-semibold, poppins, sans-serif;
  line-height: 1.2em;
`;

const SectionSubHeader = styled.div`
  flex-direction: row;
  letter-spacing: 0.25em;
  font-size: 14px;
  color: #c7c7c7;
`;

const LightGreenBlock = styled.div`
  display: block;
  background-color: #407c5112;
  height: 735px;
  width: 753px;
`;

const WhiteBlock = styled.a`
  display: block;
  width: 170px;
  height: 365px;
  background-color: white;
`;

// Yum Yum Section vvv
const YumYumScreenshots = styled.img`
  width: 190px;
  height: 400px;
`;

const YumYumContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const YumYumPhoneContainer = styled(YumYumContainer)``;

// Yum Yum Section ^^^

// Keep Kids Fire Section vvv
const KeepKidsFireFoundationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const KKFFScreenshots = styled.img`
  //Screenshots for the Keep Kids Fire Foundation
  width: 600px;
  height: 400px;
`;

// Keep Kids Fire Section ^^^
// Joblify Section vvv
const JoblifyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Joblify Section ^^^
// Montana State Section vvv
const MontanaStateContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
// Montana State Section ^^^

// UI Design Section vvv
const UIDesignContainer = styled.div``;

const UIDesignScreenshots = styled.img`
  width: 175px;
  height: 360px;
`;

const Arrows = styled.img`
  width: 60px;
  height: 30px;
  object-fit: cover;
  object-position: 50% 50%;
`;
// UI Design Section ^^^

const MoreDesignsButton = styled.button`
  cursor: pointer;
  color: #407c51;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  background: transparent;
  border-color: #407c51;
  letter-spacing: 0.1em;

  &:hover {
    background-color: #407c51;
    color: white;
  }
`;

const Home = () => {
  const navigate = useNavigate();

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
        <LightGreenBlock />
        <YumYumContainer>
          <YumYumPhoneContainer>
            <YumYumScreenshots
              src="https://static.wixstatic.com/media/71546a_c5ed89a378a74c8ebe3c6efd6f7f6a38~mv2.png/v1/fill/w_193,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201421.png"
              alt=""
            ></YumYumScreenshots>
            <YumYumScreenshots
              src="https://static.wixstatic.com/media/71546a_371b56690ccb4b5aa4fe3993facc6f2b~mv2.png/v1/fill/w_239,h_502,al_c,lg_1,q_85,enc_auto/Group%2014028.png"
              alt=""
            ></YumYumScreenshots>
            <div
              style={{
                position: "relative",
                top: "0",
                left: "0",
                cursor: "pointer",
              }}
              onClick={() => navigate("/projects/yumyum")}
            >
              <YumYumScreenshots
                src="https://static.wixstatic.com/media/71546a_dd662d1a0d57493f8202ff1228f0f797~mv2.png/v1/fill/w_185,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2014092.png"
                alt="physical-phone"
                style={{position: "relative", top: "0", left: "0"}}
              ></YumYumScreenshots>
              <WhiteBlock
                style={{
                  // border: "5px solid red",
                  position: "absolute",
                  top: "26px",
                  left: "10px",
                  borderRadius: "5px",
                }}
              />
              <YumYumScreenshots
                src="https://static.wixstatic.com/media/71546a_fae5e95e816f40ddbecf5a8b8d989f7f~mv2.gif"
                alt="image-inside-of-phone"
                style={{
                  position: "absolute",
                  width: "162px",
                  height: "357px",
                  top: "30px",
                  left: "15px",
                  borderRadius: "5px",
                }}
              ></YumYumScreenshots>
            </div>
          </YumYumPhoneContainer>
          <div>
            <SectionSubHeader>Food recipes app</SectionSubHeader>
            <SectionHeader>Yum Yum</SectionHeader>
          </div>
        </YumYumContainer>
        <LightGreenBlock />
        <KeepKidsFireFoundationContainer>
          <div>
            <SectionSubHeader>Non-Profit Organization</SectionSubHeader>
            <SectionHeader>Keep Kids Fire Foundation</SectionHeader>
          </div>
          <KKFFScreenshots
            src="https://static.wixstatic.com/media/71546a_90db50e41882458eba18847c113e5b08~mv2.png/v1/fill/w_1286,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Group%201386.png"
            alt=""
            // style="width: 643px; height: 381px; object-fit: cover; object-position: 50% 50%;"
          ></KKFFScreenshots>
          <div style={{position: "relative", top: "0", left: "0"}}>
            <img
              src="https://static.wixstatic.com/media/71546a_6884cc1aac674e26a1048dfc1fae6fe0~mv2.png/v1/fill/w_270,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201404.png"
              alt=""
              style={{
                position: "relative",
                top: "0",
                left: "0",
                width: "135px",
                height: "272px",
              }}
            ></img>
            <img
              src="https://static.wixstatic.com/media/71546a_9d6d1778d1f74c1aa24eca4eff21396d~mv2.gif"
              alt=""
              style={{
                position: "absolute",
                top: "45px",
                left: "12px",
                width: "110px",
                height: "195px",
              }}
            ></img>
          </div>
        </KeepKidsFireFoundationContainer>
        <LightGreenBlock />
        <JoblifyContainer>
          <div>
            <SectionSubHeader>Job Seeking App</SectionSubHeader>
            <SectionHeader>Joblify</SectionHeader>
          </div>
        </JoblifyContainer>
        <LightGreenBlock />
        <MontanaStateContainer>
          <div>
            <SectionSubHeader>Government Redesign</SectionSubHeader>
            <SectionHeader>Montana State Parks</SectionHeader>
          </div>
        </MontanaStateContainer>
        <FontType>UI DESIGNS</FontType>
        <GreyLine />
        <UIDesignContainer>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_411ab5220f12428bbe241963dfb4181c~mv2.png/v1/fill/w_361,h_707,al_c,lg_1,q_85,enc_auto/Group%201350.png"
            alt=""
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_f868bcc9b6e64d9d80844ab70f117b09~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201359.png"
            alt=""
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_c1ac8a9f449d4675bf4eedb348d890d4~mv2.png/v1/fill/w_320,h_710,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2013632.png"
            alt=""
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_4c7b645e92a44f8d82302fd8694063f5~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%25201359_edited.png"
            alt=""
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_2148d376209244559b3979bf8a3f24b8~mv2.png/v1/fill/w_318,h_708,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201394.png"
            alt=""
          ></UIDesignScreenshots>
          <Arrows
            src="https://static.wixstatic.com/media/71546a_f868bcc9b6e64d9d80844ab70f117b09~mv2.png/v1/fill/w_120,h_58,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201359.png"
            alt=""
          ></Arrows>
          <UIDesignScreenshots
            src="https://static.wixstatic.com/media/71546a_f76905a13bee477da0384e4f4113319f~mv2.png/v1/fill/w_332,h_680,al_c,lg_1,q_85,enc_auto/Group%201354.png"
            alt=""
          ></UIDesignScreenshots>
        </UIDesignContainer>
        <MoreDesignsButton onClick={() => navigate("/designs")}>
          more designs
        </MoreDesignsButton>
      </div>
    </ContentWrapper>
  );
};

export default Home;
