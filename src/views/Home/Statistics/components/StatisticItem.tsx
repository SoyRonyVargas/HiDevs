import type { Article } from '../../../../../types'
import Paragraph from 'components/P'
import Title from 'components/Title'
import React from 'react'

const StatisticItem = (props: Article) => {
    
    const { title , description } = props

    return (
        <article className="column">
            <Title
                title={title!}
                aling='has-text-centered'
                size='is-large'
                color='white'
                type='h2'
            />
            <Paragraph
                aling='has-text-centered'
                className='mt-2'
                size='is-medium'
                color='white'
            >
                { description }
            </Paragraph>
        </article>
    )
}

export default StatisticItem
