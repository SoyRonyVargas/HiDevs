import CardHome from 'components/CardHome'
import Section from 'components/Section'
import Title from 'components/Title'
import Paragraph from 'components/P'
import React from 'react'
import useQuery from 'hooks/useQuery'


const ChooseHomeView = () => {

  const { chooseSection } = useQuery()

  return (
    <Section has_container spacing='is-large' className='pt-5'>
      
      <Title
        title={chooseSection.title!}
        aling='has-text-centered'
        size='is-large'
        type='h2'
      />

      <Paragraph
        aling='has-text-centered'
        className='mt-5 pb-4'
      >
        {chooseSection.description}
      </Paragraph>

      <div className='mt-5'>
        <div className='columns my-3'>

          {
            chooseSection.articles.map(article => (
              <div key={article.id} className='column'>
                <CardHome
                  {...article}
                />
              </div>
            ))
          }

        </div>
      </div>

    </Section>
  )
}

export default ChooseHomeView
