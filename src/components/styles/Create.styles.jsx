import styled from "styled-components";

export const CreateStyles = styled.div`
    color: ${({theme})=> theme.colors.limecols};
    max-width: 400px;
    margin: 0 auto;
    text-align: center;

    label{
        text-align: left;
        display: block;
    }

    h2{
        font-size: 20px;
        color: ${({theme})=> theme.colors.pinkcols};
        margin-bottom: 20px;
    }
    
    input, textarea, select{
        width: 100%;
        padding: 8px 10px;
        margin: 10px 0;
        border: 1px ridge ${({theme})=> theme.colors.pinkcols};
        border-radius: 10px;
        box-sizing: border-box;
        display: block;
    }
    
    input:focus, textarea:focus, select:focus{
        outline: none;
        border: 1px ridge ${({theme})=> theme.colors.limecols};
        /* color: ${({theme})=> theme.colors.pinkcols}; */
    }

`