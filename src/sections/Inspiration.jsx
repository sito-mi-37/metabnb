import React from 'react'
import Card from '../components/Card'
import RenderCards from '../components/RenderCards'
import {inspirationData} from "../data" 

const Inspiration = () => {
  return (
    <div className='mt-14 text-center  '>
        <h3 className='mb-14 font-bold text-2xl md:text-3xl lg:text-[3rem]'>Inspiration for your next adventure</h3>

       <RenderCards arr={inspirationData} />


    </div>
  )
}

export default Inspiration