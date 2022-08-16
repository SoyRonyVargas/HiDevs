import React from "react"

type Sizes = 'is-normal' | 'is-medium'
type Colors = 'white' | 'gray' | 'big'

export type Props = {
    children : React.ReactNode
    className?: string
    color: Colors
    size: Sizes
}