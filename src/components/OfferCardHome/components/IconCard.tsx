import { IconOfferStyled } from '../styled'
import Image from 'next/image'
import React from 'react'

const IconCard = () => {
  return (
    <IconOfferStyled>
        <Image
            src={'/logo-test.jpg'}
            layout="fill"
            alt="imagen"
            className=''
        />        
    </IconOfferStyled>
  )
}

export default IconCard
