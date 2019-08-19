import React from 'react'
import {render} from '@testing-library/react'
import Chooser from './Chooser'
import defaults from '../../../internals/defaults'

it('Choosers textfield render properly', () => {
  const {getByText} = render(<Chooser defaults={defaults} />)
  expect(getByText(/textfield/i)).toBeTruthy()
})

it('All choosers options ICONS rendered properly', () => {
  const choosersCount = Object.keys(defaults).length
  const {container} = render(<Chooser defaults={defaults} />)
  expect(container.querySelectorAll('.icon').length).toEqual(choosersCount)
})

test('All choosers options TEXT rendered properly', () => {
  const choosers = Object.values(defaults)
  const {getAllByText} = render(<Chooser defaults={defaults} />)
  choosers.forEach(chooser => {
    expect(getAllByText(chooser.type)).toBeTruthy()
  })
})
