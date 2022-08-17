import Section from 'components/Section'
import Button from 'components/Button'
import useQuery from 'hooks/useQuery'
import Title from 'components/Title'
import Paragraph from 'components/P'
import { classes } from 'classes'
import Image from 'next/image'
import React from 'react'

const GenericSectionView = () => {
  
    const { generic } = useQuery()

    return (
    <Section spacing='is-large' background={generic.background_image}>
        
        <div className="columns" style={{
                paddingTop: '5rem'
            }}
            >

                <div className="column">
                    <Image 
                        src={generic.main_image}
                        alt={generic.title!}
                        title={generic.title!}
                        // layout={'fill'}
                        placeholder="blur"
                        // width={700}
                        sizes={''}
                    />
                </div>

                <div className={`column ${classes.verticalCenterAlign}`}>
                    
                    <Title
                        title={generic.title!}
                        aling='has-text-left'
                        size='is-large'
                        color='black'
                        type='h2'
                    />

                    <Paragraph
                        color='black'
                        className='my-5'
                    >
                        {generic.description!}
                    </Paragraph>

                    <Button
                        to='/login'
                        title='Get Started'
                        size='is-large'
                        color='white'
                        type='primary'
                    />

                </div>
               
            </div>
        
    </Section>
  )
}

export default GenericSectionView
