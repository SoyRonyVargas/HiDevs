import StatisticItem from './components/StatisticItem'
import Section from 'components/Section'
import useQuery from 'hooks/useQuery'
import Title from 'components/Title'
import Paragraph from 'components/P'
import { classes } from 'classes'
import Image from 'next/image'
import React from 'react'

const StatisticsView = () => {

    const { statistics } = useQuery()
    
    return (
        <Section className='pt-0' background={statistics.background_image} spacing='is-large'>
            
            <div className="columns" style={{
                paddingTop: '5rem'
            }}
            >
                <div className={`column ${classes.verticalCenterAlign}`}>
                    
                    <Title
                        title={statistics.title!}
                        aling='has-text-left'
                        size='is-large'
                        color='white'
                        type='h2'
                    />

                    <Paragraph
                        color='white'
                        className='my-5'
                    >
                        {statistics.description!}
                    </Paragraph>

                    <div className="columns w-100">

                        {
                            statistics.articles.map( (article , index) => (
                                <StatisticItem
                                    key={`statistic-article-${index}`}
                                    {...article}
                                />
                            ))
                        }
                        
                    </div>

                </div>
                <div className="column">
                    <Image 
                        src={statistics.main_image!}
                        alt={statistics.title!}
                        title={statistics.title!}
                        layout={'responsive'}
                        // placeholder="blur"
                        quality={100}
                        height={700}
                        width={700}
                        sizes={''}
                    />
                </div>
            </div>
        </Section>
    )

}

export default StatisticsView