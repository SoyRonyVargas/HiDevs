import { GenericTextProps, Sizes , StaticImageNullty } from "../../../../types";
import React from "react";

export type Props = GenericTextProps & {
    background?: StaticImageNullty
    children?: React.ReactNode
    has_container?: boolean
    spacing?: Sizes
}

