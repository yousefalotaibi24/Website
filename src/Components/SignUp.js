import React from 'react'
import { Formik,Form,Field,FastField,ErrorMessage,FieldArray, } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
  
}
const onSubmit = values => {
  console.log('Form data', values)
}
const validationSchema = Yup.object({
  username: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email format').required('Required'),
  password: Yup.string().required('Required')
  .min(8, 'Password must be at least 8 characters')
  .max(15, 'Password must be less than 15 characters'),

  confirmPassword: Yup.string().required('Required'),
})





function SignUp() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>

        <div className="form-control">
        <label htmlFor="username">Username</label>
        <Field id="username" name="username" type="text" />
        <ErrorMessage name="username" component={TextError} />
        </div><br/>

        <div className="form-control">
        <label htmlFor="email">Email</label>
        <Field id="email" name="email" type="email" />
        <ErrorMessage name="email" component={TextError} />
        </div><br/>

        <div className="form-control">
        <label htmlFor="password">Password</label>
        <Field id="password" name="password" type="password" />
        <ErrorMessage name="password" component={TextError} />
        </div><br/>

        <div className="form-control">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <Field id="confirmPassword" name="confirmPassword" type="password" />
        <ErrorMessage name="confirmPassword" component={TextError} />
        </div><br/>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
      
    
  )
}

export default SignUp
