import React from 'react'
import { AppContext } from '../context/App.context';
import { useNavigate } from 'react-router-dom';


const RelatedDoctors = ({speciality,docId}) => {
    const {doctors}=React.useContext(AppContext);
    const navigate=useNavigate();
    const [relDoc,setRelDocs]=React.useState([]);
    React.useEffect(()=>{
       if(doctors.length>0 && speciality){
        const doctorsData=doctors.filter(doc=>doc.speciality===speciality && doc._id!==docId);
        setRelDocs(doctorsData);
       }
    },[doctors,speciality,docId])
  return (
    <div>
      <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Related Doctors Available for you</h1>
        <p className='sm:w-1/3 text-center text-sm'>Find yourself a best doctor according ro your meets</p>
        <div className='w-full  grid grid-cols-[repeat(auto-fit,minmax(150px,200px))] gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0,5).map((item,index) => (
                <div onClick={()=>{navigate(`/appointment/${item._id}`);scrollTo(0,0)}} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
                    <img className='bg-blue-50' src={item.image} alt=""/>
                    <div className='p-3 text-sm'>
                        {/* <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'><p></p>Available</p>
                        </div> */}
                        <div className={`flex items-center gap-2 text-sm text-center ${item.available ? 'text-green-500' : 'text-red-500'}`}>
                            <p className={`w-2 h-2 ${item.available ? 'bg-green-500' : 'bg-red-500'} rounded-full`}></p>
                               <p>{item.available ? 'Available' : 'Not Available'}</p> 
                        </div>
                        

                        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
                        <p className='text-gray-600 text-sm '>{item.speciality}</p>
                        <p className='text-gray-700'>{item.rating} Ratings</p>
                        <p className='text-gray-800 font-medium'>Experience: {item.experience} years</p>
                        <p>Fee:₹{item.fees}</p> 
                    </div>
                </div>

               )) }
        </div>
        <button onClick={()=>{navigate('/doctors');scrollTo(0,0)}} className='bg-blue-400 text-white px-7 py-3 rounded-full mt-6 hover:bg-blue-700 transition-all duration-300'>View All Doctors</button>
    </div>
    </div>
  )
}

export default RelatedDoctors