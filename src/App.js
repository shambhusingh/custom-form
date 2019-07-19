import React from 'react'
import FormBuilder from './form-builder'
import FormPreview from './form-builder/preview'
import FormControl from './form-builder/form-control'
import defaultFormFields from './internals/defaults'

export default function App() {
  return (
    <>
      <FormBuilder defaults={defaultFormFields}>
        <FormControl>
          <FormControl.Chooser></FormControl.Chooser>
          <FormControl.Properties></FormControl.Properties>
          <FormControl.Options></FormControl.Options>
        </FormControl>
        <FormPreview></FormPreview>
      </FormBuilder>
    </>
  )
}
