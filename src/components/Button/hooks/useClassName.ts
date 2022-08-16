import { useState , useMemo } from 'react'
import type { Props } from '../types'

const useClassName = ( props : Props ) => {
  
    const {
        size,
        className
    } = props

    const classNameMemoized = useMemo( () => {

        let str = "button "

        debugger
        
        if( size ) {
            str = str.concat(`${ size } `)
        }
        
        if( className ) {
            str = str.concat(`${ className } `)
        }
        
        return str

    } , [ size , className ])
  
    return classNameMemoized

}

export default useClassName
