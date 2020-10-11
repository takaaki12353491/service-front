import React from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
import Link, { LinkProps } from '../../../atoms/link/Link'

export interface NavLinkProps {
  items?: LinkProps[]
}

export const NavLinkContext = React.createContext<NavLinkProps>({})

const NavLinks: React.FC<NavLinkProps> = (props) => {
  const classes = useStyles()
  const value = React.useContext(NavLinkContext)
  const list = []
  const items = value.items ? value.items : [] 
  for (const item of items) {
    list.push(
      <Grid key={item.text} item xs>
        <Link {...item}/>
      </Grid>
    )
  }
  return(
    <div className={classes.root}>
      <Grid container spacing={3}>
        {list}
      </Grid>
    </div>
  )
}
export default NavLinks

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);