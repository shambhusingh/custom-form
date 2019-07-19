import React from 'react'
import {Grid} from 'semantic-ui-react'
import FieldRenderer from './form-fields'

const fieldComponents = {
  textarea: FieldRenderer.TextArea,
  dropdown: FieldRenderer.DropDown,
  textfield: FieldRenderer.TextField,
  datepicker: FieldRenderer.DatePicker,
  timepicker: FieldRenderer.TimePicker,
  multiselect: FieldRenderer.MultiSelect
}

export default function Preview({formFields, removeFormField, setFieldActive}) {
  return (
    <Grid.Column width='10'>
      <FieldRenderer
        removeFormField={removeFormField}
        setFieldActive={setFieldActive}
      >
        {formFields.map(field => {
          const {type, id} = field
          const Field = fieldComponents[type]
          return <Field key={id} {...field} />
        })}
      </FieldRenderer>
    </Grid.Column>
  )
}
