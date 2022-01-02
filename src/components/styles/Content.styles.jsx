import styled from "styled-components";

export const StyledContent = styled.div`
    max-width: 768px;
    /* max-width: 1024px; */
    margin: 40px auto;
    padding: 20px;
    transition: ease-in-out .35s;
    text-align: center;
    background: ${({theme})=> theme.colors.TransCols};
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
        /* background: linear-gradient(45deg, lime, green, darkgreen, black ); */
        /* cursor: pointer; */
    }
`

