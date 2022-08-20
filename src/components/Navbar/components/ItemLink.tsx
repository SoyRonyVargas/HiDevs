import type { Props } from './ListLinks'
import { ListItem } from '../styled'
import { NavLink } from '../types'
import Link from 'next/link'
import React from 'react'



type NavLinkProps = NavLink & Props

const ItemLink = ( props : NavLinkProps ) => {
  
  const { title , showIcon , icon } = props

  return (
    <ListItem>
      <Link href={'/'}>
        <a>
          {
            showIcon
            &&
            <span className="icon">
              <i className={`fas ${icon}`} />
            </span>
          }
          <span className='itemlink--text'>
            {title}
          </span>
        </a>
      </Link>
    </ListItem>
  )
}

export default ItemLink
