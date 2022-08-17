import ImageItem from './components/ImageItem'
import Section from 'components/Section'
import useQuery from 'hooks/useQuery'
import Title from 'components/Title'
import React from 'react'

const TechnologiesView = () => {

    const { tecnologies } = useQuery()

  return (
    <Section spacing='is-large' className='pb-0'>

        <Title
            title={tecnologies.title!}
            type="h2"
            aling='has-text-centered'
            size='is-large'
        />
        
        <section className='columns is-multiline is-centered mt-5'>
            {
                tecnologies.articles.map( article => (
                    <ImageItem
                        key={article.id}
                        {...article}
                    />
                ))
            }
        </section>
    
    </Section>
  )
}

export default TechnologiesView
