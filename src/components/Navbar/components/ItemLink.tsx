import { ListItem } from '../styled'
import Link from 'next/link'
import React from 'react'
import { NavLink } from '../types'

const ItemLink = ( props : NavLink ) => {
  
  const { title } = props

  return (
    <ListItem>
      <Link href={'/'}>
        <a>
          {title}
        </a>
      </Link>
    </ListItem>
  )
}

export default ItemLink
