import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import Modal from 'react-modal'
import { useParams } from 'react-router-dom'
import { Axios, Type } from '../../../modules'
import { Name } from '../../../consts'
import Base from '../../templates/Base'
import { HeaderImage, IconImage, Text, Input, CVButton } from '../../atoms'

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
  const [ users, setUsers] = React.useState<Type.User[]>([])

  React.useEffect(() => {
    Axios.Default
      .get(`${Axios.URL.COMMUNITIES}/${id}`)
      .then((res: Axios.Response<Type.Community>) => {
        res.status === 200 && setCommunity(res.data)
      })
      .catch()
  }, [])

  const handleOpenModal = () => {
    setIsOpen(true)
  }

  const handleCloseModal = () => {
    setIsOpen(false)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    Axios.Default
      .get(`${Axios.URL.SEARCH}?id=${value}`)
      .then((res: Axios.Response<Type.User[]>) => {
        res.status === 200 && setUsers(res.data)
      })
      .catch()
  }

  return (
    <Base>
      <Modal style={modalStyles} isOpen={isOpen}>
        <Close onClick={handleCloseModal}/>
        <ModalSearch onChange={handleSearch}/>
        {users.map(user => {
          return (
            <User key={user.ID}>
              {user.Name}
            </User>
          ) 
        })}
      </Modal>
      <Container>
        <HeaderImage/>
        <MiddleContainer>
          <IconImage/>
          <CommunityContainer>
            <CommunityTopContainer>
              <Text content={community.Name}/>
            </CommunityTopContainer>
            <Description content={community.Description}/>
          </CommunityContainer>
        </MiddleContainer>
        <MembersContainer>
          <CVButton text='招待' onClick={handleOpenModal}/>
        </MembersContainer>
      </Container>
    </Base>
  )
}
export default Community

const modalStyles = {
  content : {
    top: '50px',
    width: '600px',
    height: '600px',
    margin: '0 auto',
 }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
`

const MiddleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 20px 0;
  padding: 0 20px;
`

const CommunityContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 0 20px;
`

const CommunityTopContainer = styled.div`
  width: 100%;
  height: 30%;
`

const Description = styled(Text)`
  width: 100%;
  height: 70%;
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

const Close = styled(FaTimes)`
  cursor: pointer;
`

const ModalSearch = styled(Input)`
  width: 100%;
`

const User = styled.div<{
  isSelected?: boolean
}>`
  width: 100%;
  height: 30px;
  background: ${({isSelected}) => isSelected && 'gray'};
`