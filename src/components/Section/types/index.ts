import React from "react";

export type Spacing = "big" 

export type Props = {
    children: React.ReactNode
    has_container: boolean
    spacing: Spacing
}

export type PropsSpacing = {
    [s in Spacing]: string;
};


