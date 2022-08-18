import { HeroContainer, BackgroundImage , MainImageStyled } from './styled'
import Container from '../../../components/Container'
import MainImage from './assets/main-image.png'
import Button from '../../../components/Button'
import BackgroundURL from './assets/back2.png'
import Title from '../../../components/Title'
import Paragraph from '../../../components/P'
import React from 'react'

const classes = {
  column: "column is-flex is-fullheight is-justify-content-center"
}

const HomeHeroView = () => {
  return (
    <HeroContainer>
        <BackgroundImage
            // width={"100%"}
            // height={"100%"}
            layout="fill"
            quality={50}
            src={BackgroundURL}
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
              src={MainImage}
            />
          </div>
        </div>
        </Container>
    </HeroContainer>
  )
}

export default HomeHeroView
