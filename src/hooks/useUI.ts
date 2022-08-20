import { selectShowNav, showNavigationResponsive , toogleNav , hideNavigationResponsive } from 'store/ui/uiSlice'
import { useDispatch , useSelector } from 'react-redux'

const useUI = () => {
  
    const dispatch = useDispatch()

    const showNav = useSelector(selectShowNav)

    const handleOpenNav = () => dispatch(showNavigationResponsive())
    
    const handleToggleNav = () => dispatch(toogleNav())

    const handleCloseNav = () => dispatch(hideNavigationResponsive())

    return {
        showNav,
        handleOpenNav,
        handleCloseNav,
        handleToggleNav,
    }

}

export default useUI
