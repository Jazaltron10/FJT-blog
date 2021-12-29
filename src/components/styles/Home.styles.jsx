import styled from "styled-components";

export const HomeStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2{
    color: ${({theme}) => theme.colors.limecols};;
    margin-bottom: .5rem;
    /* display: flex; */
}
button{
    margin-bottom: .5rem;
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
}
`