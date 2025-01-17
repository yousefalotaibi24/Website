import React from 'react'
import Nav from './Nav'
// import { useQuery  } from '@tanstack/react-query'
// import { getAllRestaurants } from '../api/restaurant'
// import { getAllDishes } from '../api/dish'
const Home = () => {
  if(!localStorage.getItem('token')){
    window.location.href = '/'
  }






  return (
    // console.log( getAllRestaurant, getAllDish.data),
    

    <div>
      <div><Nav/></div>
      <div className='card'>
        Cuisine
      </div>
      <div className='card'>
        Restraunts
      </div>
      <div className='card'>
        Dishes
      </div>
      
      
    </div>
  )
}

export default Home