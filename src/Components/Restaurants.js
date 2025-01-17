import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllRestaurants } from '../api/restaurant'
import Nav from './Nav'

const Restaurants = () => {
    if(!localStorage.getItem('token')){
        window.location.href = '/'
    }

    const {data, isLoading, isError, error,isFetching, refetch} = useQuery({
        queryKey: ['restaurant'],
        queryFn: getAllRestaurants,
        refetchInterval: 10000,
        refetchIntervalInBackground: true,
    
    })
    
    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>{error.message}</div>
    }
    
    return (
        <div>
            <Nav/>
        <h2>Restaurants</h2>
        <div>{data?.map((restaurant) => <div key={restaurant._id}>
            <div>{restaurant.name}</div>
            <div>{restaurant.logo}</div>
            <div>{restaurant.info}</div>
            <div>{restaurant.phone}</div>
            <div>{restaurant.link}</div>
            <div>{typeof restaurant.geolocation === 'object' ? JSON.stringify(restaurant.geolocation) : restaurant.geolocation}</div>
            <div>{typeof restaurant.workingHours === 'object' ? JSON.stringify(restaurant.workingHours) : restaurant.workingHours}</div>
            {/* <div>{typeof restaurant.rfBarcode === 'object' ? JSON.stringify(restaurant.rfBarcode) : restaurant.rfBarcode}</div> */}
            <div>{typeof restaurant.owner === 'object' ? JSON.stringify(restaurant.owner) : restaurant.owner}</div>
            <div>{typeof restaurant.cuisine === 'object' ? JSON.stringify(restaurant.cuisine) : restaurant.cuisine}</div>
            <div>{Array.isArray(restaurant.dishes) ? restaurant.dishes.map(dish => <div key={dish._id}>{dish.name}</div>) : restaurant.dishes}</div>
            <div>{Array.isArray(restaurant.representatives) ? restaurant.representatives.map(rep => <div key={rep._id}>{rep.name}</div>) : restaurant.representatives}</div>
                </div>)}</div>
    </div>
    )
}

export default Restaurants
