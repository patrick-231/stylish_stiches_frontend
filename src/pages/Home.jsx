import React from 'react'
import Hero from '../components/Hero'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollection from '../components/NewCollection'

const Home = () => {
  return (
  <>
  <div>
  <Hero />
  <TopRated />
  <Popular />
  <Offers />
  <NewCollection />

  </div>
  </>
  )
}

export default Home