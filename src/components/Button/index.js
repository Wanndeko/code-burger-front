import React from 'react'

import PropTypes from 'prop-types'

import { CompButton } from './styles'

export function Button({ children, ...props }) {
  return <CompButton {...props}> {children} </CompButton>
}

// validação dos props com a biblioteca prop-types
Button.propTypes = {
  children: PropTypes.string
}
