import { IconCheckedStyled, WrapperItemPricing , IconNotCheckedStyled } from '../styled'
// import IconWrongCheckedIMG from '../../../assets/icons/wrong.png'
// import IconCheckedIMG from '../../../assets/icons/done.png'
import { ArticleExtra } from '../../../../types'
import Paragraph from 'components/P'
import Image from 'next/image'
import React from 'react'

const IconChecked = () => (
    <IconCheckedStyled>
        <Image
            alt='Icon checked - HiDevs'
            title='Icon checked - HiDevs'
            src={'/icons/done.png'}
            width={20}
            height={20}
        />
    </IconCheckedStyled>
)

const IconNotChecked = () => (
    <IconNotCheckedStyled>
        <Image
            alt='Icon checked - HiDevs'
            title='Icon checked - HiDevs'
            src={'/icons/wrong.png'}
            width={20}
            height={20}
        />
    </IconNotCheckedStyled>
)

const PricingItem = ( props : ArticleExtra ) => {
  
    const { title , checked } = props

    return (
    <WrapperItemPricing className='mb-3'>
        {
            checked 
            ? <IconChecked/>
            : <IconNotChecked/>
        }
        <Paragraph className='ml-3'>
            { title }
        </Paragraph>
    </WrapperItemPricing>
  )
}

export default PricingItem
