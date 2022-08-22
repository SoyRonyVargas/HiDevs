import { FieldsStep0 } from "../../../../../../types"
import useRegisterUI from "hooks/useRegisterUI"
import useAuthStore from "hooks/useAuthStore"
import Button from 'components/Button'
import { useDispatch } from "react-redux"
import { updateUserRegister } from "store/auth/authSlice"

const Form = () => {
    
    const { formState , user, handleSubmit , register } = useRegisterUI()
    const { handleRegister , loading } = useAuthStore()
    const dispatch = useDispatch()

    const onSubmit = ( data : FieldsStep0 ) => {

        dispatch(updateUserRegister({
            ...user,
            ...data
        }))
        console.log(data);
        console.log(formState.errors.first_name);
        console.log(formState.errors.email);
        console.log(formState.errors.email);

        handleRegister(data)

    }

    register("first_name", { value: "data" })

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input 
                            className="input is-medium" 
                            type="text" 
                            placeholder="Ex. James Cameron..."
                            autoComplete={'disabled'}
                            {
                                ...register('first_name' , {
                                    required: true
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
                            autoComplete={'false'} 
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
                            className={`'w-100'${ loading ? "is-loading" : ""}`}
                        />
                    </div>
                </div>
            </div>

        </form>
    )
}

export default Form