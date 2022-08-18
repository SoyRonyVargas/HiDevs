import { useEffect, useState } from 'react'
import useViewport from './useViewport'

const useResposiveImage = ( baseURL = '/home/' ) => {
  
    const [ imageUrl , setImageUrl ] = useState('')

    const dimensions = useViewport()

    const { width } = dimensions

    useEffect( () => {

        checkSizeImage()

    }, [])

    useEffect( () => {

        checkSizeImage()

    }, [width])

    const checkSizeImage = () => {

        if( width <= 1024 )
        {

            let newUrl = baseURL.concat(...[
                '/mobile.png',
            ])

            setImageUrl(newUrl)
        }
        
        if( width > 1024 )
        {

            let newUrl = baseURL.concat(...[
                '/background.png',
            ])

            setImageUrl(newUrl)
        }

    }

    return imageUrl
  
}

export default useResposiveImage
