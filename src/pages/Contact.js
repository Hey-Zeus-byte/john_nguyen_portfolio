import React from "react";
import "../css/contact.css";
import styled from "styled-components";

const Contact = () => {
  const Container = styled.div`
    // border: 2px solid red;
    position: relative;
    display: block;
  `;

  return (
    <div>
      <div className="contact-head">
        <h1 className="text-size1">Reach out to me for...</h1>
        <h4 className="text-size2">
          getting coffee, freelancing, or any other inquiries
        </h4>
        <Container>
          <input placeholder="Name"></input>
          <input placeholder="Email"></input>
          <textarea
            placeholder="Type your message here..."
            style={{resize: "none"}}
          ></textarea>
          <button>Submit</button>
        </Container>
      </div>
    </div>
  );
};

export default Contact;
