import { InputSearcherContainerStyped } from '../styled'
import InputSearchJobs from 'components/InputSearchJobs'
import React from 'react'

const InputSearchContainer = () => {
  return (
    <InputSearcherContainerStyped>
        <article className='container'> 
          <InputSearchJobs />
        </article>
    </InputSearcherContainerStyped>
  )
}

export default InputSearchContainer