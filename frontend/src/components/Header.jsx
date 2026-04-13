import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-[#07BC] rounded-lg px-6 md:px-10 lg:px-20'>
     {/*-------left side-------*/}   
     <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'> 
       <p className='text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight'>
        HEALTHBRIDGE, where <br/>care meets convenience
       </p>
        <div className='flex flex-col md:flex-row item-center gap-3 text-white text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt=""/>
            <p>Browse through our list of top and trusted doctors available for you,<br className='hidden sm:block'/>
                select your preferred time slot, and book your appointment <br/>
            </p>
        </div>
       <a href="#speciality" className='flex items-center gap-2 bg-white text-gray-600 text-sm px-8 py-3 rounded-full mhover:shadow-lg hover:scale-105 transition-all duration-300'>
        Book an Appointment <img className='w-3' src={assets.arrow_icon} alt=""/>
        </a>      
    </div>

    {/*-------right side-------*/}   
    <div className='md:w-1/2 relative'> 
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt=""/> 
    </div>
    </div>
  )
}

export default Header