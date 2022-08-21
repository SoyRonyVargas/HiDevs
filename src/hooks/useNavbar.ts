import React , { useCallback , useEffect , useState } from 'react'
import { useRouter } from 'next/router'

const useNavbar = () => {

    const [ show , setShow ] = useState(true)
    const router = useRouter()
    
    const routes = [
        '/login',
        '/signup'
    ]

    const memoizedCheckPath = useCallback( () => {

        const path = router.pathname

        console.log(routes.includes(path));

        setShow(!routes.includes(path))

    }, [router.pathname])

    useEffect( () => {

        memoizedCheckPath()

    }, [ memoizedCheckPath , router.pathname ])

    return {
        show
    }
}

export default useNavbar