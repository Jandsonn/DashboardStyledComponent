import React from "react";
import styled from 'styled-components';
import { CardShadow, hoverEffect, themeColor } from "../utils";
import AvatarImage1 from '../assets/AvatarImage1.jpeg';
import AvatarImage2 from '../assets/AvatarImage2.jpeg';


function Projects() {
    return(
        <YourProjects>
            <Project>
                <Avatar>
                    <img src={AvatarImage1} alt="" />
                </Avatar>
                <Detail>
                    <Title>Forms Payment</Title>
                    <SubTitle> 1 day remaining</SubTitle>
                </Detail>
            </Project>
            <Project>
                <Avatar>
                    <img src={AvatarImage2} alt="" />
                </Avatar>
                <Detail>
                    <Title>Here you will find what you are looking for :D</Title>
                    <SubTitle> 10 days  January 2022</SubTitle>
                </Detail>
            </Project>
             <AllProjects>See all projects</AllProjects>
        </YourProjects>
    );
}

const YourProjects = styled.div`
    height: 70%;
    background-color: white;
    margin: 0;
    padding: 1rem;
    border-radius: 0.7rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: ${ CardShadow }
    transition: 0.4s ease-int-out;
    &:hover {
        box-shadow: ${ hoverEffect };
    }
    @media scree and (min-width: 30px) and (max-width: 1080px){
        height: max-content;
        margin-top: 1rem;
        width: 75%;
    }
`;

const Project = styled.div`
    display:flex;
    align-items: center;
    margin-bottom: 0.3rem;
`;

const Avatar = styled.div`
    img {
        height: 4rem;
        width: 4rem;
        border-radius: 4rem;
    }
`;

const Detail = styled.div`
    margin-left: 1rem;
`;

const Title = styled.h3`
    font-weigth: 500;
    @media scree and (min-width: 30px) and (max-width: 1080px){
        font-size: 1rem;
    }
`;

const SubTitle = styled.h5 `
    font-weight: 300;
`;

const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor}

`;

export default Projects;