import React from 'react'
import Avatar from '../assets/images/Avatar.png'
import { InstagramOutlined , TwitterOutlined } from '@ant-design/icons'

const CreatorCard = () => {
    return (
        <div className='bg-[#1E1E1E] w-[358px] h-[88px] rounded-lg flex gap-x-8 p-4'>
            <img className='h-12' src={Avatar} alt='...' />
            <div className=''>
                <h1 className='text-[#444444] text-sm'>Creator</h1>
                <h1 className='text-white'>Eric Clapton</h1>
               
            </div>
            <h1 className='text-white text-3xl'>  <InstagramOutlined/></h1>
            <h1 className='text-white text-3xl'>  <TwitterOutlined/></h1>
          
          
        </div>
    )
}

export default CreatorCard