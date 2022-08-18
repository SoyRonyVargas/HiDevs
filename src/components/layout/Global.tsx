import Navbar from 'components/Navbar'
import React , { FC , ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const GlobalLayout : FC<Props> = ({ children }) => {
  return (
    <>
        <Navbar
          typed='normal'
          color='transparent'
        />
        { children } 
    </>
  )
}

export default GlobalLayout
