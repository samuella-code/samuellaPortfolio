import React from 'react'
import avatar from "../assets/avatar.webp"
import { FaMapMarkerAlt, FaRegCalendarAlt, FaRegEnvelope } from 'react-icons/fa'
import { MdOutlinePhoneIphone } from 'react-icons/md'

const Sidebar = () => {
    return (
        <div className='bg-orange-600 h-screen w-[350px] rounded-xl m-7 hidden md:block'>
            <div className='bg-orange-600 rounded-md p-4'>
                <div className='rounded-xl p-3 flex items-center justify-center'>
                    <img src={avatar} alt="" className='w-[200px] bg-yellow-700 rounded-2xl'/>
                </div>
                <h1 className='text-white font-bold text-center text-3xl my-2'>Eze-Oge Samuella</h1>
                <p className='text-white bg-orange-700 rounded-md py-2 text-center mx-4 mb-7'>Software Engineer</p>
                <hr className='text-blue-700 mx-4 border-2' />
                <div className='mt-7 px-4 space-y-7'>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-yellow-700 p-2 rounded-md shadow'>
                            <FaRegEnvelope className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>EMAIL</h1>
                            <p className='text-gray-200'>ezeogesamuella@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-yellow-700 p-2 rounded-md shadow'>
                            <MdOutlinePhoneIphone className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>PHONE</h1>
                            <p className='text-white-200'>+234 8144550804</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-yellow-700 p-2 rounded-md shadow'>
                            <FaRegCalendarAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>BIRTHDAY</h1>
                            <p className='text-white-200'>16 March, 2006</p>
                        </div>
                    </div>
                    <div className='flex gap-3 items-center'>
                        <div className='bg-yellow-700 p-2 rounded-md shadow'>
                            <FaMapMarkerAlt className='text-yellow-500 text-2xl' />
                        </div>
                        <div className='text-white'>
                            <h1 className='font-semibold'>LOCATION</h1>
                            <p className='text-gray-200'>Lagos, Nigeria</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
