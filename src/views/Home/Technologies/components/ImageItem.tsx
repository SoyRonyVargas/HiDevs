import { Article } from '../../../../../types'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'
import Animation from 'components/Animation'

const ImageContainerStyled = styled.div`
    filter: grayscale(1);
    place-items: center;
    position: relative;
    display: grid;
    width: 180px;
    height: 80px;
    opacity: .8;
    margin: 0 auto;
    @media screen and (max-width: 480px){
        width: 100px;
    }
`

const ImageStyled = styled(Image)`

`

const ImageItem = (props: Article) => {

    const { image, title } = props

    return (
        <Animation 
            className='column is-2'
            // initial={{ 
            //     opacity: 0, 
            //     scale: .5 ,
            //     y: "50px"
            // }} 
            // animate={{ 
            //     opacity: 1, 
            //     scale: 1 ,
            //     y: 0
            // }}
            // transition={{
            //     duration: 1,
            //     delay: .4,
            //     ease: [0, 0.71, 0.2, 1.01]
            // }}
        >
            <ImageContainerStyled>
                <ImageStyled
                    src={image!}
                    alt={title!}
                    title={title!}
                    width={180}
                    height={80}
                    objectFit="contain"
                    layout='fill'
                />
            </ImageContainerStyled>
        </Animation>
    )
}

export default ImageItem
