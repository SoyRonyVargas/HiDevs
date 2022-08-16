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
            type='h2'
            size='big'
        />
        <Paragraph>
          We are a platform to get any jobs for developers and project managers. Meet and greet some people and more text.
        </Paragraph>
    </Section>
  )
}

export default ChooseHomeView
