import React from 'react'

const Modal = ({closeModal}) => {
  return (
    <div className='h-full w-full fixed z-20 top-0 bg-[rgba(64,64,64,0.3)] flex justify-center items-center transition ease-in-out duration-500'>
        <div className='bg-white w-2/3 md:w-1/3  rounded-xl shadow-xl'>
            <div className='flex border-b mb-5 py-2 px-4 justify-between border-[#CFD8DC]'>
                 <h3 className='font-medium'>Connect Wallet</h3>
                 <button onClick={() => {closeModal(false)}} >X</button>
            </div>
            <div className='px-4'>
                <h5 className='text-sm'>Choose your preferred wallet:</h5>
                <div className='border border-[#CFD8DC] bg-[#F8F9FA] flex justify-between px-2 py-1 rounded-md mb-5'>
                    <div className=' flex items-center gap-1 '>
                        <img src="foxhead.svg" alt="" />
                        <h3 className='font-medium'>Metamask</h3>
                    </div>
                    <img src="fowardarrow.svg" alt="" />
                </div>
                <div className='border flex justify-between border-[#CFD8DC] bg-[#F8F9FA] px-2 py-1 rounded-md mb-5'>
                    <div className=' flex items-center gap-1 '>
                        <img src="walletconnect.svg" alt="" />
                        <h3 className='font-medium'>WalletConnect</h3>
                    </div>
                    <img src="fowardarrow.svg" alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Modal