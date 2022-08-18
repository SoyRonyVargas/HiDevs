import { HeroContainer, BackgroundImage , MainImageStyled } from './styled'
import Container from '../../../components/Container'
import useResposiveImage from 'hooks/useResposiveBackground'
import Button from '../../../components/Button'
import Title from '../../../components/Title'
import Paragraph from '../../../components/P'
import React from 'react'

const classes = {
  column: "column is-flex is-fullheight is-justify-content-center"
}

const HomeHeroView = () => {

  const background = useResposiveImage('/hero')

  console.log(background);
  

  return (
    <HeroContainer>

        
        <BackgroundImage
            layout="fill"
            quality={100}
            src={background}
            priority
            
        />
        <Container extraClassName='container__relative'>
        <div className="columns is-fullheight">
          <div className={`${ classes.column } is-flex-direction-column is-align-items-flex-start	`}>
            <Title 
              title="Lets find Dream Job easy and fast"
              size="is-hero"
              color='white'
              type='h2'
            />
            <Paragraph className='my-5' color="white" size='is-medium' >
              We are a platform to get any jobs for developers and project managers. Meet and greet some people and more text.
            </Paragraph>
            <Button
              title='Get Started'
              type='transparent'
              size='is-large'
            />
          </div>
          <div className={`${ classes.column } is-flex-direction-column is-align-items-flex-start	`}>
            <MainImageStyled
              height={600}
              width={600}
              src={'/hero/main.png'}
            />
          </div>
        </div>
        </Container>
    </HeroContainer>
  )
}

export default HomeHeroView
