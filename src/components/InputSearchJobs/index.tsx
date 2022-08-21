import { InputSearchContainer, ItemInput } from './styled'
import React from 'react'

const InputSearchJobs = () => {
  return (
    <InputSearchContainer>
      <ItemInput>
        <span className="icon">
          <i className="fas fa-briefcase"></i>
        </span>

        <input 
          type="text" 
          placeholder='Search a job for you interest...'
        />
      </ItemInput>
      <ItemInput>
      <span className="icon">
        <i className="fas fa-globe-americas"></i>
        </span>
        <select name="" id="">
          <option value="x">Country</option>
        </select>
      </ItemInput>
      <ItemInput>
      <span className="icon">
      <i className="fas fa-city"></i>
        </span>
        <select name="" id="">
          <option value="x">City</option>
        </select>
      </ItemInput>
      <ItemInput>
        <input type="text" />
      </ItemInput>
      <ItemInput>
      <span className="icon">
      <i className="fas fa-search"></i>
        </span>
      </ItemInput>
    </InputSearchContainer>
  )
}

export default InputSearchJobs