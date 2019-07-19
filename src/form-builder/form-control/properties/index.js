import React from 'react'
import {Grid, Form, Input} from 'semantic-ui-react'

function Properties({properties, updateActiveFieldValue}) {
  return (
    <Grid padded columns={1} textAlign='center'>
      <Grid.Row>
        <Form style={{width: '100%'}}>
          {properties.map((property, index) => {
            const {label, value, key} = property
            return (
              <Form.Field key={`property-${index}`}>
                <label>{label}</label>
                <Input
                  defaultValue={value}
                  onChange={(e, {value}) =>
                    updateActiveFieldValue({[key]: value})
                  }
                />
              </Form.Field>
            )
          })}
        </Form>
      </Grid.Row>
    </Grid>
  )
}

export default Properties
