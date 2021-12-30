import styled from "styled-components";

export const HomeStyles = styled.div`
display: flex;
flex-direction: column;
align-items: center;
h2{
    color: ${({theme}) => theme.colors.limecols};
    margin-bottom: .5rem;
}
p{
    color: ${({theme}) => theme.assets.color_c};
    margin-bottom: .5rem;
    font-weight: 900;
    font-family: cursive;
}
`
