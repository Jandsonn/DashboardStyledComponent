import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import { CardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage3 from "../assets/AvatarImage3.jpeg";
import AvatarImage4 from "../assets/AvatarImage4.jpeg";

function Invoices() {
  return (
    <InvoiceContainer>
      <CardContent>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage3} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Payments made</Title>
              <SubTitle>Projects Training</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Paid" paid />
            <Price>$15.000.00</Price>
          </Container>
        </Invoice>
        <Invoice>
          <Info>
            <Avatar>
              <img src={AvatarImage4} alt="" />
            </Avatar>
            <TextContainer>
              <Title>Delayed payments</Title>
              <SubTitle>subject to charges</SubTitle>
            </TextContainer>
          </Info>
          <Container>
            <Badge content="Laid" late />
            <Price>$7.000.00</Price>
          </Container>
        </Invoice>
      </CardContent>
    </InvoiceContainer>
  );
}

const InvoiceContainer = styled.div`
    width: 35rem;
    border-radius: 0.7rem;
    margin-top: 1rem;
    background-color: white;
    height: 140%;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: ${CardShadow}
    transition: 0.4s ease-int-out;
    &:hover {
        box-shadow: ${ hoverEffect }
    }

    @media screen and (min-width: 320px) and (max-width: 1080px){
      width: 80%;
      display:flex;
      justify-content: center;
      align-items: center;
    }
`;

const CardContent = styled.div`
@media screen and (min-width: 320px) and (max-width: 1080px){
  margin: 2rem 0;
}
`;

const Invoice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 0.4rem;
    padding-top: 0.6rem;
    @media screen and (min-width: 320px) and (max-width: 1080px){
      flex-direction: column;
      gap: 1rem;
    }
`;
const Info = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    @media screen and (min-width: 320px) and (max-width: 1080px){
      flex-direction:column;
      width: 100%;
      text-align: center;
    }
`;
const Avatar = styled.div`
  img {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 3.5rem;
  }
`;
const TextContainer = styled.div`
  margin-left: 1rem;
`;

const Title = styled.h4``;
const SubTitle = styled.h5`
  font-weight:400;
`;
const Container = styled.div`
  display:flex;
  justify-content: space-around;
  width: 30%;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 1080px){
    width:100%;
    flex-direction: column;
    gap: 0.6rem;
  }
`;
const Price = styled.div``;

export default Invoices;
