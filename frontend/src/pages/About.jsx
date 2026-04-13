import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>


      <div className='text-center text-2xl pt-10 text-gray-700 font-medium'>
        <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
      </div>

     <div className='my-10 flex flex-col md:flex-row gap-10'>
      <img className='w-full md:max-w-[500px]' src={assets.about_image} alt="aboutusimage" />
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-700'>

        <p>Finding the right doctor for your health needs has never been easier. With our platform, you can browse through verified specialists, compare their experience and ratings, and book appointments instantly – all from the comfort of your home. </p>
        <p>
          Whether you need a routine check-up or expert consultation, our trusted doctors are just a few clicks away. Enjoy transparent fees, flexible scheduling, and seamless healthcare that fits your lifestyle. Your health is our priority, and we make it simple, fast, and reliable to connect you with the care you deserve.
        </p>
        <b className='text-gray-1000'>Our Vision</b>
        <p>Our mission is to connect patients with trusted healthcare professionals, ensuring quality care and convenience. Whether you're seeking a routine check-up or specialized treatment, our extensive network of doctors is here to support your health journey.</p>
  
      </div>
     </div>

<div className='text-xl my-4'>
  <p>THE DIFFERENCE <span>WE MAKE</span></p>
</div>

<div className='flex flex-col md:flex-row mb-20'>


  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#07BC] hover:text-white transition-all duration-300 text-gray-600 cursor pointer'>
    <b>Effeciency:</b>
    <p>Book appointments in just a few clicks.
    Our platform ensures quick access to verified doctors.</p>
  </div>

  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#07BC] hover:text-white transition-all duration-300 text-gray-600 cursor pointer'>
    <b>Convenience</b>
    <p>Consult top specialists without long queues.
    Manage your appointments, and medical records in one place</p>
  </div>


  <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-[#07BC] hover:text-white transition-all duration-300 text-gray-600 cursor pointer'>
    <b>Personalization</b>
    <p>Get doctor recommendations tailored to your preferences. 
      Enjoy a care experience designed around your schedule.</p>
  </div>



</div>

      </div>
  )
}

export default About