import React from "react";
import styled from "styled-components";
import {themeColor} from '../utils' 

function Badge({ content, glow = false, paid=false, late=false }){
    return (
    <Div glow = {glow} paid={paid} late={late} >
        {content}
    </Div>
    );
}

const Div = styled.div `
    padding: 0.3rem 1rem;
    border-radius: 1rem;
    font-weight: 500;
    color:white;
    background-color: ${themeColor};
    cursor:pointer;
    ${({glow}) => glow && `
        font-size: 0.8rem;
        padding: 0.2rem 0.5rem;
        font-weight:normal;
        color: #2f23d;
        background-color: rgba(109, 134, 245, 0.192)
    
    `}
`;

export default Badge;