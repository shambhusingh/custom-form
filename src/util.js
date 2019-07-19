const isBoolean = val => typeof val === 'boolean'

export function filterFieldOptions(field) {
  return Object.keys(field)
    .filter(key => isBoolean(field[key]))
    .reduce((object, key) => ({...object, [key]: field[key]}), {})
}

export function filterFieldProperties(field) {
  return Object.keys(field)
    .filter(key => !isBoolean(field[key]))
    .reduce((object, key) => ({...object, [key]: field[key]}), {})
}
