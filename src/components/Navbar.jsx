import React from "react";
import styled from "styled-components";
import { FiSearch } from "react-icons/fi";

function Navbar() {
    return (
        <NavbarContainer>
            <Text>
                Good morning, 
                <span> Jandson </span>
            </Text> 
        <InputContainer>
            <Icon>
                <FiSearch />
            </Icon>
            <Input type="text" placeholder="Search for Projects" />
            </InputContainer>
        </NavbarContainer>

    );
}

/*Alinhamento dos icones do navbar*/
const NavbarContainer = styled.nav`
    display:flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
`;

const Text = styled.h1 `
    span {
        font-weight: 500;
        color: #484258;
    } 
`; 
const InputContainer = styled.div `
    display:flex;
`; 
/*Estilo do ícone de procurar os projetos*/
const Icon = styled.div `
    height: 3rem;
    width: 3rem;
    background-color: #dce4ff;
    display:flex;
    justify-content: center;
    align-items:center;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    svg {
        color: #555555;
    } 
`;
const Input = styled.input `
    border: none;
    background-color: #dce4ff;
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    &:focus {
        border: none;
        outline: none;
    }


`;  



export default Navbar;