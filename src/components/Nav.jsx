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
    <div className='grid grid-cols-2 lg:grid-cols-3  py-4 px-9 lg:px-14 '>
        <div className='col-span-1'>
            <img className='h-7 w-25' src="metabnblogo.png" alt="logo" />
        </div>
        <div  className={` absolute top-16 right-2 bg-white border p-4 rounded shadow-md ${menu ? "block" : "hidden"} col-span-2  lg:static lg:bg-auto lg:border-0 lg:p-0 lg:shadow-none lg:flex justify-between align-middle`}>
            <ul onClick={() => setOpenModal(false)} className='    lg:flex gap-7 font-medium'>
                <li className='mb-2'><a href='/'> Home </a></li>
                <li className='mb-2'>
                    <a href="placetostay"> Place to stay</a>
                </li>
                <li className='mb-2'>
                    <a href="nfts">NFTs</a>
                </li>
                <li className='mb-2'>
                    <a href="community">Community</a>
                </li>
            </ul>
            <Button onClick={() => {setOpenModal(true)}}>Connect wallet</Button>
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