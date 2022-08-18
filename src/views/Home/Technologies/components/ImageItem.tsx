import { Article } from '../../../../../types'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const ImageContainerStyled = styled.div`
    filter: grayscale(1);
    place-items: center;
    position: relative;
    display: grid;
    width: 180px;
    height: 80px;
    opacity: .8;
    @media screen and (max-width: 480px){
        width: 150px;
    }
`

const ImageStyled = styled(Image)`

`

const ImageItem = (props: Article) => {

    const { image, title } = props

    return (
        <motion.div  
            className='column is-2'
            // initial={{ 
            //     opacity: 0, 
            //     scale: .5 ,
            //     y: "50px"
            // }} 
            animate={{ 
                opacity: 1, 
                scale: 1 ,
                y: 0
            }}
            transition={{
                duration: 1,
                delay: .4,
                ease: [0, 0.71, 0.2, 1.01]
            }}
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
        </motion.div>
    )
}

export default ImageItem
