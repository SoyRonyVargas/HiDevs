import { GenericTextProps } from '../../types'
import { useMemo } from 'react'

const useClassName = ( props : GenericTextProps , initialValue: string = "" ) => {
  
    const {
        size,
        aling,
        className,
    } = props

    const classNameMemoized = useMemo( () => {

        let str = initialValue

        if( size ) {
            str = str.concat(`${ size } `)
        }
        
        if( aling ) {
            str = str.concat(`${ aling } `)
        }
        
        if( className ) {
            str = str.concat(`${ className } `)
        }
        
        
        return str

    } , [ size , className , aling ])
  
    return classNameMemoized

}

export default useClassName