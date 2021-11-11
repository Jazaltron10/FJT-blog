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
`

export const LinkStyles = styled.div`
        margin-left: auto;
    a{
        margin-left: 16px;
        text-decoration: none;
        color: white;
        padding: 6px;
        background-color: ${({theme}) => theme.colors.PrimoCols};
        border-radius: 10px;
    }
    a:hover{
        /* color: #f1356d; */
        /* color:  hsl(192, 100%, 9%); */
        color: white;
        transform: scale(1.5);
    }
`
