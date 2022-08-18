import CardPrincing from 'components/CardPricing'
import Section from 'components/Section'
import useQuery from 'hooks/useQuery'
import Paragraph from 'components/P'
import Title from 'components/Title'
import Line from 'components/line'
import React from 'react'

const PricingView = () => {

    const { pricing } = useQuery()

    return (
        <Section spacing='is-large' className='pt-3'>
            <Title
                title={"Our Pricing"}
                aling='has-text-centered'
                size='is-large'
                type='h2'
            />

            <Paragraph
                className='mb-6 mt-6'
                aling='has-text-centered'
            >
                { pricing.description }
            </Paragraph>

            <Line 
                height='full' 
                width='small'
            />

            <section className="columns is-mbile is-centered mt-6">

                {
                    pricing.articles.map( article => (
                        <CardPrincing
                            {...article}
                            key={article.id}
                        />
                    ))
                }

            </section>

        </Section>
    )
}

export default PricingView
