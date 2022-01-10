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
                    <SubTitle> 5 days remaining</SubTitle>
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
    border-radius: 0.4rem;
    box-shadow: ${ CardShadow }
    transition: 0.4s ease-int-out;
    cursor:pointer;
    &:hover {
        box-shadow: ${ hoverEffect }
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
    font-weight: 500;
`;

const SubTitle = styled.h5 `
    font-weight: 300;
`;

const AllProjects = styled.h5`
    text-align: end;
    color: ${themeColor}

`;


export default Projects;