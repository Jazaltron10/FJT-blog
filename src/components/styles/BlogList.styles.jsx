import styled from "styled-components";


export const BlogListStyles = styled.div`
    color: black;
    >h2{
        text-align: left;
        @media(max-width:${({theme})=> theme.IphoneMobile}){
            padding: 1rem;
            margin-bottom: -1rem;
        }
        
    }
`