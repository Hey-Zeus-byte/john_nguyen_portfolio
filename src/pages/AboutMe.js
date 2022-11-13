import React from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";
import { skills, tools, workexp, education, languages } from "../traits";

const CenterContent = styled.div``;

const TitleFontType = styled.h4`
  color: #919191;
  font-size: 15px;
  text-align: center;
  @media only screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 80px;
  }
`;

const PurpleBackgroundImg = styled.div`
  display: block;
  width: 100px;
  height: 300px;
  background-color: #b5bcf0;
`;

const HorizontalLineBreak = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 850px;
  height: 1px;
  background-color: #c7c7c7;
  margin: 20px 0;
`;

const TraitCont = styled.div`
  display: flex;
`;

const TraitTitle = styled.h1`
  color: #919191;
  font-size: 14px;
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
`;

const MyStorySection = () => {
  return (
    <>
      <PurpleBackgroundImg />
      <TitleFontType>My Story</TitleFontType>
      <div>
        Hello there, I'm John. A food lover, blogger, amateur photographer, and
        designer in San Francisco.
      </div>
      <div>
        The shift in my career happened when I was contacted to redesign a menu
        for a popular brunch restaurant, and saw how visual design can solve
        real-world challenges at scale.
      </div>
      <div>
        Coming from a background in both supply chain and design, I love
        connecting the dots between user satisfaction, pain points, and business
        goals. In my free time, I enjoy promoting local businesses and
        restaurants through my food blog.
      </div>
    </>
  );
};

const Traits = () => {
  return (
    <>
      <TraitCont>
        <PurpleDot />
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
      <CenterContent>
        <HorizontalLineBreak />
      </CenterContent>
      <Traits />
    </ContentWrapper>
  );
};

export default AboutMe;
