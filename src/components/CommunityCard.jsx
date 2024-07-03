import React from 'react'

const CommunityCard = (props) => {
  return (
    <>
      <div className='border-2 w-1/4 p-6'>
        <div>
            <img src="../../public/images/OMEN_PortalWP_04.jpg" alt="image here" />
        </div>
        <div>
            <h1 className='text-xl font-bold'>{props.name} Community</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium asperiores eaque, saepe laborum quidem impedit. Tempore optio earum aliquam dolorum doloremque dignissimos odit soluta quia eaque, inventore hic natus sapiente.</p>
            <a className='bg-green-400 p-3 text-center font-bold m-auto transition-all hover:rounded-xl block w-1/2 ' href="https://discord.com/invite/bluelearn" target='_blank'>Join community</a>
        </div>
      </div>
    </>
  )
}

export default CommunityCard
