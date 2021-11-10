import styled from "styled-components";

export const StyledContent = styled.div`
    padding: 40px 0;
    transition: ease-in .24s;
    text-align: center;
    background: black;
    color: white;
    h1{
        color: yellow;
        transition: ease-in .24s;
    }
    p{
        color: red;
        font-weight: 700;
    }
    h1:hover{
        color: white;
    }

    &:hover{
        background: linear-gradient(45deg, lime, red, blue );
        cursor: pointer;
    }
`

