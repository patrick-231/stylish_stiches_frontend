import React from 'react'
import Hero from '../components/Hero'
import TopRated from '../components/TopRated'
import Popular from '../components/Popular'
import Offers from '../components/Offers'
import NewCollection from '../components/NewCollection'
import NewMenFashion from '../components/NewMenFashion'

const Home = () => {
  return (
  <>
  <div>
  <Hero />
  <NewMenFashion />
  <TopRated />
  <Popular />
  <Offers />
  <NewCollection />

  </div>
  </>
  )
}

export default Home