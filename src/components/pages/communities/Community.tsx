import React from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import { useParams } from 'react-router-dom'
import { Axios, Type } from '../../../modules'
import Base from '../../templates/Base'
import { HeaderImage, IconImage, Text, Button, CVButton } from '../../atoms'

Modal.setAppElement("#root")

export const Community: React.FC = () => {
  const { id } = useParams()
  const [ isOpen, setIsOpen ] = React.useState(false)
  const [ community, setCommunity ] = React.useState<Type.Community>({
    ID: 'community', 
    Owner: { ID: 'owner', Name: 'owner', Email: 'owner@example.com'}, 
    Name: 'community',
    Description: 'description'
  })

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  React.useEffect(() => {
    Axios.Default
    .get(`${Axios.URL.COMMUNITIES}/${id}`)
    .then((res: Axios.Response<Type.Community>) => {
      res.status === 200 && setCommunity(res.data)
    })
    .catch()
  }, [])
  return (
    <Base>
      <Modal isOpen={isOpen}>
        <Button text='close' onClick={handleCloseModal}/>
      </Modal>
      <Container>
        <HeaderImage/>
        <MiddleContainer>
          <IconImage/>
          <Text text={community.Name}/>
          <UserContainer>

          </UserContainer>
        </MiddleContainer>
        {community.Description && <Text text={community.Description}/>}
        <MembersContainer>
          <CVButton text='招待' onClick={handleOpenModal}/>
        </MembersContainer>
      </Container>
    </Base>
  )
}
export default Community

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
`

const UserContainer = styled.div`
  width: 100px;
`

const MembersContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-top: solid 1px;
  border-bottom: solid 1px;
  margin: 20px 0;
  padding: 10px;
`