import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import { Button, TextField } from '@material-ui/core'

interface Props {
}

const LoginForm: React.FC<Props> = (props) => {
  const classes = useStyles()
  return(
    <Wrapper>
      <form action="http://localhost:8080/login" method="post">
        <TextField className={classes.textField} name="name" label="name" variant="outlined"/>
        <TextField className={classes.textField} name="password" label="password" type="password" variant="outlined"/>
        <Button className={classes.submitButton} type="submit" variant="contained" color="primary">Submit</Button>
      </form>
    </Wrapper>
  )
}
export default LoginForm

const Wrapper = styled.div`
  width: 300px;
  margin: 30px auto;
`;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      margin: '10px auto',
    },
    submitButton: {
      display: 'block',
      margin: '10px auto',
    },
  }),
)