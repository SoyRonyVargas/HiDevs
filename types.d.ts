
export type Article = {

}

export type SectionData = {
    [ foo: string ] : Article
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