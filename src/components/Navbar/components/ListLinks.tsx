import { ListNav } from '../styled'
import { NavLink } from '../types'
import ItemLink from './ItemLink'
import React from 'react'
import { v4 } from 'uuid'

const ListLinks = () => {
  
    const items : NavLink[] = [
        {
            title: "Home",
            to: "/"
        },
        {
            title: "Jobs",
            to: "/"
        },
        {
            title: "About",
            to: "/"
        },
        {
            title: "Pricing",
            to: "/"
        },
        {
            title: "Contact",
            to: "/"
        },
    ]

    return (
    <ListNav>
        {
            items.map( item => (
                <ItemLink
                    {...item}
                    key={v4()}
                />
            ))
        }
    </ListNav>
  )
}

export default ListLinks
