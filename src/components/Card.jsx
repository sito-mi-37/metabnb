import React from 'react'

const Card = ({src, name, price, distance, time}) => {
  return (
    <div className='border bg-[#fafcfc]  border-[#D7D7D7] w-[17rem] h-[22rem] md:w-[16.5rem] rounded-2xl flex flex-col items-center py-3 mx-9'>
        <div className=' w-[15rem] h-[16rem] md:w-[14rem] relative rounded-2xl overflow-hidden'>
            <img className=' ' src={src} alt="" />
            <div className='absolute top-[8.8px] right-[8.5px] '>
                <img src="heart.svg" alt="" />
            </div>  
        </div>
        <div className='w-full pl-4 pr-3 flex flex-col gap-1 mb-2'>
            <div className='flex  justify-between items-center  '>
                <p className='text-[12px] md:text-[0.8rem] font-normal'>{name}</p>
                <h4 className='text-[12px] md:text-[0.85rem] font-bold'>{price}</h4>
            </div>
            <div className='flex justify-between'>
                <p className='text-[12px] md:text-[0.65rem] font-normal' >{distance}</p>
                <p className='text-[12px] md:text-[0.65rem] font-normal'>{time}</p>
            </div>
        </div>
        <div className=' w-full px-4'>
            <img src="rating.png" alt="" />
        </div>
    </div>
  )
}

export default Card