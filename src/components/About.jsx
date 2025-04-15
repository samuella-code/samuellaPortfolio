import React from 'react'
import Navbar from './Navbar'
import avatar from "../assets/avatar.webp"
import { service, testimonials } from './data'


const About = () => {
    return (
        <div className='md:rounded-xl bg-orange-600 md:m-7 flex-1 p-7'>
            <Navbar />
            <div className='mt-7'>
                <h1 className='text-white font-bold text-3xl mb-2'>About Me</h1>
                <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
                <div className='mt-5 md:hidden'>
                    <img src={avatar} alt="" className='bg-gray-700 rounded-2xl' />
                </div>
                <p className='mt-4 text-gray-300 text-xl font-semibold'>Hi! I’m Samuella, a passionate Web Developer, Mobile App Developer, and Fashion Model blending tech and creativity. I build elegant, responsive digital experiences and apps that work beautifully on any screen — while also expressing creativity through style and modeling.</p>
                <p className='mt-2 text-gray-300 text-xl font-semibold'>With a strong foundation in JavaScript, React, Kotlin,Cordova and modern frontend tools, I specialize in crafting seamless user interfaces and mobile experiences that truly connect with users. Whether it's a sleek web app or a cross-platform mobile app, I focus on clean code, great UX, and polished design.

Outside of tech, I embrace the runway and camera with confidence, working as a model and using that same eye for style and visual storytelling in my development work.</p>
                {/* service section */}
                <h1 className='text-2xl text-white font-bold mt-7'>What I'm Doing</h1>
                <div className='grid md:grid-cols-2 gap-6 mt-7'>
                    {
                        service.map((item, index) => {
                            return <div className='bg-orange-700 border shadow p-5 text-white flex gap-5 items-start rounded-xl' key={index}>
                                <div className='text-6xl text-yellow-500'>
                                    {item.logo}
                                </div>
                                <div>
                                    <h1 className='font-bold text-2xl'>{item.title}</h1>
                                    <p className='text-xl text-gray-300'>{item.desc}</p>
                                </div>
                            </div>
                        })
                    }
                </div>
                {/* testimonial section */}
                <h1 className='text-2xl text-white font-bold mt-7'>Testimonials</h1>
                <div className='flex flex-col md:flex-row gap-14 md:gap-7 mt-14'>
                    {
                        testimonials.map((item, index) => {
                            return <div className='bg-orange-700 border border-white rounded-xl shadow py-4 px-6' key={index}>
                                <div className='flex gap-5'>
                                    <img src={item.img} alt="" className='h-20 w-20 bg-yellow-500 rounded-2xl -mt-14 border-2 shadow-2xl border-yellow-600' />
                                    <div>
                                        <h1 className='text-white font-bold text-xl'>{item.name}</h1>
                                        <p>⭐⭐⭐⭐⭐</p>
                                    </div>
                                </div>
                                <p className='text-gray-300 text-lg pr-6 mt-2'>{item.para}</p>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default About