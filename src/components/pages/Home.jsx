import React from 'react'
import Banner from '../layouts/Banner'
import Button from '../Button'
import Trending from '../layouts/Trending'
import Collection from '../layouts/Collection'
import Testimonials from '../layouts/Testimonials'

const Home = () => {
  return (
    <>
    <Banner/>
    <Trending/>
    <Collection/>
    <Testimonials/>
    </>
  )
}

export default Home