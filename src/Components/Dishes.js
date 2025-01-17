import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllDishes } from '../api/dish'
import Nav from './Nav'
const Dishes = () => {
    if(!localStorage.getItem('token')){
        window.location.href = '/'
    }
    const {data, isLoading, isError} = useQuery({
        queryKey: ['dish'],
        queryFn: getAllDishes,
        refetchInterval: 1000,
        refetchIntervalInBackground: true
        })

        if(isLoading){
            return <h1>Loading...</h1>
        }

        if(isError){
            return <h1>Error</h1>
        }

    return (
    <div>
        <Nav/>
        <h2>Dishes</h2>
        <div>{data?.map((dish) => <div key={dish._id}>
            <div>{dish.name}</div>
            <div>{dish.image}</div>
            <div>{dish.owner}</div>
            <div>{Array.isArray(dish.restaurants) ? dish.restaurants.map(restaurant => <div key={restaurant._id}>{restaurant.name}</div>) : dish.restaurants}</div>
            
            
            </div>)}</div>
    </div>
    )
}

export default Dishes
