import styled from "@emotion/styled";

export const InputSearchContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 8px;
    min-height: 4rem;
    padding: 0px 25px;
    display: grid;
    width: 100%;
    grid-template-columns: 30% repeat( 2 , 20% ) 25% 5%;
    place-items: center;
    position: relative;
    /* gap: 1rem; */
    .icon
    {
        opacity: .5;
    }
    input,
    select
    {
        font-family: 'Lato';
        outline: 0;
        border: none;
        margin-left: .5rem;
        flex-grow: 1.5;
        width: 90%;
        height: 100%;
    }
    select
    {
    }

   
`

export const ItemInput = styled.div`
    align-items: center;
    position: relative;
    padding: .5rem;
    display: flex;
    height: 100%;
    width: 100%;
    top: 0;
    input
    {
        flex-grow: 2;
        
    }
    &:last-child
    {
        justify-content: flex-end;
    }
    &::after
    {
        position: absolute;
        content: '';
        width: 1px;
        opacity: .8;
        height: 100%;
        background-color: #ddd;
        right: 0rem;
    }
    &:last-child::after
    {
        position: absolute;
        content: '';
        width: 0px;
        height: 100%;
    }
`