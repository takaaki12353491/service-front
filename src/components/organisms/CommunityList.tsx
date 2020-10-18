import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import { Container, List, ListItem, ListItemAvatar, Avatar, ListItemText } from '@material-ui/core'
import ImageIcon from '@material-ui/icons/Image'
import { Axios } from '../../modules/Axios'
import { Type } from '../../modules/Type'

const CommunityList = () => {
  const [communities, setCommunities] = React.useState<Type.Community[]>([
    { ID: '1' , Owner: {ID: '1', Name: 'name', Email: 'test@gmail.com'}, Name: 'test'},
    { ID: '2' , Owner: {ID: '1', Name: 'name', Email: 'test@gmail.com'}, Name: 'test'}
  ])

  React.useEffect(() => {
    Axios.Default
      .get(Axios.URL.COMMUNITIES)
      .then((res: Axios.Response<Type.Community[]>) => {
        res.status === 200 && setCommunities(res.data)
      })
      .catch()
  }, [])

  const list = []
  for (const community of communities) {
    list.push(
      <ListItem button>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={community.Name} secondary={community.Owner.Name} />
      </ListItem>
    )
  }

  return (
    <Container maxWidth='sm'>
      <List component='nav'>
        {list}
      </List>
    </Container>
  )
}
export default CommunityList

const useStyles = makeStyles(() =>
  createStyles({
  }),
)