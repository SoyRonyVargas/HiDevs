  import { ContainerStepStyled } from 'views/Signup/styled'
import useRegisterUI from 'hooks/useRegisterUI'
import React from 'react'
import Title from 'components/Title'
import { Controller } from 'react-hook-form'

const Step1 = () => {

  const { register , formState , user , onSubmit , control } = useRegisterUI()

  const { ref , name ,  } = register('first_name', {
    value: 'xxx'
  })

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
        JSON.stringify( formState.touchedFields ,null , 3 )
      }
    </pre> */}

      <div className="field">
        
        <label className="label">First Name </label>

        <div className="control">
          <input
            disabled
            type="text"
            className="input"
            value={user.first_name}
            autoComplete={'disabled'} 
            placeholder="Your name..."
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
            type="text"
            className="input"
            autoComplete={'disabled'} 
            defaultValue={user.first_name}
            placeholder="Your last name..."
            data-test-id="form-input-last-name-register"
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
            autoComplete={'disabled'} 
            type="text" 
            data-test-id="form-input-username-register"
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
        <label className="label">Description</label>
        <div className="control">
          <textarea 
            className="textarea" 
            placeholder="Textarea" 
            defaultValue={""} 
            data-test-id="form-input-description-register"
          />
        </div>
      </div>
      
      <div className="field is-grouped">
        <div className="control">
          <button 
            className="button is-link"
            data-test-id="form-input-continue-1-register"
          >Submit</button>
        </div>
        <div className="control">
          <button className="button is-link is-light">Cancel</button>
        </div>
      </div>
    </ContainerStepStyled>
  )
}

export default Step1