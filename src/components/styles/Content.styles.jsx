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
    @media(max-width: ${({theme})=> theme.SduoMobile}){
        font-weight: 600;
        font-size: 1rem;
    }
    @media(max-width: ${({theme})=> theme.IphoneMobile}){
        font-weight: 400;
        font-size: .85rem;
        padding: .2rem;
    }
    @media(max-width: ${({theme})=> theme.GfoldMobile}){
        font-weight: 400;
        font-size: .85rem;
        padding: .05rem;
        >h2{
            font-size: 1rem;
        }
    }
    `

