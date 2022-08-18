import styled from "@emotion/styled";

export const OfferCardStyled = styled.article`
    max-width: 380px;
    min-width: 380px;
    background: #FFFFFF;
    border: 2px solid #ddd;
    border-radius: 10px;
    max-width: 380px;
    min-width: 380px;
    margin: 0 auto;
    padding: 30px 25px;
    @media screen and (max-width: 480px){
        max-width: 100%;
        min-width: 100%;
    }
`

export const IconOfferStyled = styled.div`
    border-radius: 8px;
    position: relative;
    height: 60px;
    width: 60px;    
    & > span
    {
        border-radius: inherit;
    }
`