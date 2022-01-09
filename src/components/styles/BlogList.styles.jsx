import styled from "styled-components";


export const BlogListStyles = styled.div`
    >h2{
        color: black;
        text-align: left;
        @media(max-width:${({theme})=> theme.IphoneMobile}){
            padding: 1rem;
            margin-bottom: -1rem;
        }
        
    }
`