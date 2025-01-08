import React from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './Formik/FormikControl'
const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  
}
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be less than 15 characters'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Required'),
})

const onSubmit = values => {
  console.log('Form data', values)
}




function Register() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    > 
    {
      formik => {
        return (
          <Form>
            <FormikControl control="input" type="text" label="Username" name="username" placeholder="Username"/>
            <FormikControl control="input" type="email" label="Email" name="email" placeholder="enter youer email" />
            <FormikControl control="input" type="password" label="Password" name="password" placeholder="Password" />
            <FormikControl control="input" type="password" label="Confirm Password" name="confirmPassword" placeholder="Confirm Password" />
            <button type="submit" disabled={!formik.isValid}>Register</button>
          </Form>
        )
      }}
    </Formik>
    
    
  )}

export default Register

