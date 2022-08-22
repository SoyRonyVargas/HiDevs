import PrivateRoute from 'components/Auth/PrivateRoute'
import JobsView from 'views/Jobs'
import React from 'react'

const JobsPage = () => {
  return (
    <JobsView/>
  )
}

export default PrivateRoute(JobsPage)