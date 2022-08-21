import { GridResultStyled } from '../styled'
import React from 'react'
import ListResults from './ListResults'

const Results = () => {
  return (
    <GridResultStyled className='container py-5'>
        <div>
            <ListResults/>
        </div>
        <div>2</div>
    </GridResultStyled>
  )
}

export default Results