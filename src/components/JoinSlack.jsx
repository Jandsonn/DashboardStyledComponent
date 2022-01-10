import React from "react";
import { darkThemeColor, CardShadow, hoverEffect, themeColor } from "../utils";
import styled from "styled-components";
import { FaSlack } from "react-icons/fa";

function JoinSlack() {
  return (
    <JoinChannel>
      <CardContent flex={true}>
        <Slack>
          <SlackLogo>
            <FaSlack />
          </SlackLogo>
          <SlackText>
              <SlackHead>Engage with clients</SlackHead>
              <SlackFoot>Join slack channel</SlackFoot> 
          </SlackText>
        </Slack>
        <SlackJoin>Join Now</SlackJoin>
      </CardContent>
    </JoinChannel>
  );
}

const JoinChannel = styled.div `
    background-color: ${darkThemeColor}
    height: 50%;
    margin-top: 0.8rem;
    border-radius: 0.4rem;
    display: flex;
    align-items: center;
    transition: 0.4s ease-in-out;
    cursor:pointer;
    &:hover {
        box-shadow ${hoverEffect};
    }

`;
const CardContent = styled.div `
    margin: 1rem;
    width: 100%;
    display:flex;
    background-color:
    align-items: center;
    justify-content: space-between;
`;
const Slack = styled.div `
    display:flex;
`;

const SlackLogo = styled.div `
    margin-right: 0.7rem;
    display: flex;
    justify-container: center;
    align-items: center;
    svg {
        color: white;
        height: 3rem;
        width: 3rem;
    }
`;
const SlackText = styled.div `
    color:white;
`;
const SlackHead = styled.h2 `
    font-wight:500;
`;
const SlackFoot = styled.h5 `
    color:#e4e4e4;
    font-wight: normal;
`;
const SlackJoin = styled.button `
    background-color: ${themeColor};
    border:none;
    outline: none;
    padding: 1rem 2rem;
    color:white;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-wight: bold;
    cursor:pointer;

`;




export default JoinSlack;
