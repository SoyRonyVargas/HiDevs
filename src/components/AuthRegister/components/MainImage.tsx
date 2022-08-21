import { ContainerMainImage } from '../styled'
import Image from 'next/image'
import React from 'react'

const MainImage = () => {
  return (
    <ContainerMainImage>
      <Image
        src='/login/main.png'
        layout='responsive'
        height={500}
        width={500}
        alt="Login Image"
      />
    </ContainerMainImage>
  )
}

export default MainImage