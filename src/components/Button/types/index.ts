import { GenericTextProps, Sizes, TypesButton } from "../../../../types";

export type Props = GenericTextProps & {
    type: TypesButton
    title: string
    size: Sizes
    to?: string
}

