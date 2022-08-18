import OfferCardHome from 'components/OfferCardHome'
import type { Post } from '../../../../types'
import Section from 'components/Section'
import useQuery from 'hooks/useQuery'
import Line from 'components/line'
import Title from 'components/Title'
import { v4 as uuid } from 'uuid';
import React from 'react'

const posts : Post[] = [
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "xDesconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "xxxFrontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
    {
        business: {
            id: "0",
            name: "Platzi"
        },
        description: "Desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
        title: "Frontend Developer Junior",
        tags: [],
        ubication: {
            id: "0",
            name: "Cancún, Quintana Roo, México"
        }
    },
]

const OffersView = () => {

    const { offers } = useQuery()

    return (
        <Section background={offers.background_image} spacing='is-large'>
            
            <Title
                title={offers.title!}
                aling='has-text-centered'
                size='is-large'
                type='h2'
                // className='pb-5'
            />

            <Line
                width='small'
                height='full'
                className='my-6'
            />

            <div className='columns is-3 is-multiline is-centered columns is-varable bdklmn-columns'>
                {
                    posts.map( post => (
                        <OfferCardHome
                            {...post}
                            key={uuid()}
                        />
                    ))
                }
            </div>

        </Section>
    )
}

export default OffersView
