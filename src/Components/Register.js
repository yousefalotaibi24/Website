import React from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './Formik/FormikControl'
import { useNavigate,NavLink } from "react-router-dom";
import { useMutation } from "@tanstack/react-query"
import { register } from '../api/auth'





const initialValues = {
  name: '',
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  
}
const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be less than 15 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
})





function Register  () {

  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (formData) => register(formData),
    onSuccess: () => {
        alert("Registered")
        navigate("/login")
    },
})

  const onSubmit = (formData) => {
    mutation.mutate(formData)
    console.log(formData)
}


  return (
    <>
    <Formik
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    > 
    {
      formik => {
        return (
          <Form>
            <FormikControl control="input" type="text" label="Name" name="name" placeholder="enter youer name" />
            <FormikControl control="input" type="text" label="Username" name="username" placeholder="enter youer username" />
            <FormikControl control="input" type="email" label="Email" name="email" placeholder="enter youer email" />
            <FormikControl control="input" type="password" label="Password" name="password" placeholder="Password" />
            <FormikControl control="input" type="password" label="Confirm Password" name="confirmPassword" placeholder="Confirm Password" />
            <button type="submit" disabled={!formik.isValid}>Register</button>
          </Form>
        )
      }}
    </Formik>
    <div>
    <h1 >Register to your account</h1>
    <p > Already registered ? <br></br> <NavLink to="/login">Click Here</NavLink></p>
    </div>
    
  </>
    
  )}

export default Register

