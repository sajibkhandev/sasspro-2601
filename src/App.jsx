import React from 'react'
import Navber from './layouts/Navber'
import Banner from './layouts/Banner'
import Rating from './layouts/Rating'
import Industry from './layouts/Industry'
import Product from './layouts/Product'
import Engage from './layouts/Engage'
import Pricing from './layouts/Pricing'
import Footer from './layouts/Footer'

const App = () => {
  return (
    <div>
      <Navber/>
      <Banner/>
      <Rating/>
      <Industry/>
      <Product/>
      <Engage/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App