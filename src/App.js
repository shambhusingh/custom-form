import React from 'react'
import FormBuilder from './components/FormBuilder/FormBuilder'
import FormControl from './components/FormControl'
import FormPreview from './components/Preview/Preview'
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
