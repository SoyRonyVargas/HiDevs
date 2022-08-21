import type { TypePosition } from 'components/Navbar/types'
import { useCallback , useEffect , useState } from 'react'
import { TypesButton } from '../../types'
import { useRouter } from 'next/router'

const useNavbar = () => {

    const [ background , setBackground ] = useState<TypesButton>('primary')
    const [ position , setPosition ] = useState<TypePosition>('normal')
    const [ show , setShow ] = useState(true)
    const router = useRouter()
    
    const routes = [
        '/login',
        '/signup'
    ]
    
    const routesPosition = [
        '/jobs',
    ]

    const memoizedCheckPath = useCallback( () => {

        const path = router.pathname

        console.log(routes.includes(path));

        setShow(!routes.includes(path))
        
        const pos : TypePosition = routesPosition.includes(path) ? 'static' : 'normal'
        
        const bg : TypesButton = routesPosition.includes(path) ? 'primary' : 'transparent'

        setPosition(pos)
        
        setBackground(bg)

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.pathname])

    useEffect( () => {

        memoizedCheckPath()

    }, [ memoizedCheckPath , router.pathname ])

    return {
        show,
        position,
        background
    }

}

export default useNavbar