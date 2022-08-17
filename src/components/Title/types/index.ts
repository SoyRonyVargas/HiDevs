import type { Colors , GenericTextProps } from '../../../../types'

type Headings = 'h1' | 'h2' | 'h3' | 'h4'

export type PropsColorsHeadings  = {
    [s in Colors]: string;
};

export type Props = GenericTextProps & {
    type: Headings
    title: string
}