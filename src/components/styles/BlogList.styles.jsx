import styled from "styled-components";


export const BlogListStyles = styled.div`
    >h2{
        color: #f1356d;
        text-align: left;
        @media(max-width:${({theme})=> theme.IphoneMobile}){
            padding: 1rem;
            margin-bottom: -1rem;
        }
        
    }
`