import { useState , useEffect } from 'react'
import { Post } from '../../../../types'

const MAX_LENGHT = 37

const useInfoCard = ( props : Post ) => {

    const [ title , setTitle ] = useState(props.title)

    useEffect( () => {

        renderTitle()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    } , [])

    const renderTitle = () => {

        if( props.title.length > MAX_LENGHT )
        {

            let cut = props.title.slice( 0 , MAX_LENGHT ).concat('...')

            setTitle(cut)

        }

    }

    return {
        title
    } 

}

export default useInfoCard
