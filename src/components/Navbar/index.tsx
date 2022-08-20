import { NavbarStyled , ContainerSideStyled , ContainerSideButtonsStyled } from './styled'
import useScrollPosition from 'hooks/useScrollPosition'
import ListLinks from './components/ListLinks'
import Buttons from './components/Buttons'
import Logo from './components/Logo'
import { Props } from './types'
import useUI from 'hooks/useUI'

const MAX_HEIGHT_VIEWPORT = 0

const NavBar = ( props : Props ) => {
  
  const { y } = useScrollPosition()

  const { showNav } = useUI()

  const obj = {
    ...props,
    visible: showNav
  }

  console.log(obj);

  return (
    <NavbarStyled className={ y > MAX_HEIGHT_VIEWPORT ? "navbar--shadow" : ""} {...obj}>
      <div className='container'>
        <ContainerSideStyled>
          <Logo/>
          <ListLinks  />
        </ContainerSideStyled>
        <ContainerSideButtonsStyled>
          <Buttons/>
        </ContainerSideButtonsStyled>
      </div>
    </NavbarStyled>
  )
}

export default NavBar
