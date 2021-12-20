import styled from "styled-components";

export const NavbarStyles = styled.nav`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 768px;
    /* max-width: 1024px; */
    margin: 0 auto;
    border-bottom: 1.5px solid ${({theme})=>theme.colors.pinkcols};
    text-align: center;

    h1{
        font-family: cursive;
    }
    @media(max-width: ${({theme})=> theme.IpadMobile}){
        padding: 1rem;
        display: block;
    }
    `

export const LinkStyles = styled.div`
        margin-left: auto;
        background-color: ${({theme}) => theme.colors.TransCols};
        border-radius: 10px;
        padding: 1rem;
        a {
            margin-left: 16px;
            text-decoration: none;
            color:${({theme})=> theme.colors.pinkcols};
            padding: 6px;
            font-family: cursive;
        }
        a:hover{
            color:${({theme})=> theme.colors.limecols};
            transform: scale(1.5);
        }
        @media(max-width: ${({theme})=> theme.IpadMobile}){
            padding: 1rem;
        }
        `
