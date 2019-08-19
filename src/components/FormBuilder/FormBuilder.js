import React, {useReducer} from 'react'
import {Container, Grid} from 'semantic-ui-react'

function formFieldsReducer(state, {type, payload}) {
  const {formFields} = state
  switch (type) {
    case 'ADD_NEW': {
      const newField = {...payload, active: true, id: Math.random().toString()}
      const resetedFields = formFields.map(field =>
        field.active ? {...field, active: false} : field
      )
      return {...state, formFields: [...resetedFields, newField]}
    }
    case 'REMOVE': {
      return {
        ...state,
        formFields: formFields.filter(field => field.id !== payload)
      }
    }
    case 'SET_ACTIVE': {
      const fields = formFields.map(field => ({
        ...field,
        active: field.id === payload
      }))
      return {...state, formFields: fields}
    }
    case 'UPDATE_ACTIVE_FIELD_VALUE': {
      const fields = formFields.map(field =>
        field.active ? {...field, ...payload} : field
      )
      return {...state, formFields: fields}
    }
    default: {
      return state
    }
  }
}

export default function FormBuilder({children, defaults}) {
  const [state, dispatch] = useReducer(formFieldsReducer, {formFields: []})
  const {formFields} = state

  function addNewFormField(payload) {
    dispatch({type: 'ADD_NEW', payload})
  }

  function removeFormField(payload) {
    dispatch({type: 'REMOVE', payload})
  }

  function setFieldActive(payload) {
    dispatch({type: 'SET_ACTIVE', payload})
  }

  function updateActiveFieldValue(payload) {
    dispatch({type: 'UPDATE_ACTIVE_FIELD_VALUE', payload})
  }

  return (
    <Container>
      <Grid columns={2} padded divided>
        <Grid.Row>
          {React.Children.map(children, child =>
            React.cloneElement(child, {
              defaults,
              formFields,
              addNewFormField,
              removeFormField,
              setFieldActive,
              updateActiveFieldValue
            })
          )}
        </Grid.Row>
      </Grid>
    </Container>
  )
}
