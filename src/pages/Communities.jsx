import React from 'react'
import CommunityCard from '../components/CommunityCard'

const Communities = () => {
  return (
    <div className='flex flex-wrap gap-3 justify-center items-center'>
      <CommunityCard name="AI" />
      <CommunityCard name="AI" />
      <CommunityCard name="WEB3" />
      <CommunityCard name="BLOCKCHAIN" />
      <CommunityCard name="FLUTTER" />
    </div>
  )
}

export default Communities
