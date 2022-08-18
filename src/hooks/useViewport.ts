import { useEffect, useState } from 'react'

const useViewport = () => {

    const [ dimensions , setDimension ] = useState({
        width: 0,
        height: 0
    })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const memoizedGetDimensions =  () => {

        const { innerWidth , innerHeight } = window

        setDimension({
            width: innerWidth,
            height: innerHeight
        })
        
    }

    useEffect( () => {

        if( typeof window !== 'undefined' )
        {
            
            memoizedGetDimensions()
            
            window.addEventListener('resize', memoizedGetDimensions)

        }

        return () => {

            window.removeEventListener( 'resize' , memoizedGetDimensions )

        }

    }, []) 

  return dimensions 

}

export default useViewport
