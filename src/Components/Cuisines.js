import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { getAllCuisines } from '../api/cuisine'
import Nav from './Nav'
const Cuisines = () => {
    if(!localStorage.getItem('token')){
        window.location.href = '/'
    }
    const {data, isLoading, isError} = useQuery({
        queryKey: ['cuisine'],
        queryFn: getAllCuisines,
        refetchInterval: 1000,
        refetchIntervalInBackground: true        
    })
    if(isLoading){
    return <div>Loading...</div>
    }
    if(isError){
    return <div>Error</div>
    }
    
    return (
    <>
    <Nav/>
    <h2>Cuisiens</h2>
    <div>{data?.map((cuisine) => <div key={cuisine._id}>
        <div>{cuisine.name}</div>
        <div>{cuisine.image}</div>
        <div>{Array.isArray(cuisine.restaurants) ? cuisine.restaurants.map(restaurant => <div key={restaurant._id}>{restaurant.name}</div>) : cuisine.restaurants}</div>
    </div>)}</div>
    </>
    )
}
export default Cuisines