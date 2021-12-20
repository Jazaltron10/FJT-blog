import styled from "styled-components";

export const NavbarStyles = styled.nav`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 768px;
    /* max-width: 1024px; */
    margin: 0 auto;
    border-bottom: 1.5px solid white;
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
        a {
            margin-left: 16px;
            text-decoration: none;
            color: white;
            padding: 6px;
            background-color: ${({theme}) => theme.colors.TransCols};
            border-radius: 10px;
        }
        a:hover{
            /* color: #f1356d; */
            /* color:  hsl(192, 100%, 9%); */
            color: white;
            transform: scale(1.5);
        }
        @media(max-width: ${({theme})=> theme.IpadMobile}){
            padding: 1rem;
        }
        `
