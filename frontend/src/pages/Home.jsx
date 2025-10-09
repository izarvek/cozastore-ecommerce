import React from 'react'
import Slider from '../components/Slider'
import Recomended from '../components/Recomended'
import Proudcts from '../components/Products'
import Footer from '../components/Footer';
const Home = () => {
  return (
    <div>
    <Slider/>
    <Recomended/>
    <Proudcts/>
    <Footer/>
    </div>
  )
}

export default Home;