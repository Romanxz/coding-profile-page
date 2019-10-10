import { Theme } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import React from 'react'

const useStyle = makeStyles(theme => ({}))

export const Spacer = ({ size = 1 }) => {
  const classes = useStyle({})
  const theme = useTheme()

  return <div style={{ height: theme.spacing(size) }} />
}
