import { NavToggleStyled } from '../styled'
import useUI from 'hooks/useUI'
import React from 'react'

const NavToggle = () => {

  const { handleToggleNav } = useUI()

  return (
    <NavToggleStyled onClick={handleToggleNav}>
      <i className="fas fa-bars"></i>
    </NavToggleStyled>
  )
}

export default NavToggle
