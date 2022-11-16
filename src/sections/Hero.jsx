import React from 'react'
import HeroImages from '../components/HeroImages'

const Hero = () => {
  return (
    <div className='grid grid-cols-1 justify-items-center mt-[7rem] md:justify-items-end  md:grid-cols-2  md:mx-10 lg:mr-10 lg:justify-items-start lg:pl-4'>
        <div className='mb-5 px-5 md:pt-7 lg:pt-10 '>
            <h2 className='text-3xl text-center mb-5 md:text-left 
            md:text-[1.5rem]
            lg:text-[2.8rem] lg:leading-[4rem] md:mb-5'> Rent a <span className='text-color1 font-bold'>Place</span> away from  <span className='text-color1 font-bold'>Home</span> in the <span className='text-color1 font-bold'>Metaverse</span>
            </h2>
            <p className='text-center mb-5 
            md:mb-5 
            md:text-left 
            text-[0.85rem]
            lg:text-xl' >we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
            <div className='w-full  lg:w-[98%] md:w-[95%] px-2 mb-5 md:px-0'>
                <input className='w-3/4 p-2 lg:py-3 border-borderline border rounded-l' type="text" placeholder='Search for location' />
                <input className='rounded-r bg-color1 w-1/4 border border-color1 p-[9px] px-2 lg:py-[13px] text-white' type="submit" value="Search" />
            </div>
        </div>
        <div className=' w-4/5 flex justify-center md:justify-end md:w-full lg:w-4/5 md:mr-7 '>
            <HeroImages />
        </div>
        


    </div>
  )
}

export default Hero