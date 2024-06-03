import React from 'react'
import Hero from '../components/Hero'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollection from '../components/NewCollection'
import NewMenFashion from '../components/NewMenFashion'
import TopBrand from '../components/TopBrand'

const Home = () => {
  return (
  <>
  <div>
  <Hero />
  <NewMenFashion />
  <TopRated />
  <Popular />
  <TopBrand />
  <Offers />
  <NewCollection />

  </div>
  </>
  )
}

export default Home