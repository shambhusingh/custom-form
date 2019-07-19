import React from 'react'
import Datepicker from 'react-datepicker'
import Timepicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import 'react-datepicker/dist/react-datepicker.css'
import {
  Form,
  Input,
  Select,
  Dropdown,
  TextArea as Textarea,
  Label
} from 'semantic-ui-react'

export default function FieldRenderer(props) {
  const {removeFormField, children, setFieldActive} = props
  return (
    <Form>
      {React.Children.map(children, child => {
        const styles = {
          padding: '20px',
          position: 'relative',
          background: child.props.active ? '#9feae5' : 'none'
        }
        return (
          <div style={styles} onClick={() => setFieldActive(child.props.id)}>
            <i
              className={'cancel large icon'}
              onClick={() => removeFormField(child.props.id)}
              style={{position: 'absolute', right: '0px', top: '5px'}}
            />
            {React.cloneElement(child)}
          </div>
        )
      })}
    </Form>
  )
}

function TextField({label, placeholder, required, helptext}) {
  return (
    <Form.Field required={required}>
      <label>{label}</label>
      <Input placeholder={placeholder} />
      <small>{helptext}</small>
    </Form.Field>
  )
}

function TextArea({label, placeholder, required, helptext}) {
  return (
    <Form.Field required={required}>
      <label>{label}</label>
      <Textarea placeholder={placeholder} />
      <small>{helptext}</small>
    </Form.Field>
  )
}

function DropDown({
  label,
  placeholder,
  required,
  helptext,
  optionsList = [{text: 1, key: 1}]
}) {
  return (
    <Form.Field required={required}>
      <label>{label}</label>
      <Select placeholder={placeholder} options={optionsList} />
      <small>{helptext}</small>
    </Form.Field>
  )
}

function MultiSelect({label, placeholder, required, optionsList, helptext}) {
  return (
    <Form.Field required={required}>
      <label>{label}</label>
      <Dropdown
        fluid
        selection
        multiple
        placeholder={placeholder}
        options={optionsList || []}
      />
      <small>{helptext}</small>
    </Form.Field>
  )
}

function DatePicker({label, required, helptext, ...rest}) {
  return (
    <Form.Field required={required}>
      <Label>{label}</Label>
      <Datepicker {...rest} />
      <small>{helptext}</small>
    </Form.Field>
  )
}

function TimePicker({label, required, helptext, ...rest}) {
  return (
    <Form.Field required={required}>
      <Label>{label}</Label>
      <Timepicker
        {...rest}
        use12Hours
        inputReadOnly
        showSecond={false}
        style={{width: '100%'}}
      />
      <small>{helptext}</small>
    </Form.Field>
  )
}

FieldRenderer.TextArea = TextArea
FieldRenderer.DropDown = DropDown
FieldRenderer.TextField = TextField
FieldRenderer.MultiSelect = MultiSelect
FieldRenderer.DatePicker = DatePicker
FieldRenderer.TimePicker = TimePicker
