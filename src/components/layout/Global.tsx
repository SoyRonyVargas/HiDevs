import NavbarMobile from 'components/Navbar/components/NavbarMobile'
import React, { FC, ReactNode } from 'react'
import { LayoutGlobalStyled } from './styled'
import useNavbar from 'hooks/useNavbar'
import Navbar from 'components/Navbar'

type Props = {
  children: ReactNode
}

const GlobalLayout: FC<Props> = ({ children }) => {

  const { show , position , background } = useNavbar()

  return (
    <LayoutGlobalStyled>

      {
        show
        &&
        <>
        <NavbarMobile />

        <Navbar
          typed={position}
          color={background}
        />
        
        </>
      }

      {children}

    </LayoutGlobalStyled>
  )
}

export default GlobalLayout
