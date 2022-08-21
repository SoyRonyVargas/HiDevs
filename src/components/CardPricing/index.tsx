import { CardPriceStyled, ContainerBottom, ContainerTop, ContainerWrapper } from './styled'
import PricingItem from './components/PricingItem'
import { Article } from '../../../types'
import Button from 'components/Button'
import Title from 'components/Title'
import Paragraph from 'components/P'
import Line from 'components/line'
import React from 'react'

const CardPrincing = (props: Article) => {

    const { title, description, price, list , is_marked } = props

    return (
        <div className='column is-4'>
            <CardPriceStyled is_marked={is_marked || false}>

                <ContainerWrapper>
                    <ContainerTop>
                        <Title
                            aling='has-text-left'
                            color={"main"}
                            title={title!}
                            size="is-price"
                            weight='bold'
                            type="h2"
                        />

                        <Paragraph className='my-2' size='is-small'>
                            {description}
                        </Paragraph>

                        <Title
                            aling='has-text-left'
                            color={"main"}
                            title={`$${price}`}
                            size="is-large"
                            weight='bold'
                            type="h2"
                        />
                    </ContainerTop>

                    <Line
                        width='full'
                        className='my-4'
                        height='small'
                    />

                    <ContainerBottom>
                        {
                            list!.map((item, index) => (
                                <PricingItem
                                    key={`item-price-${index}`}
                                    {...item}
                                />
                            ))
                        }

                        <Button
                            className='is-fullwidth'
                            type_button='primary'
                            title='Get Started'
                            size='is-normal'
                        />
                    </ContainerBottom>
                </ContainerWrapper>

            </CardPriceStyled>
        </div>
    )
}

export default CardPrincing
