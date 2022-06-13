import React from "react";

const Home = () => {
  return (
    <div>
      <a href="./about-me" target="_blank">
        <img
          src="https://static.wixstatic.com/media/71546a_3f715f9bdae94883b91336d257fba2c5~mv2.gif"
          alt=""
          style={{
            width: "406px",
            height: "405px",
            object: "cover",
            position: "50% 50%",
            margin: "0 auto",
            textAlign: "left",
          }}
        />
      </a>
      <h1>Hi there!</h1>
      <h1>
        My name is John and I'm a
        <span style={{color: "darkgreen"}}> UX & UI</span> designer.
      </h1>
    </div>
  );
};

export default Home;
