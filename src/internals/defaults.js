const defaultFormFields = {
  textfield: {
    required: true,
    hidden: true,
    type: 'textfield',
    label: 'Type something',
    helptext: 'May I help you.?',
    icon: 'text width large icon'
  },
  textarea: {
    required: true,
    hidden: true,
    type: 'textarea',
    label: 'Type something',
    helptext: 'May I help you.?',
    icon: 'commenting large icon'
  },
  dropdown: {
    options: [],
    required: true,
    hidden: true,
    type: 'dropdown',
    label: 'Type something',
    helptext: 'May I help you.?',
    icon: 'dropdown large icon',
    include_please_select: true,
    allow_adding_new_text: true,
    enable_dynamic_search: true
  },
  multiselect: {
    options: [],
    required: true,
    hidden: false,
    type: 'multiselect',
    label: 'Type something',
    helptext: 'May I help you.?',
    icon: 'content large icon'
  },
  datepicker: {
    required: true,
    type: 'datepicker',
    label: 'Choose a date',
    helptext: 'Its a date-picker',
    icon: 'calendar large icon'
  },
  timepicker: {
    required: true,
    type: 'timepicker',
    label: 'Pick a time',
    helptext: 'its a time picker',
    icon: 'time large icon'
  }
}

export default defaultFormFields
