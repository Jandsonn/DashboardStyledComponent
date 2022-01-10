import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import { CardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage5 from "../assets/AvatarImage5.jpeg";

function ProjectRecommendation() {
  return (
    <RecommendProject>
      <CardContent>
        <Detail>
          <InfoContainer>
            <Avatar>
              <img src={AvatarImage5} alt="" />
            </Avatar>
            <Info>
              <InfoName>Jandson Developer</InfoName>
              <InfoUpdate>10 January 2022</InfoUpdate>
            </Info>
          </InfoContainer>
          <Badge content="Design" />
        </Detail>
        <Title>If you need a web developer, I'm at your disposal!</Title>
        <ProjectInfo>
          Working at full speed to deliver your request!
        </ProjectInfo>
        <PriceContainer>
          <Price>$3600/month, Negotiable</Price>
          <Badge content="Full Time" clean />
        </PriceContainer>
      </CardContent>
    </RecommendProject>
  );
}

/*CARD DO Recommend project */
const RecommendProject = styled.div`
    border-radius: 0.4rem;
    height: 130%;
    padding: 1rem;
    background-color: white;
    width: 27.5vw;
    box-shadow: ${CardShadow}
    transition: 0.4s ease-int-out;
    cursor:pointer;
    &:hover {
        box-shadow: ${hoverEffect}
    }
`;
const CardContent = styled.div`
    margin:0.4rem;
`;
const Detail = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
const InfoContainer = styled.div`
    display: flex;
    align-items: center;
`;
const Avatar = styled.div`
    margem: right: 1rem;
    img {
        height: 5rem;
        border-radius: 5rem;
    }
`;


const Info = styled.div``;
const InfoName = styled.h3`
    font-weight: 500;
`;
const InfoUpdate = styled.h5`
    font-weight: 300;
`;

const Title = styled.h4`
    font-weight: 500;
`;

const ProjectInfo = styled.p`
    margin:0;
    padding:0;
    font-size: 0.9rem;
    color: #3b3b3b;
    margin-bottom: 0.9rem;
`;
const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    background-color: rgba(145,166,255,0.3);
`;

const Price = styled.div``;

export default ProjectRecommendation;
