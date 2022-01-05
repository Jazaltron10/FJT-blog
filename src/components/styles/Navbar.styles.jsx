import styled from "styled-components";

export const NavbarStyles = styled.nav`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 768px;
    margin: 0 auto;
    border-bottom: 1.5px solid ${({theme})=>theme.colors.pinkcols};
    /* Dev Cols */
    background: ${({theme})=>theme.colors.TransCols}; 
    
    h1{
        background: ${({theme})=>theme.colors.pinkcols}; 
        border: 2px groove ${({theme})=>theme.assets.color_i};
        padding: 1rem;
        border-radius: 10px;
        text-align: center;
    }
    @media(max-width: ${({theme})=> theme.IpadMobile}){
        padding: 1rem;
        display: block;
        >h1{ 
            width: 50%;
            margin: 0 auto;
            margin-bottom: .25rem;
        }
        @media(max-width: ${({theme})=> theme.SduoMobile}){
            >h1{ 
                width: 50%;
                padding: .5rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme})=> theme.PixelMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.5rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme})=> theme.IphoneMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.5rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
        @media(max-width: ${({theme})=> theme.GfoldMobile}){
            >h1{ 
                width: 80%;
                font-size: 1.3rem;
                padding: .25rem;
                margin: 0 auto;
                margin-bottom: .1rem;
            }
        }
    }
    `




export const LinkStyles = styled.div`
        margin-left: auto;
        background-color: ${({theme}) => theme.colors.TransCols};
        border-radius: 10px;
        padding: 1rem;
        text-align: center;
        border: 2px groove ${({theme})=>theme.assets.color_a};
        
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

    /* RESPONSIVE SECTION */
    @media(max-width: ${({theme})=> theme.IpadMobile}){
        padding: 1rem;
        width: 50%;
        margin: 0 auto;
    }

    @media(max-width: ${({theme})=> theme.SduoMobile}){
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
            
        a {
            text-decoration: none;
            color:${({theme})=> theme.colors.pinkcols};
            padding: 3px;
            font-family: cursive;
        }
    }

    @media(max-width: ${({theme})=> theme.IphoneMobile}){
        width: 85%;
        margin: 0 auto;
        padding: .25rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        a {
            text-decoration: none;
            color:${({theme})=> theme.colors.pinkcols};
            padding: 1px;
            font-family: cursive;
            }
        }
        
    @media(max-width: ${({theme})=> theme.PixelMobile}){
        width: 85%;
        margin: 0 auto;
        padding: .25rem;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    
        a {
            text-decoration: none;
            color:${({theme})=> theme.colors.pinkcols};
            padding: 1px;
            font-family: cursive;
            }
        }
        `
