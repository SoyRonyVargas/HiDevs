import ChooseHomeView from 'views/Home/Choose'
import HomeHeroView from 'views/Home/Hero'
import type { NextPage } from 'next'

const Home: NextPage = ( props ) => {
  return (
    <>
     <HomeHeroView />
     <ChooseHomeView/>
    </>
  )
}

export default Home
