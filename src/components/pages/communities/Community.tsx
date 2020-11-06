import React from 'react'
import { useParams } from 'react-router-dom'
import { Axios } from '../../../modules/Axios'
import { Type } from '../../../modules/Type'

const Community = () => {
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
    <div>
      <p>{community.Name}</p>
    </div>
  )
}
export default Community