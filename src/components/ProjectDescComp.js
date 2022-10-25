import styled from "styled-components";
import { Link } from "react-router-dom";
import YumYumImg1 from "../assets/homepage/YumYum1.webp";
import YumYumImg2 from "../assets/homepage/YumYum2.webp";
import YumYumImg3 from "../assets/homepage/YumYum3.gif";
import ImgOfPhysicalPhone from "../assets/homepage/ImgOfPhone.webp";
import KKSF2 from "../assets/homepage/KKSF2.webp";
import KKFS1 from "../assets/homepage/KKFS1.gif";
import Joblify1 from "../assets/homepage/Joblify1.webp";
import Joblify2 from "../assets/homepage/Joblify2.gif";
import Montana1 from "../assets/homepage/Montana1.gif";
import Montana2 from "../assets/homepage/Montana2.webp";

const LeftContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 155px;
  margin-left: 120px;

  .joblifyScreenshot {
    width: 425px;
    height: 405px;

    @media only screen and (max-width: 768px) {
      width: 255px;
      height: 250px;
      margin-right: 9px;
    }
  }
  .joblifyScreenshot2 {
    position: absolute;
    width: 162px;
    height: 357px;
    top: 30px;
    left: 15px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
      width: 105px;
      height: 220px;
      top: 15px;
      left: 5px;
    }
  }

  @media only screen and (max-width: 768px) {
    justify-content: center;
    margin: 70px 0 0 0;
    gap: 10px;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;

  @media only screen and (max-width: 768px) {
    justify-content: center;

    .KKFFTopMargin {
      margin-top: -40px;
    }
  }
`;

const Screenshots = styled.img`
  width: 190px;
  height: 400px;
  margin-right: 35px;

  @media only screen and (max-width: 768px) {
    width: 115px;
    height: 250px;
    margin: 0;
  }
`;

const LeftPhoneContainer = styled(LeftContainer)`
  margin-left: 250px;
  cursor: pointer;

  .image_inside_phone {
    position: absolute;
    width: 162px;
    height: 357px;
    top: 30px;
    left: 15px;
    border-radius: 5px;

    @media only screen and (max-width: 768px) {
      width: 100px;
      height: 225px;
      top: 18px;
      left: 7px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin-left: 0;
    flex-wrap: wrap;
  }

  .whiteBlockAndImageContainer {
    position: relative;
  }
`;

const RightPhoneContainer = styled(LeftContainer)`
  margin-right: 350px;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    margin: 0;
    flex-direction: column-reverse;
    flex-wrap: wrap-reverse;
    margin-top: 50px;

    .montanaStatePhyPhone {
      position: relative;
      width: 65px;
      height: 130px;
      top: -180px;
      left: 300px;
    }

    .montanaStateMonitorImg {
      position: relative;
      width: 60px;
      height: 120px;
      top: -182px;
      left: 238px;
    }

    .montanaMonitorImg {
      width: 350px;
      height: 280px;
    }
  }

  .whiteBlockAndImageContainer {
    position: relative;
    top: 130px;
    left: 135px;

    @media only screen and (max-width: 768px) {
      position: static;
      top: 130px;
      left: 135px;
    }
  }
`;

const WhiteBlock = styled.a`
  display: block;
  width: 170px;
  height: 365px;
  background-color: white;
  position: absolute;
  top: 26px;
  left: 10px;
  border-radius: 5px;

  @media only screen and (max-width: 768px) {
    width: 108px;
    height: 230px;
    top: 15px;
    left: 3px;
    filter: drop-shadow(0 1px 1px #000000);
  }
`;

const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 50px;
  width: 200px;

  @media only screen and (max-width: 768px) {
    margin: 10px 0 0 0;
    align-items: center;
  }
`;

const RightHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 150px;
  width: 300px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    align-items: center;
    margin-top: -100px;

    .mobileHeader {
      font-size: 30px;
    }

    .mobileSubHeader {
      margin-bottom: 10px;
    }
  }
`;

const SectionHeader = styled.div`
  color: #000000;
  font-size: 36px;
  font-family: poppins-semibold, poppins, sans-serif;
`;

const SectionSubHeader = styled.div`
  letter-spacing: 3px;
  font-size: 14px;
  color: #c7c7c7;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 5px;
  }
`;

const LeftLightGreenBlock = styled.div`
  background-color: #407c5112;
  height: 735px;
  width: 753px;
  margin-top: 150px;

  @media only screen and (max-width: 768px) {
    height: 295px;
    width: 100%;
    margin-top: 200px;
  }
`;

const RightLightGreenBlock = styled.div`
  background-color: #407c5112;
  height: 735px;
  width: 753px;
  margin-top: 150px;
  margin-left: auto;

  @media only screen and (max-width: 768px) {
    height: 295px;
    width: 100%;
    margin-top: 200px;
  }
`;

//Screenshots for the Keep Kids Fire Foundation & Montana State Parks
const KKFFAndMspScreenshots = styled.img`
  width: 600px;
  height: 400px;

  @media only screen and (max-width: 768px) {
    width: 350px;
    height: 200px;
  }
`;

const PhysicalPhone = styled.img`
  position: relative;
  top: 0;
  left: 0;
  width: 135px;
  height: 272px;

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 60px;
    height: 110px;
    top: -110px;
    left: 30px;
  }
`;

const PhysicalLaptopOrMonitor = styled.img`
  position: absolute;
  top: 45px;
  left: 12px;
  width: 110px;
  height: 195px;

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 55px;
    height: 100px;
    top: -112px;
    left: -28px;
    border-radius: 5px;
  }
`;

const AccessibilityLink = styled(Link)`
  text-decoration: none;
`;

const YumYum = () => {
  return (
    <LeftLightGreenBlock>
      <AccessibilityLink to="/projects/yumyum">
        <LeftContainer>
          <LeftPhoneContainer>
            <>
              <Screenshots src={YumYumImg1} alt="YumYumScrShot1"></Screenshots>
              <Screenshots src={YumYumImg2} alt="YumYumScrShot2"></Screenshots>
              <div className="whiteBlockAndImageContainer">
                <Screenshots
                  src={ImgOfPhysicalPhone}
                  alt="physical-phone"
                ></Screenshots>
                <WhiteBlock />
                <Screenshots
                  src={YumYumImg3}
                  alt="image-inside-of-phone"
                  className="image_inside_phone"
                ></Screenshots>
              </div>
            </>
            <LeftHeaderContainer>
              <SectionSubHeader>Food recipes app</SectionSubHeader>
              <SectionHeader>Yum Yum</SectionHeader>
            </LeftHeaderContainer>
          </LeftPhoneContainer>
        </LeftContainer>
      </AccessibilityLink>
    </LeftLightGreenBlock>
  );
};

const KKFC = () => {
  return (
    <RightLightGreenBlock>
      <AccessibilityLink to="/projects/nonprofit">
        <RightContainer>
          <RightPhoneContainer>
            <RightHeaderContainer className="KKFFTopMargin">
              <SectionSubHeader className="mobileSubHeader">
                Non-Profit Organization
              </SectionSubHeader>
              <SectionHeader className="mobileHeader">
                Keep Kids Fire Foundation
              </SectionHeader>
            </RightHeaderContainer>
            <>
              <div className="whiteBlockAndImageContainer">
                <PhysicalPhone
                  src={ImgOfPhysicalPhone}
                  alt="physical-phone"
                ></PhysicalPhone>
                <PhysicalLaptopOrMonitor
                  src={KKFS1}
                  alt="physical-laptop"
                ></PhysicalLaptopOrMonitor>
              </div>
            </>
            <KKFFAndMspScreenshots src={KKSF2} alt=""></KKFFAndMspScreenshots>
          </RightPhoneContainer>
        </RightContainer>
      </AccessibilityLink>
    </RightLightGreenBlock>
  );
};

const Joblify = () => {
  return (
    <LeftLightGreenBlock>
      <AccessibilityLink to="/projects/joblify">
        <LeftContainer>
          <LeftPhoneContainer>
            <Screenshots
              src={Joblify1}
              alt="joblify_home_screenshot"
              className="joblifyScreenshot"
            ></Screenshots>
            <div className="whiteBlockAndImageContainer">
              <Screenshots
                src={ImgOfPhysicalPhone}
                alt="physical-phone"
              ></Screenshots>
              <WhiteBlock />
              <Screenshots
                src={Joblify2}
                alt="image-inside-of-phone"
                className="joblifyScreenshot2"
              ></Screenshots>
            </div>
            <LeftHeaderContainer>
              <SectionSubHeader>Job Seeking App</SectionSubHeader>
              <SectionHeader>Joblify</SectionHeader>
            </LeftHeaderContainer>
          </LeftPhoneContainer>
        </LeftContainer>
      </AccessibilityLink>
    </LeftLightGreenBlock>
  );
};

const MontanaStateParks = () => {
  return (
    <RightLightGreenBlock style={{ marginBottom: "250px" }}>
      <AccessibilityLink to="/projects/montana">
        <RightContainer>
          <RightPhoneContainer>
            <RightHeaderContainer>
              <SectionSubHeader className="mobileSubHeader">
                Government Redesign
              </SectionSubHeader>
              <SectionHeader className="mobileHeader">
                Montana State Parks
              </SectionHeader>
            </RightHeaderContainer>
            <div className="whiteBlockAndImageContainer">
              <PhysicalPhone
                src={ImgOfPhysicalPhone}
                alt="physical-phone"
                className="montanaStatePhyPhone"
              ></PhysicalPhone>
              <PhysicalLaptopOrMonitor
                src={Montana1}
                alt="imageInsidePhone"
                className="montanaStateMonitorImg"
              ></PhysicalLaptopOrMonitor>
            </div>
            <KKFFAndMspScreenshots
              src={Montana2}
              alt="monitor"
              className="montanaMonitorImg"
            ></KKFFAndMspScreenshots>
          </RightPhoneContainer>
        </RightContainer>
      </AccessibilityLink>
    </RightLightGreenBlock>
  );
};

export const ProjectDescComp = () => {
  return (
    <>
      <YumYum />
      <KKFC />
      <Joblify />
      <MontanaStateParks />
    </>
  );
};
