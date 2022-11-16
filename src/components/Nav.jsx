import {useState} from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import {HiMenu} from 'react-icons/hi'
import Modal from './Modal'

const Nav = () => {
    const [openModal, setOpenModal] = useState(false)
    const [menu, setMenu] = useState(false)

    const handleClick = () => {
        setMenu(!menu)
    }

  return (
    <>
    <div className='grid grid-cols-2 lg:grid-cols-3 z-20 bg-white shadow  fixed top-0 w-full py-4 px-5  lg:px-14 items-center'>
        <div className='col-span-1'>
           <a href="/"> <img className='h-7 w-25' src="metabnblogo.png" alt="logo" /></a>
        </div>
        <div  className={` absolute top-16 right-0 h-[100vh] lg:h-9 w-2/3 l lg:w-full bg-white border p-4 rounded shadow-md ${menu ? "block" : "hidden"} col-span-2  lg:static lg:bg-auto lg:border-0 lg:p-0 lg:shadow-none lg:flex justify-between items-center`}>
            <ul onClick={() => setOpenModal(false)} className='flex flex-col border-b lg:border-b-0  lg:flex-row gap-7 font-medium'>
                <li className='mb-5'><a href='/'> Home </a></li>
                <li className='mb-5'>
                    <a href="placetostay"> Place to stay</a>
                </li>
                <li className='mb-5'>
                    <a href="nfts">NFTs</a>
                </li>
                <li className='mb-5'>
                    <a href="community">Community</a>
                </li>
            </ul>
            <Button className='mt-5 lg:mt-0' onClick={() => {setOpenModal(true)}}>Connect wallet</Button>
        </div>
        <div onClick={handleClick} className='text-3xl border rounded shadow justify-self-end lg:hidden'>
            <HiMenu />
        </div>
        
        


    </div>
      {openModal && <Modal closeModal={setOpenModal}/>}
    </>
  )
}

export default Nav