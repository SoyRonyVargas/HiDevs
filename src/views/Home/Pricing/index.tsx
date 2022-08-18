import CardPrincing from 'components/CardPricing'
import Paragraph from 'components/P'
import Section from 'components/Section'
import Title from 'components/Title'
import useQuery from 'hooks/useQuery'
import React from 'react'

const PricingView = () => {

    const { pricing } = useQuery()

    return (
        <Section spacing='is-large'>
            <Title
                title={"Our Pricing"}
                aling='has-text-centered'
                size='is-large'
                type='h2'
            />

            <Paragraph
                className='my-5'
                aling='has-text-centered'
            >
                test
            </Paragraph>

            <section className="columns is-mbile is-centered">

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
