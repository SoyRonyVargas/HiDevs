import { FieldsStep0 } from "../../../../../../types"
import useRegisterUI from "hooks/useRegisterUI"
import useAuthStore from "hooks/useAuthStore"
import Button from 'components/Button'

const Form = () => {
    
    const { formState , handleSubmit , register , unregister } = useRegisterUI()
    const { handleRegister } = useAuthStore()

    const onSubmit = ( data : FieldsStep0 ) => {

        console.log(data);
        console.log(formState.errors.first_name);
        console.log(formState.errors.email);
        console.log(formState.errors.email);

        handleRegister(data)

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className="input is-medium" 
                            type="text" 
                            required={false}
                            placeholder="Ex. James Cameron..." 
                            {
                                ...register('first_name', {
                                    required: true,
                                    shouldUnregister: false,
                                })
                            }
                            
                        />
                    </div>
                    {
                        formState.errors.first_name &&
                        <p className="help is-danger mt-3">This email is invalid</p>
                    }
                </div>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control has-icons-left has-icons-right">
                        <input 
                            type="email" 
                            className="input is-medium is-dangexr" 
                            placeholder="Ex. james@gmail.com" 
                            required={false}
                            {
                                ...register('email' , {
                                    required: true
                                })
                            }
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-envelope" />
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
                            title='Register'
                            size='is-normal'
                            className='w-100'
                        />
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Form