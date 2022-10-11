import React from "react";
import { ContentWrapper } from "../components/ContentWrapper";
import styled from "styled-components";

const ButtonContainer = styled.div`
  text-align: right;
  margin: 30px 0;

  @media only screen and (max-width: 768px) {
    text-align: left;
    margin-bottom: 100px;
  }
`;

const ContactMessageContainer = styled.div`
  margin: 50px 230px 200px 230px;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    margin: 0;
  }
`;

const Button = styled.button`
  font-size: 20px;
  background-color: #373b4d;
  color: white;
  width: 175px;
  height: 50px;

  @media only screen and (max-width: 768px) {
    width: 125px;
  }
`;

const NameInput = styled.input`
  display: block;
  width: 100%;
  height: 60px;
  padding-left: 20px;

  :hover {
    background-color: #f2faf9;
  }

  @media only screen and (max-width: 768px) {
    width: 90%;
    font-size: 18px;
  }
`;

const EmailInput = styled(NameInput)``;
const TextMessageInput = styled(NameInput)`
  height: 135px;
  resize: none;
`;

const Header = styled.h1`
  font-size: 35px;
  color: #767676;
  letter-spacing: 3px;

  @media only screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

const SubHeader = styled(Header)`
  font-size: 20px;
  margin-bottom: 70px;
  color: #c7c7c7;
  letter-spacing: 0;

  @media only screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const Contact = () => {
  return (
    <ContentWrapper>
      <>
        <ContactMessageContainer>
          <Header>Reach out to me for...</Header>
          <SubHeader>
            getting coffee, freelancing, or any other inquiries
          </SubHeader>
          <NameInput placeholder="Name"></NameInput>
          <EmailInput placeholder="Email" required></EmailInput>
          <TextMessageInput
            placeholder="Type your message here..."
            required
          ></TextMessageInput>
          <ButtonContainer>
            <Button>Submit</Button>
          </ButtonContainer>
        </ContactMessageContainer>
      </>
    </ContentWrapper>
  );
};

export default Contact;
