import { NavResponsiveStyled , NavResponsiveContainer, NavButtonsResponsive } from '../styled'
import React from 'react'
import useUI from 'hooks/useUI'
import ListLinks from './ListLinks'
import Button from 'components/Button'

const AuthButtons = () => (
    <NavButtonsResponsive>
      <Button
        className='w-100'
        type='secondary'
        size='is-medium'
        close_nav={true}
        title="Login"
        color='white'
        to='/login'
      />
      <Button
        className='w-100 mt-5'
        type='transparent'
        title="Sign Up"
        size='is-medium'
        to='/signup'
      />
    </NavButtonsResponsive>
)

const NavbarMobile = () => {

  const { showNav } = useUI()

  return (
    <NavResponsiveStyled visible={showNav}>
      <NavResponsiveContainer className="container">
        <ListLinks showIcon={true} />
        <AuthButtons/>
      </NavResponsiveContainer>
    </NavResponsiveStyled>
  )
}

export default NavbarMobile
