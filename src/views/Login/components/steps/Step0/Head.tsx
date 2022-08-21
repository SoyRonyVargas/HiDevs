import { ContainerLogo } from '../../../styled'
import Title from 'components/Title'
import Paragraph from 'components/P'
import Image from 'next/image'
import React from 'react'

type PropsHead = {
    title: string
    description: string
}

const Head = ( { description , title } : PropsHead ) => {
  return (
    <div className='mb-5'>
        <ContainerLogo>
            <Image
                alt=""
                layout='intrinsic'
                width={70}
                height={45}
                src='/logo-secondary.png'
                objectFit='contain'
                quality={100}
            />
        </ContainerLogo>
        <Title
            className='my-5'
            aling='has-text-centered'
            title={title}
            size="is-medium"
            type='h2'
        />
        <Paragraph
            aling='has-text-centered'
            size='is-small'
        > 
            {description}
        </Paragraph>
    </div>
  )
}

export default Head