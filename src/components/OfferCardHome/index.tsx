import useInfoCard from './hooks/useInfoCard'
import IconCard from './components/IconCard'
import { OfferCardStyled } from './styled'
import type { Post } from '../../../types'
import Button from 'components/Button'
import Title from 'components/Title'
import Info from './components/Info'
import Paragraph from 'components/P'
import React from 'react'

const OfferCardHome = (props: Post) => {

  const { description } = props

  const {
    title
  } = useInfoCard(props)

  return (
    <div className="column is-varisable">
      <OfferCardStyled>
        
        <IconCard />
        
        <Title
          className='my-4'
          size='is-normal'
          title={title}
          type="h2"
        />

          <Info
            {...props}
          /> 

        <Paragraph className='mt-2' size='is-small'>
          {description}
        </Paragraph>

        <Button
          className='is-fullwidth mt-4'
          type_button='primary'
          title='Apply Now'
          size='is-normal'
        />

      </OfferCardStyled>
    </div>
  )
}

export default OfferCardHome
