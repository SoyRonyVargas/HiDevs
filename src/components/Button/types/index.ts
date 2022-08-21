import { GenericTextProps, Sizes, TypesButton } from "../../../../types";

export type Props = GenericTextProps & {
    type_button?: TypesButton
    title?: string
    size?: Sizes
    to?: string
    close_nav?: boolean
}

