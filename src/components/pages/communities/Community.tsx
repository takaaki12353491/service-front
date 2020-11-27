import React from 'react'
import { useParams } from 'react-router-dom'
import { Axios, Type } from '../../../modules'
import Base from '../../templates/Base'

export const Community: React.FC = () => {
  const { id } = useParams()
  const [ community, setCommunity ] = React.useState<Type.Community>({
    ID: '', Owner: { ID: '', Name: '', Email: ''}, Name: '',
  })
  Axios.Default
    .get(`${Axios.URL.COMMUNITIES}/${id}`)
    .then((res: Axios.Response<Type.Community>) => {
      res.status === 200 && setCommunity(res.data)
    })
    .catch()
  return (
    <Base>
      <p>{community.Name}</p>
    </Base>
  )
}
export default Community