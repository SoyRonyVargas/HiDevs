import { StaticImageNullty } from '../../../../types'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

export const BackgroundContainer = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
`

export const BackgroundStyled = styled(Image)`

`

const Background = ({ background }: { background: StaticImageNullty }) => {

    return (
        <BackgroundContainer>
            <BackgroundStyled
                layout='fill'
                objectFit='cover'
                src={background!}
                quality={100}
            />
        </BackgroundContainer>
    )
}

export default Background
