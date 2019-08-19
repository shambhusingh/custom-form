import React from 'react'
import {Grid, Form} from 'semantic-ui-react'

function Options({options}) {
  return (
    <Grid divided padded textAlign='center'>
      <Grid.Row>
        <Form style={{width: '100%'}}>
          {options.map((option, index) => {
            const {label, value} = option
            return (
              <Form.Checkbox
                key={`option-${index}`}
                label={label}
                checked={value}
              />
            )
          })}
        </Form>
      </Grid.Row>
    </Grid>
  )
}

export default Options
