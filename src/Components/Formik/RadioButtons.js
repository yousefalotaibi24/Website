import React from 'react'
import { Field,ErrorMessage } from 'formik'
import TextError from '../TextError'

function RadioButtons(props) {
    const {label,name,options,...rest} = props
  return (
    <div>
        <div className="form-control">
            <label>{label}</label>
            <Field name={name} {...rest}>
            {
                ({field}) => {
                console.log('Field',field)
                return options.map(option => {
                    return (
                    <React.Fragment key={option.key}>
                        <input
                        type='radio'
                        id={option.value}
                        {...field}
                        value={option.value}
                        checked={field.value === option.value}
                        />
                        <label htmlFor={option.value}>{option.key}</label>
                    </React.Fragment>
                    )
                })
                }
            }
            </Field>
        </div>
        <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default RadioButtons
