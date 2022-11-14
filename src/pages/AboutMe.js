import React from "react";
import styled from "styled-components";
import GoldenGateBridge from "../assets/aboutme/GoldenGateBridge.gif";
import { ContentWrapper } from "../components/ContentWrapper";
import { skills, tools, workexp, education, languages } from "../traits";

const TitleFontType = styled.h4`
  color: #c7c7c7;
  font-size: 18px;
  text-align: center;
  display: flex;
  align-content: flex-start;
  letter-spacing: 2px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 80px;
  }
`;

const FontTypeIntro = styled.h2`
  color: #767676;
  font-size: 25px;
  word-spacing: 1px;
  font: sans-serif;

  .darkText {
    color: #000000;
    font-size: 28px;
  }
`;
const FontTypeBody = styled(FontTypeIntro)`
  font-size: 16px;
`;

const MyStoryCont = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
  }

  .temp {
    @media only screen and (max-width: 768px) {
      margin-bottom: -450px;
    }
  }

  .widthContainer {
    width: 350px;
  }
`;

const GoldenGateImg = styled.img`
  width: 235px;
  height: 410px;
  position: relative;
  bottom: 470px;
  left: 150px;

  @media only screen and (max-width: 768px) {
    width: 280px;
    height: 460px;
    left: 50px;
    bottom: 480px;
  }
`;

const PurpleBackgroundImg = styled.div`
  display: block;
  width: 325px;
  height: 525px;
  background-color: #b5bcf0;

  @media only screen and (max-width: 768px) {
    width: 275px;
    height: 500px;
  }
`;

const HorizontalLineBreak = styled.div`
  display: block;
  position: relative;
  width: 100%;
  height: 1px;
  background-color: #c7c7c7;
  margin-top: -300px;
  margin-bottom: 100px;
`;

const SmallHorizontalLineBreak = styled.div`
  width: 125px;
  height: 1px;
  background-color: #c7c7c7;
  margin-top: 32px;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const VerticalLineBreak = styled.div`
  display: flex;
  width: 1px;
  height: 380px;
  background-color: #c7c7c7;
  margin-top: 20px;
  margin-left: -6px;
`;

const TraitCont = styled.div`
  display: flex;
  justify-content: center;
  gap: 200px;
`;

const TraitTitle = styled(TitleFontType)`
  margin-left: 40px;
  margin-top: -5px;

  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 80px;
  }
`;

const TraitListCont = styled.div``;
const TraitList = styled.li`
  list-style-type: none;
`;

const PurpleDot = styled.div`
  background-color: #b5bcf0;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-top: -13px;
`;

const MyStorySection = () => {
  return (
    <>
      <MyStoryCont>
        <div className="temp">
          <PurpleBackgroundImg />
          <GoldenGateImg src={GoldenGateBridge} alt="golden-gate-img" />
        </div>
        <div>
          <SmallHorizontalLineBreak />
        </div>
        <div className="widthContainer">
          <TitleFontType>My Story</TitleFontType>
          <FontTypeIntro>
            <span className="darkText">Hello there, I'm John. </span> A food
            lover, blogger, amateur photographer, and designer in San Francisco.
          </FontTypeIntro>
          <FontTypeBody>
            The shift in my career happened when I was contacted to redesign a
            menu for a popular brunch restaurant, and saw how visual design can
            solve real-world challenges at scale.
          </FontTypeBody>
          <FontTypeBody>
            Coming from a background in both supply chain and design, I love
            connecting the dots between user satisfaction, pain points, and
            business goals. In my free time, I enjoy promoting local businesses
            and restaurants through my food blog.
          </FontTypeBody>
        </div>
      </MyStoryCont>
      <HorizontalLineBreak />
    </>
  );
};

const Traits = () => {
  return (
    <>
      <TraitCont>
        <div>
          <PurpleDot />
          <VerticalLineBreak />
        </div>
        <TraitListCont>
          <TraitTitle>Skills</TraitTitle>
          {skills.map((skill) => {
            return (
              <ul>
                <TraitList>{skill.skill}</TraitList>
              </ul>
            );
          })}
        </TraitListCont>
        <TraitListCont>
          <TraitTitle>Tools</TraitTitle>
          {tools.map((tool) => {
            return (
              <ul>
                <TraitList>{tool.tool}</TraitList>
              </ul>
            );
          })}
        </TraitListCont>
        <TraitListCont>
          <TraitTitle>Languages</TraitTitle>
          {languages.map((language) => {
            return (
              <ul>
                <TraitList>{language.language}</TraitList>
              </ul>
            );
          })}
        </TraitListCont>
      </TraitCont>
      <div>
        <PurpleDot />
        <TitleFontType>Work Experience</TitleFontType>
        {workexp.map((job) => {
          return (
            <ul>
              <li>
                {job.position}
                {job.company}
                {job.experience}
              </li>
            </ul>
          );
        })}
      </div>
      <div>
        <PurpleDot />
        <TitleFontType>Education</TitleFontType>
        {education.map((education) => {
          return (
            <ul>
              <TraitList>
                {education.institution}
                {education.title}
              </TraitList>
            </ul>
          );
        })}
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <ContentWrapper>
      <MyStorySection />
      <Traits />
    </ContentWrapper>
  );
};

export default AboutMe;
