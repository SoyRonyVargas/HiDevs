import { useSession  } from "next-auth/react"
import useLoginUI from 'hooks/useLoginUI'
import React, { useEffect } from 'react'
import Button from 'components/Button'
import Paragraph from 'components/P'
import Link from 'next/link'

const Form = () => {

    const { data ,status } = useSession()
    const { register , onSubmit } = useLoginUI()

    return (
        <form onSubmit={onSubmit}>
            <h1> status { status } </h1>
            {/* <h1> user { data?.user. } </h1> */}
        {/* // <form> */}
            <div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            type="text"
                            className="input is-medium is-dangexr"
                            placeholder="Your username..."
                            autoComplete={'false'}
                            {
                                ...register('username', {
                                    required: true
                                })
                            }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-user" />
                        </span>
                        <span className="icon is-small is-right">

                            {/* <i className="fas fa-exclamation-triangle" /> */}
                        </span>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Password</label>
                    <div className="control has-icons-left has-icons-right">
                        <input className="input is-medium is-dangexr" type="password" placeholder="Your password..." />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                        </span>
                        <span className="icon is-small is-right">
                            {/* <i className="fas fa-exclamation-triangle" /> */}
                        </span>
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>
                <div className="field is-grouped">
                    <div className="control w-100">
                        <Button
                            type_button='primary'
                            title='Login'
                            size='is-medium'
                            className='w-100'
                        />
                    </div>
                </div>


                <Paragraph size='is-normal' className='small'>
                    Don’t have account? 
                    <strong className='ml-1'>
                        <Link href={'/signup'}>
                            <a>
                                Sign Up
                            </a>
                        </Link>
                    </strong>
                </Paragraph>
                
            </div>

        </form>
    )
}

export default Form