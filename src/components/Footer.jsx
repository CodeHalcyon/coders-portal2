import React from 'react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='max-w-full p-6 text-white bg-black'>
                <div className='flex flex-col items-center sm:flex-row sm:justify-between'>
                    {/* Coder's Portal Title */}
                    <div className='mb-4 text-center sm:mb-0'>
                        <h1 className='text-3xl font-bold sm:text-5xl'>Coder's Portal</h1>
                    </div>

                    {/* Newsletter Section */}
                    <div className='flex flex-col gap-4 text-center sm:flex-row sm:items-center'>
                        <h1 className='text-2xl font-bold sm:mr-4'>
                            Subscribe to our newsletter
                        </h1>
                        <div className='flex'>
                            <input
                                placeholder='Enter your mail'
                                type="email"
                                name="email"
                                id="email"
                                className='p-2 text-black outline-none rounded-l-md'
                            />
                            <button className='p-2 text-sm text-white bg-purple-600 rounded-r-md'>
                                Subscribe
                            </button>
                        </div>
                    </div>

                    {/* Social Icons Section */}
                    <div className='flex gap-6 mt-4 text-center sm:mt-0'>
                        <div className='flex items-center gap-2'>
                            <FaInstagram size={32} title='Instagram' />
                            <span>Instagram</span>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaYoutube size={32} />
                            <span>Youtube</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;
