import React from 'react'
import Brands from '../components/Brands'
import Card from '../components/Card'
import Hero from '../sections/Hero'
import Inspiration from '../sections/Inspiration'
import MetabnbNfts from '../sections/MetabnbNfts'

const Home = () => {
  return (
    <div className='mt-10'>
      <Hero />
      <Brands />
      <Inspiration />
      <MetabnbNfts />
    </div>
  )
}

export default Home