import React from 'react'
import { Typography } from '@material-ui/core'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Form from '../organisms/Form'
import NavLinks from '../molecules/Navigation'

interface Props {
  title?: string
}

const Auth: React.FC<Props> = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.container}>
      <Typography variant="h3">{props.title}</Typography>
      <hr/>
      <Form/>
      <NavLinks/>
    </div>
  ) 
}
export default Auth

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      width: '500px',
      margin: '50px auto 0 auto',
      textAlign: 'center',
    },
  }),
)