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
  margin: 0 50% 0 50%;
`;

const Home = () => {
  return (
    <ContentWrapper>
      <UpperHalfHomePage>
        <a href="/about-me">
          <img
            src="https://static.wixstatic.com/media/71546a_3f715f9bdae94883b91336d257fba2c5~mv2.gif"
            alt=""
            style={{
              width: "406px",
              height: "405px",
              transitionDuration: "600ms",
            }}
          />
        </a>
        <h1
          style={{
            fontSize: "40px",
            display: "flex",
            flexDirection: "column",
            lineHeight: "1.2em",
          }}
        >
          <span>Hi there!</span>
          <span>My name is John</span>
          <span>and I'm a</span>
          <span style={{color: "#407C51"}}> UX & UI </span>
          <span>designer.</span>
        </h1>
      </UpperHalfHomePage>
      <div>
        <h4 style={{color: "#919191", fontSize: "15px", textAlign: "center"}}>
          PROJECTS
        </h4>
        <GreyLine></GreyLine>
        <img
          src="https://static.wixstatic.com/media/71546a_c5ed89a378a74c8ebe3c6efd6f7f6a38~mv2.png/v1/fill/w_193,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%201421.png"
          alt=""
          style={{
            width: "193px",
            height: "405px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        ></img>
        <img
          src="https://static.wixstatic.com/media/71546a_fae5e95e816f40ddbecf5a8b8d989f7f~mv2.gif"
          alt="Apr-20-2021 20-42-31.gif"
          style={{
            width: "161px",
            height: "357px",
            objectFit: "cover",
            objectPosition: "50% 50%;",
          }}
        ></img>
        <img
          src="https://static.wixstatic.com/media/71546a_dd662d1a0d57493f8202ff1228f0f797~mv2.png/v1/fill/w_185,h_405,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Group%2014092.png"
          alt=""
          style={{
            width: "185px",
            height: "405px",
            objectFit: "cover",
            objectPosition: "50% 50%",
          }}
        ></img>
      </div>
    </ContentWrapper>
  );
};

export default Home;
