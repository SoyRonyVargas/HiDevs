import type { Props } from './ListLinks'
import { ListItem } from '../styled'
import { NavLink } from '../types'
import useUI from 'hooks/useUI'
import Link from 'next/link'
import React from 'react'

type NavLinkProps = NavLink & Props

const ItemLink = ( props : NavLinkProps ) => {
  
  const { title , showIcon , icon , to } = props

  const { handleCloseNav } = useUI()

  return (
    <ListItem>
      <Link href={to}>
        <a onClick={handleCloseNav}>
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
