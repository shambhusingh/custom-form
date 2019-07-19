const specificFieldProperties = {
  dropdown: props => {
    return [
      {
        key: 'predefined_values',
        label: 'Predefined values',
        value: props.predefined_values
      }
    ]
  }
}

export function getSpecificFieldProperties({type, ...rest}) {
  const func = specificFieldProperties[type] || (() => [])
  return func(rest)
}

export function getGeneralFieldProperties({label, placeholder, helptext}) {
  return [
    {label: 'Field Label', key: 'label', value: label},
    {label: 'Placeholder', key: 'placeholder', value: placeholder},
    {label: 'Help Text', key: 'helptext', value: helptext}
  ]
}

export default function getFieldProperties(props) {
  if (!props) return []
  return [
    ...getGeneralFieldProperties(props),
    ...getSpecificFieldProperties(props)
  ]
}
