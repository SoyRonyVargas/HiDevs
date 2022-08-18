import { StaticImageData } from 'next'

type StaticImageNullty = StaticImageData | null
type StringNullty = string | null

export type Article = {
    description: StringNullty
    image: StaticImageNullty
    bg_color: StringNullty
    title: StringNullty
    id: string
    price?: number
    list?: ArticleExtra[]
}

export type ArticleBasic = Pick<Article, "title" | "description">

export type ArticleExtra = ArticleBasic & {
    checked: boolean
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

export type Colors = 'white' | 'black' | "gray" | "main"

export type Alignment = 'has-text-centered' | "has-text-left" | "has-text-right"

export type TypesButton = 'primary' | 'secondary' | 'transparent'

export type Sizes = 'is-small' | 'is-normal' | 'is-medium' | 'is-large' | 'is-hero' | 'is-price'

export type Weight = 'normal' | 'bold'

export type GenericTextProps = {
    className?: string
    aling?: Alignment
    color?: Colors
    children ?: React.ReactNode
    size? : Sizes
    weight? : Weight
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

export type PropsWeight = {
    [s in Weight]: string
}
