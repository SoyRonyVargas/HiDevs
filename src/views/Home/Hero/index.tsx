import { HeroContainer, BackgroundImage , MainImageStyled , ContainerMainImageStyled } from './styled'
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
              type_button='transparent'
              title='Get Started'
              size='is-large'
            />
          </div>
          <div className={`${ classes.column } is-flex-direction-column is-align-items-flex-start	relative`}>
            <ContainerMainImageStyled>
              <MainImageStyled
                quality={90}
                height={600}
                width={600}
                layout="fill"
                src={'/hero/main.png'}
              />
            </ContainerMainImageStyled>
          </div>
        </div>
        </Container>
    </HeroContainer>
  )
}

export default HomeHeroView
