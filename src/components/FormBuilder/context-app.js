import React, {createContext, useReducer, useContext} from 'react'

export const actions = {
  addNewFormField: (d, payload) => d({type: 'ADD_NEW', payload}),
  removeFormField: (d, payload) => d({type: 'REMOVE', payload}),
  setFieldActive: (d, payload) => d({type: 'SET_ACTIVE', payload}),
  updateActiveFieldValue: (dispatch, payload) =>
    dispatch({type: 'UPDATE_ACTIVE_FIELD_VALUE', payload})
}

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

const FormPreviewContext = createContext()

export function FormPreviewProvider({children}) {
  return (
    <FormPreviewContext.Provider
      value={useReducer(formFieldsReducer, {formFields: []})}
    >
      {children}
    </FormPreviewContext.Provider>
  )
}

export function useFormPreview() {
  console.log('fdfd')
  return useContext(FormPreviewContext)
}
