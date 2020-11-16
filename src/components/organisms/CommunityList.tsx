import React from 'react'
import styled from 'styled-components'
import { Axios } from '../../modules/Axios'
import { Type } from '../../modules/Type'

export const CommunityList = () => {
  const [communities, setCommunities] = React.useState<Type.Community[]>([])

  React.useEffect(() => {
    Axios.Default
      .get(Axios.URL.COMMUNITIES)
      .then((res: Axios.Response<Type.Community[]>) => {
        res.status === 200 && setCommunities(res.data)
      })
      .catch()
  }, [])

  const list = []

  return (
    <Container>
    </Container>
  )
}
export default CommunityList

const Container = styled.div`
`