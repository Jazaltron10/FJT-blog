import styled from "styled-components";

export const BdStyles = styled.div`
    color: ${({theme})=>theme.colors.limecols};
    text-align: left;

    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    div{
        margin: 20px 0;
    }
    @media(max-width:${({theme})=>theme.GfoldMobile}){
        padding: 10px;
        h2{
            font-size: 15px;
            margin-bottom: 3px;
        }
        div{
            margin: 10px 0;
        }
    }
`