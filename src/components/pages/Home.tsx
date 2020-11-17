import React from 'react'
import Base from '../templates/Base'
import CommunityList from '../organisms/CommunityList'

export const Home: React.FC = () => {
  return (
    <Base>
      <CommunityList/>
    </Base>
  )
}
export default Home