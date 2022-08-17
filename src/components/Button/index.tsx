import useClassName from '../../hooks/useClassName'
import { ButtonStyled } from './styled'
import type { Props } from './types'
import Link from 'next/link'

const Button = (props: Props) => {
    
    const { title , to } = props
    
    const classNameMemoized = useClassName( props , "button " )

    const Component = () => (
        <ButtonStyled className={classNameMemoized} {...props}>
            {
                title
            }
        </ButtonStyled>
    )

    if( to ) return (
        <Link href={to!}>
            <a>
                <Component/>
            </a>
        </Link>
    );

    return <Component/> 

}

export default Button
