import React from 'react'
import {storiesOf} from '@storybook/react'

import Chooser from './Chooser'
import defaults from '../../../internals/defaults'

storiesOf('Chooser', module).add('Chooser', () => (
  <Chooser defaults={defaults} />
))
