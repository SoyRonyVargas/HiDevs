import { useCallback, useEffect, useState } from 'react'

const useScrollPosition = () => {
  
    const [ positions, setPositions ] = useState({
        x: 0,
        y: 0
    })

    const handleCheckMemoized = useCallback( () => {

        setPositions({
            ...positions,
            y: window.scrollY,
            x: window.scrollX
        })

    }, [positions])


    useEffect( () => {

        window.addEventListener( 'scroll', handleCheckMemoized )

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return positions

}

export default useScrollPosition
