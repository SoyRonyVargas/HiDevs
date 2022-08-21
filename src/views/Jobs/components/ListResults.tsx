import CardOffer from 'components/CardOffer'
import React from 'react'

const ListResults = () => {
  return (
    <div>
        {
            [1,2,3,4,5,6,7,8,9,10,11,12].map( post => (
                <CardOffer key={post} />
            ))
        }
    </div>
  )
}

export default ListResults