import React from 'react'
import Avatar from '../assets/images/Avatar.png'
import PlaceHolder from '../assets/images/Frame.png'
import Card from './Card'
import { SearchOutlined } from '@ant-design/icons/lib/icons'
import Filter from '../assets/images/Filter.png'
import CardVertical from './CardVertical'
import CardBig from './CardBig'
import CreatorCard from './CreatorCard'
const Section1 = () => {
    return (
        <div className='w-full px-44 max-lg:px-4 mt-10 grid gap-y-10' >
            <h1 className='text-white font-poppins text-xl'>Project</h1>
            <div className='flex max-lg:grid gap-x-20 gap-y-5'>
                <div className='w-1/2 max-lg:w-full'>
                    <img className='w-[609px]  h-[609px] max-lg:w-full' src={PlaceHolder} alt='placeholder' />
                </div>
                <div className='w-1/2 max-lg:w-full'>
                    <h1 className='font-poppins text-white text-6xl text-center font-extrabold'>Great NFT Project</h1>
                    <div className='flex justify-between mt-10'>
                        <div className='flex gap-x-2' >
                            <img src={Avatar} alt='...' />
                            <div className='grid'>
                                <h1 className='text-[#444444] text-sm'>Creator</h1>
                                <h1 className='text-white'>Eric Clapton</h1>
                            </div>
                        </div>
                        <button className='bg-[#A27DF9] px-10 rounded-xl text-white font-poppins font-bold'>Mint</button>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-white max-lg:text-sm max-lg:text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar sollicitudin dui. Sed pulvinar sollicitudin dui ac ullamcorper. Mauris interdum lobortis commodo.  Etiam tellus justo, ultricies et arcu quis, vehicula scelerisque turpis. Nunc mi ante, sagittis vitae imperdiet quis, scelerisque ac nulla. Maecenas enim urna, ullamcorper sed erat.</h1>
                    </div>
                    <div className='w-full h-[312px] bg-[#1E1E1E] mt-4 p-11 rounded-xl'>
                        <h1 className='text-[#A27DF9] text-center'>Mint Price</h1>
                        <h1 className='font-poppins text-white text-center text-5xl mt-2'>2.00 ETH</h1>
                        <h1 className='text-white text-center'>$3.102.76</h1>
                        <h1 className='text-[#A27DF9] text-center mt-12'>Mint Starting In</h1>
                        <div className='flex justify-center items-center gap-x-10 mt-4'>
                            <div className='grid'><h1 className='text-white'>19</h1> <h1 className='text-white'>hrs</h1></div>
                            <div className='grid'><h1 className='text-white'>19</h1> <h1 className='text-white'>hrs</h1></div>
                            <div className='grid'><h1 className='text-white'>19</h1> <h1 className='text-white'>hrs</h1></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-between mb-5'>
            <h1 className='text-white font-poppins text-xl'>Creator's Other Project</h1>
            <button className='px-8 max-lg:px-0 bg-[#2C2C2C] text-white rounded-lg'>See All</button>
            </div>
            <div className='flex max-lg:grid   gap-y-5 gap-x-10  mb-10 justify-center'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            </div>
           <div className=' w-full gap-x-10 flex max-lg:grid max-lg:px-0 gap-y-5 justify-center py-5'>
           <div className='w-1/3 grid justify-center max-lg:w-full'>
           <h1 className='text-white font-poppins text-xl mb-5'>Look at Other Project</h1>
           <div className='flex w-full justify-between gap-x-2 mb-4'>
           <input className='bg-transparent border-2 w-full border-[#2C2C2C] rounded-lg p-2 ml-2 ' placeholder='Search' prefix={<SearchOutlined/>}/>
           <img src={Filter} alt='...'/>
           </div>
           <div className='grid gap-y-8'>
           <CardVertical/>
           <CardVertical/>
           <CardVertical/>
           </div>
         

           </div>
           <div className='w-1/3 grid gap-y-8 justify-center max-lg:w-full'>
            <CardBig/>
            <CardVertical/>
           </div>
           <div className='w-1/3 max-lg:w-full'>
            <div className='grid gap-y-[30px] justify-center'>
            <CreatorCard/>
            <CreatorCard/>
            <CreatorCard/>
            <CreatorCard/>
            <CreatorCard/>
            <CreatorCard/>
            </div>
           
           </div>
           </div>
        </div>
    )
}

export default Section1