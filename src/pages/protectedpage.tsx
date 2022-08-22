import PrivateRoute from 'components/Auth/PrivateRoute'
import { PageProps } from '../../types'
import { GetStaticProps } from 'next'
import React from 'react'
import useSession from 'hooks/auth/useSession'

const protectedpage = () => {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  // const { loading } = useSession()
  
  return (
    <div>
      <h1>Pagina protegida  </h1> 
    </div>
  )
}

export default PrivateRoute(protectedpage)