import { ContainerMainImage } from './styled'
import Section from 'components/Section'
import useQuery from 'hooks/useQuery'
import Paragraph from 'components/P'
import Title from 'components/Title'
import { classes } from 'classes'
import Image from 'next/image'
import React from 'react'

const NewsletterView = () => {

  const { newsletter } = useQuery()

  return (
    <Section spacing='is-large' background={newsletter.background_image}>
      <div className="columns" style={{
      }}
      >
        <div className={`column ${classes.verticalCenterAlign}`}>

          <Title
            title={newsletter.title!}
            aling='has-text-left'
            size='is-large'
            color='white'
            type='h2'
          />

          <Paragraph
            color='white'
            className='my-5'
          >
            {newsletter.description!}
          </Paragraph>

          <div className="field w-100">
            <div className="control has-icons-left is-fullwidth">
              <input className="input is-large is-fullwidth" type="email" placeholder="Email" />
              <span className="icon is-medium is-left">
                <i className="fas fa-envelope" />
              </span>

            </div>
          </div>

        </div>
        <div className="column">
          <ContainerMainImage>
            <Image
              src={newsletter.main_image!}
              alt={newsletter.title!}
              title={newsletter.title!}
              layout={'fill'}
              quality={100}
              // height={100}
              // width={100}
              sizes={''}
            />
          </ContainerMainImage>
        </div>
      </div>
    </Section>
  )
}

export default NewsletterView
