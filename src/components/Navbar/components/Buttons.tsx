import { ContainerSideStyled, DividerStyled } from '../styled'
import Button from 'components/Button'
import NavToggle from './NavToggle'
import Link from 'next/link'
import React from 'react'

const Buttons = () => {

    return (
        <ContainerSideStyled>

            <div className="container__buttons--mobile">
                <NavToggle/>
            </div>

            <div className="container__buttons--desktop">
                
                <Button
                    title='Create Post'
                    type='transparent'
                    size='is-normal'
                    className='border-0 mr-5'
                />

                <Link href='signup'>
                    <a className='anchors__login'>
                        Sign Up
                    </a>
                </Link>

                <DividerStyled className='mx-4' />

                <Link href='/login'>
                    <a className='anchors__login'>
                        Login
                    </a>
                </Link>
            </div>

        </ContainerSideStyled>
    )
}

export default Buttons
