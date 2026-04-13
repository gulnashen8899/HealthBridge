import React from 'react'
import {assets} from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
            {/* --------------left section------------ */}
         <div>
            <img className='mb-5 w-40' src={assets.logo} alt=""/>
            <p className='w-full md:w-2/3 text-gray-600 leading-6'>Find Trusted Doctors, Book Instantly.
             Connect with top specialists across all medical fields.
            Schedule online or in-clinic consultations in just a few clicks.
            Your health, our priority — anytime, anywhere.</p>
          </div>


          {/* --------------center section------------ */}
          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact us</li>
                <li>Privacy Policy</li>
            </ul>
          </div>  

            {/* --------------right section------------ */}
            <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+1-221-455-4567  </li>
                <li>healthbridge@gmail.com </li>
            </ul>
            </div>

        </div>
           {/*--------copyright text----------*/}
        <div>
            <hr/>
           <p className='py-5 text-sm text-center'> Copyright 2025@ HEALTHBRIDGE. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer