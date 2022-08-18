import { CardHomeStyled, CardImage, CardContainImage } from './styled'
import type { Article } from '../../../types'
import Title from 'components/Title'
import Paragraph from 'components/P'
import React from 'react'

const CardHome = (props: Article) => {

  const { image, title, description } = props

  return (
    <CardHomeStyled {...props}>
      <CardContainImage>
        <CardImage
          src={image!}
          objectFit='cover'
          layout='fill'
          quality={100}
        />

      </CardContainImage>
      <Title
        aling='has-text-centered'
        title={title!}
        type="h2"
        size='is-normal'
      />
      <Paragraph 
        className='mt-4'
        aling='has-text-centered'
        size='is-small'
      >
        { description }
      </Paragraph>
    </CardHomeStyled>
  )
}

export default CardHome