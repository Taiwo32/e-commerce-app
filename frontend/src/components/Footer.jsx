import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
                <div className=''>
                    <img src={assets.logo} className='mb-5 w-32 ' alt="" />
                    <p className='w-full md:w2/3 text-gray-600'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ipsa iste magni velit quos sint tempore dignissimos eligendi corrupti, cupiditate consequuntur ducimus mollitia debitis neque sapiente delectus quod reiciendis iusto.
                    </p>
                </div>
                <div>
                    <p className='text-xl font-m mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+234 80 21 40 92 08</li>
                        <li>taiwosolution02@gmail.com</li>
                    </ul>
                </div>

            </div>
            <div>
                <hr />
                <p className='py-5 text-sm text-center'>Copyright 2024@ forever.com -All Right Reserved</p>
            </div>
        </div>

    )
}

export default Footer