import { ReactChild, ReactChildren } from "react";

type Sizes = 'is-small' | 'is-normal' | 'is-medium' | 'is-large'

export type Props = {
    type: 'primary' | 'secondary' | 'transparent'
    className?: string
    title: string
    size: Sizes
    to?: string
}