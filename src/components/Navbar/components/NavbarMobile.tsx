import { NavResponsiveStyled , NavResponsiveContainer, NavButtonsResponsive } from '../styled'
import React from 'react'
import useUI from 'hooks/useUI'
import ListLinks from './ListLinks'
import Button from 'components/Button'

const AuthButtons = () => (
    <NavButtonsResponsive>
      <Button
        type_button='secondary'
        className='w-100'
        size='is-medium'
        close_nav={true}
        title="Login"
        color='white'
        to='/login'
      />
      <Button
        type_button='transparent'
        className='w-100 mt-5'
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
