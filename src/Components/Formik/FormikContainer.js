import React from 'react'
import { Formik,Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'
function FormikContainer() {
    const dropdownOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const radioOptions = [
        { key: 'Select an option', value: '' },
        { key: 'Option 1', value: 'option1' },
        { key: 'Option 2', value: 'option2' },
        { key: 'Option 3', value: 'option3' }
    ]
    const initialValues = {
        email: '',
        description: '',
        selectOption: '',
        radioOptions: ''
    }
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email format').required('Required'),
        description: Yup.string().required('Required'),
        selectOption: Yup.string().required('Required'),
        radioOptions: Yup.string().required('Required')
    })
    const onSubmit = values => console.log('Form data', values)
    
    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnBlur={true}>
            {
                Formik => ( 
                <Form>
                    <FormikControl control='input' type='email' label='Email' name='email'  /><br/>
                    <FormikControl control='textarea' label='Description' name='description' /><br/>
                    <FormikControl control='select' label='Select a topic' name='selectOption' options={dropdownOptions} /><br/>
                    <FormikControl control='radio' label='Radio topic' name='radioOptions' options={radioOptions} /><br/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>

    )
}

export default FormikContainer
