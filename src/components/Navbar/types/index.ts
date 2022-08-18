import { TypesButton } from '../../../../types'
import { Property } from 'csstype'

export type Props = {
    // background: 'primary' | 'secondary' | 'transparent'
    typed: TypePosition
    color: TypesButton
}

export type PropsPosition = {
    [s in TypePosition]: string
}

export type NavLink = {
    title: string
    to: string
}

type TypePosition = "normal" | "static"
