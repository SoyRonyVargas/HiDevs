import NavbarMobile from 'components/Navbar/components/NavbarMobile'
import React, { FC, ReactNode } from 'react'
import { LayoutGlobalStyled } from './styled'
import useNavbar from 'hooks/useNavbar'
import Navbar from 'components/Navbar'
import useSession from 'hooks/auth/useSession'
import LoadingUser from 'components/Loading/LoaderUser'

type Props = {
  children: ReactNode
}

const GlobalLayout = ({ children } : Props ) => {

  const { show , position , background } = useNavbar()
  const { loadingUser } = useSession()

  return (
    <LayoutGlobalStyled>

      <LoadingUser className={`${!loadingUser ? "hide" : ""}`} />

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
