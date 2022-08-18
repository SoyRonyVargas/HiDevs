import { Article } from '../../../../../types'
import { motion } from 'framer-motion'
import styled from '@emotion/styled'
import Image from 'next/image'
import React from 'react'

const ImageContainerStyled = styled.div`
    filter: grayscale(1);
    opacity: .8;
    display: grid;
    place-items: center;
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
                />
            </ImageContainerStyled>
        </motion.div>
    )
}

export default ImageItem
