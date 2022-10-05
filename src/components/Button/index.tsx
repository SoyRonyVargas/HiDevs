import useClassName from '../../hooks/useClassName'
import { ButtonStyled } from './styled'
import type { Props } from './types'
import useUI from 'hooks/useUI'
import Link from 'next/link'

const Button = (props: Props) => {
    
    const { title , to , color = 'white' , close_nav = false , testid = "" } = props
    
    const classNameMemoized = useClassName( props , "button " )

    const { handleCloseNav } = useUI()

    const updateProps = {
        ...props,
        color
    }

    const Component = () => (
        <ButtonStyled
            {...updateProps}
            type="submit"
            data-test-id={testid}
            className={`${classNameMemoized}`} 
        >
            {
                title
            }
        </ButtonStyled>
    )

    const handleSelect = () => {

        if( close_nav )
        {
            handleCloseNav()
        }

    }

    if( to ) return (
        <Link  href={to!}>
            <a onClick={handleSelect}>
                <Component/>
            </a>
        </Link>
    );

    return <Component/> 

}

export default Button
