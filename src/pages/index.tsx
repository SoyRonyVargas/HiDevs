import TechnologiesView from 'views/Home/Technologies'
import GenericSectionView from 'views/Home/Generic'
import NewsletterView from 'views/Home/Newsletter'
import StatisticsView from 'views/Home/Statistics'
import ChooseHomeView from 'views/Home/Choose'
import PricingView from 'views/Home/Pricing'
import type { GetStaticProps } from 'next'
import OffersView from 'views/Home/Offers'
import HomeHeroView from 'views/Home/Hero'
import { PageProps } from '../../types'

const Home = () => {
  return (
    <>
     <HomeHeroView />
     <TechnologiesView/>
     <ChooseHomeView/>
     <StatisticsView/>
     <GenericSectionView/>
     <PricingView/>
     <NewsletterView/>
     <OffersView/>
    </>
  )
}

export default Home
