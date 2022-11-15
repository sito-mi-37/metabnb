import React from 'react'
import Button from '../components/Button'

const MetabnbNfts = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-14 bg-color1 border border-black'>
        <div className='text-white  px-5 py-10 lg:px-14 lg:py-[4rem]'>
            <h3 className='font-bold text-3xl lg:text-[3rem] mb-7'>Metabnb NFTs</h3>

            <p className='text-md lg:text-lg mb-7'>Discover our NFT gift cards collection. Loyal<br/> customers gets amazing gift cards which are <br/> traded as NFTs. These NFTs gives our customer<br/> access to loads of our exclusive services.
            </p>

            <Button className='bg-gradient-to-t from-[#FFFFFF] to-[#FFFFFF] text-color1 px-5'>Learn more</Button>
        </div>
        <div className=' flex justify-center items-center lg-pr-10'>
            <img className='h-[65%] lg:h-[80%]  md:h-[70%]' src="Frame3in1.png" alt="" />
        </div>
    </div>
  )
}

export default MetabnbNfts