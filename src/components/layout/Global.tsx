import NavbarMobile from 'components/Navbar/components/NavbarMobile'
import React, { FC, ReactNode } from 'react'
import { LayoutGlobalStyled } from './styled'
import Navbar from 'components/Navbar'

type Props = {
  children: ReactNode
}

const GlobalLayout: FC<Props> = ({ children }) => {
  return (
    <LayoutGlobalStyled>

      <NavbarMobile />

      <Navbar
        typed='normal'
        color='transparent'
      />

      {children}

    </LayoutGlobalStyled>
  )
}

export default GlobalLayout
