import React from "react";
import styled from "styled-components"; 
import { IoStatsChart } from "react-icons/io5";
import { themeColor, hoverEffect } from "../utils";
import { CardShadow } from "../utils";

function Earnings() {
    return(
        <EarningsCard>
            <CardContent>
                <Chart> 
                  <IoStatsChart />  
                </Chart>
                <EarningsText>Earnings</EarningsText>
                <Earning>$7,890</Earning>
                <EarningsIncrease>+ 10% since last month </EarningsIncrease> 
            </CardContent>
        </EarningsCard>
    );
}

const EarningsCard = styled.div`
    height: 95%;
    width: 14rem;
    background-color:${themeColor};
    padding: 1rem;
    border-radius: 1rem;
    color: white;
    transition: 0ms.4s ease-in-out;
  
    box-shadow: ${ CardShadow }
    transition: 0.4s ease-int-out;
    &:hover {
        box-shadow: ${ hoverEffect }
    }
    {
        background-color: #89babd;
        border-radius: 5px;
        cursor: pointer;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
`;


const CardContent = styled.div`
    margin: 1rem;
`;

const Chart = styled.div`
    display: flex;
    justify-content: center;
    svg {
        height: 4rem;
        width: 4rem;
    }
`;

const EarningsText = styled.h3 `
    text-align: center;
    font-wight: normal;
    padding: 0.4rem 0; 
`;

const Earning = styled.h2`
    text-align: center;
` ;

const EarningsIncrease = styled.h5 `
    text-align:center;
    font-wight: normal;
    background-color rgba(0, 0, 0, 0.2);
    padding: 0.5rem;
    border-radius: 2rem;
`;


 

export default Earnings;
