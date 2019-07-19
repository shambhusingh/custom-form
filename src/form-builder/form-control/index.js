import React from 'react'
import {Grid} from 'semantic-ui-react'
import Chooser from './choosers'
import Options from './options'
import Properties from './properties'
import getFieldOptions from '../../internals/options'
import getFieldProperties from '../../internals/properties'

function FormControl(props) {
  const {formFields} = props
  const activeField = formFields.filter(field => field.active)[0]

  return (
    <Grid.Column width='6'>
      {React.Children.map(props.children, child =>
        React.cloneElement(child, {
          ...props,
          options: getFieldOptions(activeField),
          properties: getFieldProperties(activeField)
        })
      )}
    </Grid.Column>
  )
}

FormControl.Chooser = Chooser
FormControl.Options = Options
FormControl.Properties = Properties

export default FormControl
