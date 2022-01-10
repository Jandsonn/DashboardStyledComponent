import React from "react";
import styled from 'styled-components';
import Badge from './badge';
import { CardShadow, hoverEffect, themeColor } from "../utils";

function Info() {
    return (
        <InfoCard>
            
            <Card>
                <CardContent>
                    <Row>
                        <Digit>98</Digit>
                        <InfoContainer>
                            <Title>Rank</Title>
                             <SubTitle>In Top 20%</SubTitle>
                        </InfoContainer>
                    </Row>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Row>
                        <Digit>32</Digit>
                        <InfoContainer>
                            <Title>Projects</Title>
                             <SubTitle>10 this month</SubTitle>
                        </InfoContainer>
                    </Row>
                    <Row justify>
                        <Badge content="mobile app" glow />
                        <Badge content="branding " glow />

                    </Row>
                </CardContent>
            </Card>

        </InfoCard>
    );
}

const InfoCard = styled.div `
    height:95%;
    width: 14rem;
    background-color: white;
    border-radius: 0.4rem;
    padding: 1rem;
    color:white;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: ${ CardShadow }
    transition: 0.4s ease-int-out;
    &:hover {
        box-shadow: ${ hoverEffect }
    }

`;

const Card = styled.div `
    backgrounf-color: rgba(183, 194, 243, 0.3);
    border-radius: 0.4rem;
    margin-bottom: 1rem;
    cursor: pointer;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    
`;

const CardContent = styled.div `
    padding: 0.7rem 1rem 0.3rem 1rem;
`;

const Row = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 0.4rem;
    ${({ justify }) => 
        justify &&
    `
    justify-content:space-around;
    width:90%;
    
    `}
`;

const Digit = styled.div `
    background-color: #9966FF;
    padding: 0.8rem 1rem;
    font-size: 1.3rem;
    border-radius: 1rem;
`;

const InfoContainer = styled.div `
    margin-left: 0.7rem;
`;

const Title = styled.h1 `
    color: black;
`;

const SubTitle = styled.h5 `
    color:#333333;
    font-wight: normal;
`;


export default Info;