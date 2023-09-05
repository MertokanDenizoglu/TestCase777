import React from 'react'
import CardImg from '../assets/images/card.png'
import Dot from '../assets/images/·.png'
import Eth from  '../assets/images/cardF.png'
const CardVertical = () => {
  return (
    <div className='flex w-[358px] h-[167px] gap-x-5 p-4 bg-[#1E1E1E] rounded-lg '>
       <img className='w-[126px] h-[126px] rounded-md' src={CardImg} alt='...'/>
       <div className='w-1/2 '>
        <h1 className='text-white'>ETH Never Die</h1>
        <div className="flex justify-between  w-full  ">
          <h1 className="text-slate-600 text-base font-poppins">Creator</h1>
          <img className="h-1 mt-1" src={Dot} alt="..." />{" "}
          <h1 className="text-slate-500 text-base">Roger Waters</h1>
        </div>
        <div className="flex justify-around">
          <h1 className="text-[#A27DF9] text-sm mt-1">18 in Stock</h1>
          <img className="w-15 h-7 mt-1" src={Eth} alt="..." />
        </div>
        <button className="text-white px-10 py-2 mt-2 bg-[#A27DF9] rounded-lg">
            Mint
          </button>
       </div>
    </div>
  )
}

export default CardVertical