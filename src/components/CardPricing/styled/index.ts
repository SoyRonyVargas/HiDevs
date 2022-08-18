import styled from "@emotion/styled";

export const CardPriceStyled = styled.article`
    background: #FFFFFF;
    border: 2px solid #ddd;
    border-radius: 15px;
    /* max-height: 500px; */
    /* min-height: 500px; */
    max-width: 380px;
    min-width: 380px;
    margin: 0 auto;
    padding: 40px 25px;
    padding-top: 10px;
    padding-bottom: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -webkit-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
    -moz-box-shadow: 8px 10px 30px -4px rgba(0,0,0,0.10);
`

export const WrapperItemPricing = styled.div`
    display: flex;
    align-items: center;
`

export const ContainerWrapper = styled.div`
    
`
export const ContainerTop = styled.div``
export const ContainerBottom = styled.div``

export const IconStyled = styled.div`
    justify-content: center;
    border-radius: 100%;
    align-items: center;
    display: flex;
    height: 30px;
    width: 30px;
`

export const IconCheckedStyled = styled(IconStyled)`
    background-color: var(--color-green);
`

export const IconNotCheckedStyled = styled(IconStyled)`
    background-color: var(--color-red);
`