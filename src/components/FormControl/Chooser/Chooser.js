import React, {memo} from 'react'
import {Grid} from 'semantic-ui-react'

function Chooser({addNewFormField, defaults}) {
  const chooseFormField = type => addNewFormField(defaults[type])
  return (
    <Grid padded columns={4}>
      <Grid.Row color='teal' textAlign='center'>
        {Object.keys(defaults).map(key => {
          const {type, icon} = defaults[key]
          return (
            <Grid.Column
              key={type}
              style={{cursor: 'pointer', margin: '20px 0'}}
            >
              <i className={icon} onClick={() => chooseFormField(type)} />
              <p className='name'>{type}</p>
            </Grid.Column>
          )
        })}
      </Grid.Row>
    </Grid>
  )
}

export default memo(Chooser)
