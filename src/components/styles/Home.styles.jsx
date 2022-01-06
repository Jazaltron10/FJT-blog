import styled from "styled-components";

export const HomeStyles = styled.div`
/* display: flex;
flex-direction: column;
align-items: center; */
>h2{
    color: ${({theme}) => theme.colors.limecols};
    margin-bottom: .5rem;
}
>p{
    color: ${({theme}) => theme.assets.color_c};
    margin-bottom: .5rem;
    font-weight: 900;
    font-family: cursive;
}
`
export const BlogPreview = styled.div`
    padding: 10px 16px;
    margin: 20px 0;
    border-bottom: 1px solid ${({theme})=>theme.assets.color_c};
    width: 100%;
    text-align: left;
    transition: all .3s ease;
    &:hover{
        box-shadow: 1px 3px 5px rgba(0,0,0,0.5);
        cursor: pointer;
        border-radius: 1.5rem;
    }
    >h2{
        font-size: 20px;
        color: ${({theme})=>theme.colors.pinkcols};
        margin-bottom: 8px;
    }
    >p{
        color: ${({theme}) => theme.colors.limecols};
    }

    /*RESPONSIVE SECTION*/
    @media(max-width: ${({theme})=> theme.GfoldMobile}){
        width: 90%;
        margin :auto;
        padding: 16px 2px;
    /*@media(max-width: ${({theme})=> theme.SduoMobile}){}*/
    /*@media(max-width: ${({theme})=> theme.IphoneMobile}){}*/
    }
    `