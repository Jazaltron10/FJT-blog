import styled from "styled-components";



export const BtnStyles = styled.div`
/* background-color: ${({theme})=> theme.colors.TransCols}; */
height: 5rem;
border-radius: 2rem;
display: flex;
justify-content: center;
align-items: center;
padding: .2rem 1rem;

button{
    margin: .5rem;
    width: 5rem;
    height: 2.5rem;
    padding: .25rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: ${({theme})=> theme.colors.limecols};
    /* margin-bottom: .5rem; */
    
    &:hover{
        background-color:black;
        color:${({theme})=> theme.colors.limecols};
        cursor: pointer;
    }
}
`