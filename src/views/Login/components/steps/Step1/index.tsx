import { ContainerStepStyled } from 'views/Login/styled'
import useRegisterUI from 'hooks/useRegisterUI'
import React from 'react'
import Title from 'components/Title'

const Step1 = () => {

  const { register , formState , user , onSubmit } = useRegisterUI()

  return (
    <ContainerStepStyled onSubmit={onSubmit}>
      
      <Title
        title='Tell about yourself'
        size='is-large'       
        type='h2'
        className='mb-5'
      /> 

    {/* <pre>
      {
        JSON.stringify( user ,null , 3 )
      }
    </pre> */}

      <div className="field">
        <label className="label">First Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Your name..."
            // value={user.first_name}
            {
              ...register('phone_number', {
                value: 'user.first_name',
                // required: true,
                // shouldUnregister: true,
                // setValueAs: ( value ) => {
                //   return value
                // }
              })
            }
          />
          { 
            formState.errors.first_name
            &&
            <p> { formState.errors.first_name.message } </p>
          }
        </div>
      </div>
      
      <div className="field">
        <label className="label">Last Name</label>
        <div className="control">
          <input
            className="input"
            type="text"
            placeholder="Your last name..."
            {
              ...register('last_name', {
                  required: 'Entreaaa',
              })
            }
          />
        </div>
      </div>
      
      <div className="field">
        <label className="label">Username</label>
        <div className="control has-icons-left has-icons-right">
          
          <input 
            className="input ixs-success" 
            placeholder="Ex. Serbrylex" 
            type="text" 
            {
              ...register('username', {
                  required: 'Entreaaa',
              })
            }
          />
          <span className="icon is-small is-left">
            <i className="fas fa-user" />
          </span>
          {/* <span className="icon is-small is-right">
            <i className="fas fa-check" />
          </span> */}
        </div>
        {/* <p className="help is-success">This username is available</p> */}
      </div>

      <div className="field">
        
        <label className="label">Email</label>

        <div className="control has-icons-left has-icons-right">
          <input 
            className="input" 
            type="email" 
            placeholder="Email input" 
            disabled
            value={user.email}
          />
          <span className="icon is-small is-left">
            <i className="fas fa-envelope" />
          </span>
        </div>
      </div>
      
      <div className="field">
        <label className="label">Message</label>
        <div className="control">
          <textarea className="textarea" placeholder="Textarea" defaultValue={""} />
        </div>
      </div>
      
      <div className="field is-grouped">
        <div className="control">
          <button className="button is-link">Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </ContainerStepStyled>
  )
}

export default Step1