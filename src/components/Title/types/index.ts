
type Headings = 'h1' | 'h2' | 'h3' | 'h4'

type Sizes = 'hero' | 'big'

type ColorsHeadings = 'white' | 'black' | "gray"

export type PropsSizes = {
    [s in Sizes]: string;
};

export type PropsColorsHeadings  = {
    [s in ColorsHeadings]: string;
};

export type Props = {
    type: Headings
    size: Sizes
    title: string
    color?: ColorsHeadings
    aling?: 'has-text-centered' | "has-text-left" | "has-text-right"
}