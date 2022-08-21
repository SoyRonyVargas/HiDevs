import styled from "@emotion/styled";

export const CardOfferStyled = styled.article`
    background-color: #FFFFFF;
    padding: 1.5rem 1rem;
    width: 95%;
    border: 1px solid #CACACA;
    border-bottom: 0;
    transition: 200ms;
    &:first-child
    {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    &:last-child
    {
        border: 1px solid #CACACA;
    }
    &:hover
    {
        cursor: pointer;
        background-color: var(--color-primary);
    }
    &:hover *
    {
        color: #FFFFFF !important;
    }
`
export const InfoStyled = styled.div`
    display: grid;
    grid-template-columns: calc( 30% - 1.875rem ) calc( 70% + 1.875rem );
    div
    {
        /* background-color: red; */
    }
    h2
    {
        font-size: 1.1rem;
    }
`

export const InfoImage = styled.div`
    position: relative;
    height: 3.75rem;
    width: 3.75rem;
`