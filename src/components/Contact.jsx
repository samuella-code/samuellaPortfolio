// import React from 'react'
// import Navbar from './Navbar'
// import { FaPaperPlane } from "react-icons/fa";

// const Contact = () => {
//     return (
//         <div className='md:rounded-xl bg-orange-600 md:m-7 flex-1 p-7'>
//             <Navbar />
//             <div className='mt-7'>
//                 <h1 className='text-white font-bold text-3xl mb-2'>Contact Me</h1>
//                 <hr className='border-3 text-yellow-500 w-12 rounded-4xl' />
//                 <div className='mt-10'>
//                 <iframe
//   src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7928.232815858652!2d3.3718808908505147!3d6.5069460337005465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1744674719275!5m2!1sen!2sng"
//   width="100%"
//   height="450"
//   style={{ border: 0, borderRadius: '12px' }}
//   allowFullScreen=""
//   loading="lazy"
//   referrerPolicy="no-referrer-when-downgrade"
// />

//               </div>
//                 <div className='mt-10'>
//                     <h1 className='text-white font-bold text-2xl mb-2'>Contact Form</h1>
//                     <div className='grid grid-cols-2 gap-3 md:gap-7 my-7'>
//                         <input type="text" placeholder='Full Name' className='text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800'/>
//                         <input type="email" placeholder='Email Address' className='text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800'/>
//                     </div>
//                     <textarea rows={4} cols={50} placeholder='Your Message' className='text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800 w-full'></textarea>
//                     <div className='flex justify-end mt-7'>
//                         <button className='flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-yellow-300 cursor-pointer'><FaPaperPlane/> Send Message</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Contact

import React, { useState } from 'react';
import Navbar from './Navbar';
import { FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        alert('Your message has been sent successfully!');
        // Reset form
        setFormData({ fullName: '', email: '', message: '' });
    };

    return (
        <div className="md:rounded-xl bg-orange-600 md:m-7 flex-1 p-7">
            <Navbar />
            <div className="mt-7">
                <h1 className="text-white font-bold text-3xl mb-2">Contact Me</h1>
                <hr className="border-3 border-yellow-500 w-12 rounded-full" />
                <div className="mt-10">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7928.232815858652!2d3.3718808908505147!3d6.5069460337005465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1744674719275!5m2!1sen!2sng"
                        width="100%"
                        height="450"
                        style={{ border: 0, borderRadius: '12px' }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
                <div className="mt-10">
                    <h1 className="text-white font-bold text-2xl mb-2">Contact Form</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-7 my-7">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800"
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className="text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800"
                                required
                            />
                        </div>
                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="text-white font-semibold border-2 p-3 rounded-xl bg-yellow-800 w-full"
                            required
                        ></textarea>
                        <div className="flex justify-end mt-7">
                            <button
                                type="submit"
                                className="flex gap-3 items-center px-4 py-3 rounded-xl font-semibold bg-gray-800 text-yellow-600 border border-yellow-300 cursor-pointer"
                            >
                                <FaPaperPlane /> Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;