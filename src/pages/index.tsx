import TechnologiesView from 'views/Home/Technologies'
import GenericSectionView from 'views/Home/Generic'
import StatisticsView from 'views/Home/Statistics'
import ChooseHomeView from 'views/Home/Choose'
import PricingView from 'views/Home/Pricing'
import HomeHeroView from 'views/Home/Hero'
import type { NextPage } from 'next'

const Home: NextPage = ( props ) => {
  return (
    <>
     <HomeHeroView />
     <TechnologiesView/>
     <ChooseHomeView/>
     <StatisticsView/>
     <GenericSectionView/>
     <PricingView/>
    </>
  )
}

export default Home
