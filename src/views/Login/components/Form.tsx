import useLoginUI from 'hooks/useLoginUI'
import React, { useEffect } from 'react'
import Button from 'components/Button'
import Paragraph from 'components/P'
import Link from 'next/link'

const Form = () => {

    const { register , onSubmit , loading , errorAuth } = useLoginUI()

    return (
        <form onSubmit={onSubmit}>
          
            <div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input
                            type="email"
                            className="input is-medium is-dangexr"
                            placeholder="Your email..."
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
                        <input 
                            className="input is-medium is-dangexr" 
                            type="password" 
                            placeholder="Your password..." 
                            {
                                ...register('password', {
                                    required: true
                                })
                            }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-lock" />
                        </span>
                        <span className="icon is-small is-right">
                            {/* <i className="fas fa-exclamation-triangle" /> */}
                        </span>
                    </div>
                    {/* <p className="help is-danger">This email is invalid</p> */}
                </div>
                
                {
                    errorAuth &&
                    <div className="notification is-danger is-light mb-3">
                       {errorAuth}
                    </div>
                }
                
                <div className="field is-grouped">
                    <div className="control w-100">
                        <Button
                            type_button='primary'
                            title='Login'
                            size='is-medium'
                            className={`${ loading ? "is-loading" : ""} w-100`}
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