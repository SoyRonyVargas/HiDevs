import { TypesButton } from '../../../../types'

export type Props = {
    typed: TypePosition
    color: TypesButton
}

export type PropsPosition = {
    [s in TypePosition]: string
}

export type NavLink = {
    title: string
    icon: string
    to: string
}

export type TypePosition = "normal" | "static"
