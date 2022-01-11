import styled from "styled-components";

export const NF404Styles = styled.div`
    color: ${({theme})=>theme.colors.limecols};
    
    h2{
        font-size: 20px;
        margin-bottom: 10px;
    }
    div{
        margin: 20px 0;
    }
    a{
        text-decoration: none;
        color: ${({theme})=>theme.colors.limecols};
    }
`