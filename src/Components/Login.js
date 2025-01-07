import React from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './Formik/FormikControl'

const initialValues = {
  username: '',
  email: '',
  password: '',
}
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required'),
})

const onSubmit = values => {
  console.log('Form data', values)
}



function Login() {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      {
        formik => {
          return (
            <Form>
              <FormikControl control="input" type="text" label="Username" name="username" />
              <FormikControl control="input" type="email" label="Email" name="email" />
              <FormikControl control="input" type="password" label="Password" name="password" />
              <button type="submit" disabled={!formik.isValid}>Submit</button>
            </Form>
          )}
      }
    </Formik>
  )




}

export default Login

