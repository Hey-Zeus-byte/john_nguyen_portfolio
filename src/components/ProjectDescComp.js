import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import YumYumImg1 from "../assets/homepage/YumYum1.webp";
import YumYumImg2 from "../assets/homepage/YumYum2.webp";
import YumYumImg3 from "../assets/homepage/YumYum3.gif";
import ImgOfPhysicalPhone from "../assets/homepage/ImgOfPhone.webp";

const LeftContainer = styled.a`
  display: flex;
  justify-content: space-between;
  margin-top: 155px;
  margin-left: 120px;

  @media only screen and (max-width: 768px) {
    margin: 0;
    display: flex;
    flex-direction: column;
  }
`;

const RightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
`;

const Screenshots = styled.img`
  width: 190px;
  height: 400px;
  margin-right: 35px;

  @media only screen and (max-width: 768px) {
    width: 95px;
    height: 200px;
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
  }

  .whiteBlockAndImageContainer {
    position: relative;
  }
`;

const RightPhoneContainer = styled(LeftContainer)`
  margin-right: 350px;
  cursor: pointer;
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
`;

const LeftHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 150px;
  margin-left: 50px;
  width: 200px;
`;

const RightHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: bold;
  margin-top: 150px;
  width: 300px;
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
`;

const LeftLightGreenBlock = styled.div`
  background-color: #407c5112;
  height: 735px;
  width: 753px;
  margin-top: 150px;

  @media only screen and (max-width: 768px) {
    height: 735px;
    width: 410px;
  }
`;

const RightLightGreenBlock = styled.div`
  background-color: #407c5112;
  height: 735px;
  width: 753px;
  margin-top: 150px;
  margin-left: auto;

  @media only screen and (max-width: 768px) {
    height: 735px;
    width: 410px;
  }
`;

const KKFFAndMspScreenshots = styled.img`
  //Screenshots for the Keep Kids Fire Foundation & Montana State Parks
  width: 600px;
  height: 400px;
`;

const YumYum = () => {
  const navigate = useNavigate();

  return (
    <LeftLightGreenBlock>
      <LeftContainer onClick={() => navigate("/projects/yumyum")}>
        <LeftPhoneContainer>
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
          <LeftHeaderContainer>
            <SectionSubHeader>Food recipes app</SectionSubHeader>
            <SectionHeader>Yum Yum</SectionHeader>
          </LeftHeaderContainer>
        </LeftPhoneContainer>
      </LeftContainer>
    </LeftLightGreenBlock>
  );
};

const KKFC = () => {
  const navigate = useNavigate();

  return (
    <RightLightGreenBlock>
      <RightContainer onClick={() => navigate("/projects/nonprofit")}>
        <RightPhoneContainer>
          <RightHeaderContainer>
            <SectionSubHeader>Non-Profit Organization</SectionSubHeader>
            <SectionHeader>Keep Kids Fire Foundation</SectionHeader>
          </RightHeaderContainer>
          <div style={{ position: "relative", top: "130px", left: "135px" }}>
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
          <KKFFAndMspScreenshots
            src="https://static.wixstatic.com/media/71546a_90db50e41882458eba18847c113e5b08~mv2.png/v1/fill/w_1286,h_762,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/Group%201386.png"
            alt=""
          ></KKFFAndMspScreenshots>
        </RightPhoneContainer>
      </RightContainer>
    </RightLightGreenBlock>
  );
};

const Joblify = () => {
  const navigate = useNavigate();

  return (
    <LeftLightGreenBlock>
      <LeftContainer onClick={() => navigate("/projects/joblify")}>
        <LeftPhoneContainer>
          <Screenshots
            src="https://static.wixstatic.com/media/71546a_90187460ab8f4b2aa0c3bae14ed4ff8e~mv2.png/v1/crop/x_425,y_0,w_836,h_783/fill/w_436,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201407.png"
            alt=""
            style={{ width: "425px", height: "405px" }}
          ></Screenshots>
          <div
            style={{
              position: "relative",
              top: "0",
              left: "0",
            }}
          >
            <Screenshots
              src="https://static.wixstatic.com/media/71546a_dd662d1a0d57493f8202ff1228f0f797~mv2.png/v1/fill/w_185,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2014092.png"
              alt="physical-phone"
              style={{ position: "relative", top: "0", left: "0" }}
            ></Screenshots>
            <WhiteBlock
              style={{
                position: "absolute",
                top: "26px",
                left: "10px",
                borderRadius: "5px",
              }}
            />
            <Screenshots
              src="https://static.wixstatic.com/media/71546a_c0d96257e18742ca93b5101bd2ff0909~mv2.gif"
              alt="image-inside-of-phone"
              style={{
                position: "absolute",
                width: "162px",
                height: "357px",
                top: "30px",
                left: "15px",
                borderRadius: "5px",
              }}
            ></Screenshots>
          </div>
          <LeftHeaderContainer>
            <SectionSubHeader>Job Seeking App</SectionSubHeader>
            <SectionHeader>Joblify</SectionHeader>
          </LeftHeaderContainer>
        </LeftPhoneContainer>
      </LeftContainer>
    </LeftLightGreenBlock>
  );
};

const MontanaStateParks = () => {
  const navigate = useNavigate();

  return (
    <RightLightGreenBlock>
      <RightContainer onClick={() => navigate("/projects/montana")}>
        <RightPhoneContainer>
          <RightHeaderContainer>
            <SectionSubHeader>Government Redesign</SectionSubHeader>
            <SectionHeader>Montana State Parks</SectionHeader>
          </RightHeaderContainer>
          <div style={{ position: "relative", top: "130px", left: "135px" }}>
            <img
              src="https://static.wixstatic.com/media/71546a_dd662d1a0d57493f8202ff1228f0f797~mv2.png/v1/fill/w_127,h_276,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2014092.png"
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
              src="https://static.wixstatic.com/media/71546a_14b927b820a34dd5aa1778fa45864790~mv2.gif"
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
          <KKFFAndMspScreenshots
            src="https://static.wixstatic.com/media/71546a_a16255d2d28949b4ab5b80b057473d08~mv2.png/v1/fill/w_478,h_375,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201387.png"
            alt=""
          ></KKFFAndMspScreenshots>
        </RightPhoneContainer>
      </RightContainer>
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
