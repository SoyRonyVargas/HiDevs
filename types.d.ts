import { StaticImageData } from 'next'
import { AppContext } from 'next/app';

declare global {
    namespace React {
        interface FunctionComponent<P = {}> {
            getInitialProps( appContext: AppContext ): Promise<any>;
        }
    }
    namespace Hidevs {
        
    }
}

type PageProps = {
    validate: boolean
}

export type ThunkFunction = (
    ( dispatch : AppDispatch , getState: () => RootState ) => Promise<void>
)

type StaticImageNullty = string | null
type StringNullty = string | null

export type Article = {
    description: StringNullty
    image: StaticImageNullty
    bg_color: StringNullty
    title: StringNullty
    id: string
    price?: number
    list?: ArticleExtra[]
    is_marked?: boolean
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

type Base = {
    name: string
    id: string
}

// types del modelo

export type Post = {
    title: string
    description: string
    tags: string[]
    id?: string
    ubication: Base
    business: Base
}

// 

export type UserAuthResponse = {
    user:         UserBase;
    access_token: string;
}

export type UserBase = {
    id:           number;
    user:         User;
    active:       boolean;
    repository:   string;
    hackerrank:   string;
    leetcode:     string;
    cv:           null;
    cover_letter: string;
}

export type Offer = {
    
}
export type SearchOffers = {

}

export type User = {
    last_login?:        null | string | Date;
    id?:                number | string;
    password:          string;
    email:             string;
    is_superuser:      boolean;
    is_staff:          boolean;
    is_active:         boolean;
    username:          string;
    first_name:        string;
    last_name:         string;
    date_jointed?:      Date;
    website:           string;
    phone_number:      string;
    is_dev:            boolean;
    is_hiring_manager: boolean;
    groups:            any[];
    user_permissions:  any[];
}

export type UserStore = Pick<User, "id" | "email" | "first_name">

export type UserLogin = Pick<User, "username" | "password">

type FieldsStep0 = Pick<User , "email" | "first_name" | "password">
