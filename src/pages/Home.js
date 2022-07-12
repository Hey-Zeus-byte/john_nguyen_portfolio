import React from "react";
import "../css/home.css";

const Home = () => {
  return (
    <div className="float-container">
      <div className="float-child-left">
        <a href="/about-me">
          <img
            src="https://static.wixstatic.com/media/71546a_3f715f9bdae94883b91336d257fba2c5~mv2.gif"
            alt=""
          />
        </a>
      </div>
      <div className="float-child-right">
        <h1 style={{margin: "2px"}}>Hi there!</h1>
        <h1 style={{margin: "2px"}}>My name is John</h1>
        <h1 style={{margin: "2px"}}>
          and I'm a<span style={{color: "darkgreen"}}> UX & UI</span>
        </h1>
        <h1 style={{margin: "2px"}}>designer.</h1>
      </div>
      <div>
        <h4>PROJECTS</h4>
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
    </div>
  );
};

export default Home;
