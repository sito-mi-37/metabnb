import React from 'react'

const HeroImages = () => {
  return (
    <div className='grid grid-cols-2 w-4/5 lg:w-full h-[18rem] lg:h-[18rem] gap-1'>
        <div className=' mt-[40%] h-full flex flex-col gap-1 '>
            <div className='border flex  h-[40%] lg:h-[32%] rounded-xl'>
                <img className='w-full object-fill' src="mimage4.png" alt="" />
            </div>
            <div className='border flex h-[40%] lg:h-[32%] rounded-xl '>
                <img className='w-full object-fill' src="mimage6.png" alt="" />
            </div>
        </div>
        <div className=' flex flex-col gap-1'>
            <div className='border flex h-[40%] lg:h-[32%] rounded-xl'>
                <img className='w-full object-fill' src="mimage3.png" alt="" />
            </div>
            <div className='border flex h-[40%] lg:h-[32%]  rounded-xl'>
                <img className='w-full object-fill' src="mimage5.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default HeroImages