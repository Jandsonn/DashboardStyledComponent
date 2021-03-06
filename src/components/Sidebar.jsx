import React from "react";
import styled from "styled-components";
import Badge from "./badge";
import AvatarImage from "../assets/AvatarImage.jpeg";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaWallet } from "react-icons/fa";
import { darkThemeColor } from "../utils";
import { AiOutlinePieChart } from "react-icons/ai";

function Sidebar() {
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Jandson Anjos</Name>
        <Badge content="Project level 1"></Badge>
      </ProfileContainer>

      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <RiFileCopyLine />
            <h3>Projects</h3>
          </Link>
          <Link>
            <FaWallet />
            <h3>Invoices</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Reports</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Having Trouble?</span>
          <a href="#/">Contact us</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 100% !important;
  border-radius: 0.7rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
    
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 3.5rem;
  margin-top: 15%;
`;

const Name = styled.h1`
  color: white;
  font: 1.5rem;
  font-weight: 400;
  margin: 5.9rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
    background-color: ${darkThemeColor};
    height: 100%;
    width: 100%;
    text-align:center;
    border-radius: 0.7rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  height: 60%;
`;

const Link = styled.li`
  margin-right: 3.5rem;
  width:100%;
  margin-bottom: 3.3rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
 
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
    margin-left: 1.8rem;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  background-color: #091322;
  color: #c4c4c4;
  height: 15%;
  margin: auto auto;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
