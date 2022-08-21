import { CardOfferStyled , InfoImage, InfoStyled } from './styled'
import React from 'react'
import Image from 'next/image'
import Title from 'components/Title'

const CardOffer = () => {
  return (
    <CardOfferStyled>
        <InfoStyled>
            <InfoImage>
                <Image
                    src={'/logo-test.jpg'}
                    layout='fill'
                    height="100"
                    width="100"
                    alt=""
                />
            </InfoImage>
            <div>
                <Title
                    title='Frontend react developer'
                    type='h2'
                />
                
                <span> Hiplot SA de CV </span>
            </div>
        </InfoStyled>
    </CardOfferStyled>
  )
}

export default CardOffer