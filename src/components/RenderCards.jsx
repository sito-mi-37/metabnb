import React from 'react'
import Card from './Card'

const RenderCards = ({arr}) => {
  return (
    <div className='grid grid-cols-1 items-center justify-items-center gap-5 md:grid-cols-2 lg:grid-cols-4 px-16'>
        {
            arr.map((data, index) => (
                <Card
                key={index}
              src={data.src}
              name={data.name}
              price={data.price}
              distance={data.distance}
              time={data.time}
              />

            ))
        }

    </div>
  )
}

export default RenderCards