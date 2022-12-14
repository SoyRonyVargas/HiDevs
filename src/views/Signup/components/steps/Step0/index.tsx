import { WrapperSide } from 'views/Signup/styled'
import React from 'react'
import Form from './Form'
import Head from './Head'

const Step0 = () => {
    return (
        <WrapperSide>
            <Head
                title='Sign Up'
                description='Welcome back! Enter your email and password to logged in in platform.'
            />
            <Form />
        </WrapperSide>
    )
}

export default Step0