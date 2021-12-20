import styled from "styled-components";

export const HomeStyles = styled.div`
h2{
    color: deepskyblue;
    margin-bottom: .5rem;
    /* display: flex; */
}
button{
    width: 6rem;
    height: 3rem;
    padding: 1rem;
    outline: none;
    border: none;
    border-radius: 0.5rem;
    background-color: deepskyblue;
    
    &:hover{
        background-color:black;
        color: white;
        cursor: pointer;
    }
}
`