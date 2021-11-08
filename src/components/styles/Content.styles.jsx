import styled from "styled-components";

export const StyledContent = styled.div`
    padding: 40px 0;
    transition: ease-in .24s;
    text-align: center;
    background: black;
    color: white;
    h1{
        color: lime;
    }

    &:hover{
        background: linear-gradient(45deg, darkgreen, red, blue );
        cursor: pointer;
    }
`

