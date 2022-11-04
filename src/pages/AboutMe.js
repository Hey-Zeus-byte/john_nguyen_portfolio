import React from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";

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

const AboutMe = () => {
  return (
    <ContentWrapper>
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
      {/* Line Break Here */}
    </ContentWrapper>
  );
};

export default AboutMe;
