import React from 'react'
import Nav from './Nav'
import '../css/Profile.css'
import { logout } from '../api/auth'
import { useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './Formik/FormikControl'
import { createRestaurant } from '../api/restaurant'
import { createDish } from '../api/dish'
import { useMutation } from '@tanstack/react-query'


const Profile = () => {
  
  if(!localStorage.getItem("token")){
    window.location.href = "/";
  }
  const dropdownOptions = [
    { key: 'Select cuisine', value: '' },
    { key: ' Kuwaiti ', value: 'option1' },
    { key: 'Asia', value: 'option2' },
    { key: 'Indian', value: 'option3' },
    { key: 'Japan', value: 'option4' },
    { key: 'American', value: 'option5' },
  ]
  const initialValues = {
    Restaurant: '',
    Dish: '',
    cuisine: '',
    selectOption: '',

  }
  const [Restaurant, setRestaurant] = useState('');
  const [Dish, setDish] = useState('');

  const mutation = useMutation({
    mutationFn: (formData) => [createRestaurant(formData),createDish(formData)],
    onSuccess: () => {
        alert("Restaurant Created")
        // navigate("/home")
    },
    // onError: () => setInvalidPass(true)
})
onsubmit = (fromData) => {
  console.log("Form data", fromData)
  mutation.mutate(fromData)}
  return (
    <div>
        <Nav/>
        
        <h1 style={{textAlign:"center"}}>Profile</h1>
        <div className='profile'>
        <div className='profile-image'>
          <h2>image</h2>
        </div>
        <Formik initialValues={initialValues} onSubmit={onsubmit}>
        {
            formik => (
                
                    <Form>
                        <FormikControl control="input" type="text" label="Restaurant" name="Restaurant" placeholder="enter youer Restaurant" />
                        <FormikControl control="input" type="text" label="Dish" name="Dish" placeholder="enter youer Dish" />
                        <FormikControl control="input" type="text" label="description" name="description" placeholder="enter youer description" />
                        <FormikControl control="select" label="cuisine" name="selectOption" options={dropdownOptions} />
                        <button type="submit">Submit</button>
                    </Form>
                  )}
        </Formik>
        {/* <button onClick={logout}>Logout</button> */}
        </div>
        
    </div>
  )
}

export default Profile