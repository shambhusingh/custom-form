const specificFieldOptions = {
  dropdown: props => {
    return [
      {
        label: 'Include please select',
        key: 'include_please_select',
        value: props.include_please_select
      },
      {
        label: 'Allow Adding new text',
        key: 'allow_adding_new_text',
        value: props.allow_adding_new_text
      },
      {
        label: 'Enable dynamic search',
        key: 'enable_dynamic_search',
        value: props.enable_dynamic_search
      }
    ]
  }
}

export function getGeneralFieldOptions({hidden, required, readonly}) {
  return [
    {label: 'Should be hidden ?', key: 'hidden', value: hidden},
    {label: 'Should be mandatory ?', key: 'required', value: required},
    {label: 'Should be read only ?', key: 'readonly', value: readonly}
  ]
}

export function getSpecificFieldOptions({type, ...rest}) {
  const func = specificFieldOptions[type] || (() => [])
  return func(rest)
}

export default function getFieldOptions(props) {
  if (!props) return []
  return [...getGeneralFieldOptions(props), ...getSpecificFieldOptions(props)]
}
