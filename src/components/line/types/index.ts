import { GenericTextProps } from "../../../../types";

export type Widths = 'full' | 'small'

export type PropsWidths = {
    [s in Widths]: string;
};


export type Props = GenericTextProps & {
    width?: Widths
    height?: Widths
}