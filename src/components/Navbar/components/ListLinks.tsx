import { ListNav } from '../styled'
import { NavLink } from '../types'
import ItemLink from './ItemLink'
import React from 'react'
import { v4 } from 'uuid'

export type Props = {
    showIcon?: boolean
}

const ListLinks = ( { showIcon = false } : Props ) => {
  
    const items : NavLink[] = [
        {
            title: "Home",
            to: "/",
            icon: 'fa-home'
        },
        {
            title: "Jobs",
            to: "/",
            icon: 'fa-briefcase'
        },
        {
            title: "About",
            to: "/",
            icon: 'fa-info'
        },
        {
            title: "Pricing",
            to: "/",
            icon: 'fa-briefcase'
        },
        {
            title: "Contact",
            to: "/",
            icon: 'fa-briefcase'
        },
    ]

    return (
    <ListNav>
        {
            items.map( item => (
                <ItemLink
                    showIcon={showIcon}
                    {...item}
                    key={v4()}
                />
            ))
        }
    </ListNav>
  )
}

export default ListLinks
