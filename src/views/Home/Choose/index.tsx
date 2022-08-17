import CardHome from 'components/CardHome'
import Section from 'components/Section'
import Title from 'components/Title'
import Paragraph from 'components/P'
import React from 'react'


const ChooseHomeView = () => {
  return (
    <Section has_container spacing='big'>
        <Title
            aling='has-text-centered'
            title='Why choose us?'
            size='is-large'
            type='h2'
        />
        
        <Paragraph
          aling='has-text-centered'
          className='my-5'
        >
          We are a platform to get any jobs for developers and project managers. Meet and greet some people and more text.
        </Paragraph>

        <div className='columns my-3'>

          <div className='column'>
            <CardHome
                image=''
                bg_color='#FBF5FE'
                title='Developer Congruenci'
                description='Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
            />
          </div>
          
          <div className='column'>
          <CardHome
                image=''
                bg_color='#FBF5FE'
                title='Developer Congruenci'
                description='Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
            />
          </div>
          
          <div className='column'>
          <CardHome
                image=''
                bg_color='#FBF5FE'
                title='Developer Congruenci'
                description='Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.'
            />
          </div>

        </div>

    </Section>
  )
}

export default ChooseHomeView
