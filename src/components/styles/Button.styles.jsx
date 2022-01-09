import styled from "styled-components";

export const BtnStyles = styled.button`
    width: 5rem;
    height: 2.5rem;
    padding: .25rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({theme})=> theme.colors.limecols};
    
    &:hover{
        background-color:black;
        color:${({theme})=> theme.colors.limecols};
        cursor: pointer;
    }
`