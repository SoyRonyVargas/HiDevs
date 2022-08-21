import styled from "@emotion/styled";

export const ContainerStepStyled = styled.form`
    width: 100%;
`

export const ContainerLogo = styled.div`
    position: relative;
    margin: 0 auto;
    display: grid;
    place-items: center;
`

export const WrapperSide = styled.div`
`

export const ContainerItem = styled.article`
    justify-content: center;
    align-items: center;
    display: flex;
    transition: 1500ms;
    height: 100vh;
    width: 50%;
    &.step-start:first-child
    {
        width: 30%;
        box-shadow: 4px 5px 27px -4px rgba(0,0,0,0.7);
        -webkit-box-shadow: 4px 5px 27px -4px rgba(0,0,0,0.7);
        -moz-box-shadow: 4px 5px 27px -4px rgba(0,0,0,0.7);
    }
    &.step-start:last-child
    {
        width: 70%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 50px;
    }
    &:first-child
    {
        background-image: url('/login/background.png');
        background-position: center center;
        background-size: cover;
    }
    &:last-child
    {
        overflow: hidden;
    }
    form
    {
        width: 100%;
    }
`

