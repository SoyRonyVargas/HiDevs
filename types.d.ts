import { StaticImageData } from 'next'

type StaticImageNullty = StaticImageData | null
type StringNullty = string | null

export type Article = {
    description: StringNullty
    image: StaticImageNullty
    bg_color: StringNullty
    title: StringNullty
    id: string
}

export type Section = {
    background_image: StaticImageNullty
    main_image: StaticImageNullty
    description: StringNullty
    title: StringNullty
    articles: Article[]
}

export type SectionData = {
    [ foo: string ] : Section
} 

export type Colors = 'white' | 'black' | "gray"

export type Alignment = 'has-text-centered' | "has-text-left" | "has-text-right"

export type TypesButton = 'primary' | 'secondary' | 'transparent'

export type Sizes = 'is-small' | 'is-normal' | 'is-medium' | 'is-large' | 'is-hero'

export type GenericTextProps = {
    className?: string
    aling?: Alignment
    color?: Colors
    children ?: React.ReactNode
    size? : Sizes
}

export type PropsSizes = {
    [s in Sizes]: string;
};

export type PropsColors = {
    [s in Colors]: string;
};

export type PropsTypesButton = {
    [s in TypesButton]: string
}