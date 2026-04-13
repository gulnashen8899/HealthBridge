import React from 'react'
import { assets } from '../../assets/assets'
import { AdminContext } from '../../context/AdminContext';
import { toast } from 'react-toastify';
import axios from 'axios';



const AddDoctor = () => {
  const [docImg, setDocImg]=React.useState(false);
  const [name, setName]=React.useState('');
  const [email, setEmail]=React.useState('');
  const [password, setPassword]=React.useState('');
  const [experience, setExperience]=React.useState('1');
  const [fees, setFees]=React.useState('');
  const [speciality, setSpeciality]=React.useState('General Physician');
  const [degree, setDegree]=React.useState('');
  const [address1, setAddress1]=React.useState('');
  const [address2, setAddress2]=React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [about, setAbout]=React.useState('');
  const {backendUrl,atoken}=React.useContext(AdminContext);

  const onSubmitHandler=async(event)=>{
    event.preventDefault();
    setLoading(true); 
    toast.info("Adding doctor...");
    try{
      if(!docImg){
        return toast.error("Please upload doctor's image");
      }
      const formData=new FormData();
      formData.append('image',docImg);
      formData.append('name',name);
      formData.append('email',email);
      formData.append('password',password);
      formData.append('experience',experience);
      formData.append('fees',Number(fees));
      formData.append('speciality',speciality);
      formData.append('degree',degree);
      formData.append('address',JSON.stringify({line1:address1,line2:address2}));
      formData.append('about',about);

      //console.log(...formData);
      formData.forEach((value,key)=>{
        console.log(`${key}: ${value}`);
      })

     const {data} = await axios.post(backendUrl+'/api/admin/add-doctor',formData,{headers:{atoken}})

    if(data.success){
      toast.dismiss();
      toast.success(data.message );
      
      setDocImg(false);
      setName('');
      setEmail('');
      setPassword('');
      setFees('');
      setDegree('');
      setAddress1('');
      setAddress2('');
      setAbout('');
      setExperience('1');
      setSpeciality('General Physician');

    
    }else{
      toast.error(data.message );
    }
    } catch(error){
    toast.error(error.message);
    console.error(error);
  }
}
  return (
    <form onSubmit={onSubmitHandler} className='m-5 w-full'>
      <p className='mb-3 text-lg font-medium'>Add Doctor</p>
      <div className='bg-white px-8 py-8 border border-gray-200 rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
        <div className='flex items-center gap-4 mb-8 text-gray-600'>
          <label htmlFor='doc-img'>
            <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg):assets.upload_area} alt="" />
          </label>
          <input onChange={(e)=>setDocImg(e.target.files[0])} type='file' id='doc-img' hidden />
          <p>Upload Doctor's <br/>picture</p>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-10 text-gray-800'>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor's Name</p>
              <input onChange={(e)=>setName(e.target.value)} value={name} className='border border-gray-300 rounded px-3 py-2' type='text' placeholder='name' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Doctor's Email</p>
              <input onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-gray-300 rounded px-3 py-2' type='email' placeholder='email' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Password</p>
              <input onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-gray-300 rounded px-3 py-2' type='password' placeholder='password' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Experience</p>
              <select onChange={(e)=>setExperience(e.target.value)} value={experience} className='border border-gray-300 rounded px-3 py-2' name='experience' id='experience' required>
                <option value='' disabled>Select experience</option>
                <option value='1'>1 Year</option>
                <option value='2'>2 Years</option>
                <option value='3'>3 Years</option>
                <option value='4'>4 Years</option>
                <option value='5'>5 Years</option>
                <option value='6'>6 Years</option>
                <option value='7'>7 Years</option>
                <option value='8'>8 Years</option>
                <option value='9'>9 Years</option>
                <option value='10'>10+ Years</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Fees</p>
              <input onChange={(e)=>setFees(e.target.value)} value={fees} className='border border-gray-300 rounded px-3 py-2' type='number' placeholder='fees' required />
            </div>




          </div>
          <div className='w-full lg:flex-1 flex flex-col gap-4'>
            <div className='flex-1 flex flex-col gap-1'>
              <p>Speciality</p>
              <select onChange={(e)=>setSpeciality(e.target.value)} value={speciality} className='border border-gray-300 rounded px-3 py-2' name='speciality' id='speciality' required>
                <option value='' disabled>Select specialization</option>
                <option value="General Physician">General Physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Education</p>
              <input onChange={(e)=>setDegree(e.target.value)} value={degree} className='border border-gray-300 rounded px-3 py-2' type='text' placeholder='Degree' required />
            </div>

            <div className='flex-1 flex flex-col gap-1'>
              <p>Adress</p>
              <input onChange={(e)=>setAddress1(e.target.value)} value={address1} className='border border-gray-300 rounded px-3 py-2' type='text' placeholder='address 1' required />
              <input onChange={(e)=>setAddress2(e.target.value)} value={address2} className='border border-gray-300 rounded px-3 py-2' type='text' placeholder='address 2' required />
            </div>

            

          </div>

        </div>

        <div>
          <p className='mt-4 mb-2 '>About Doctor</p>
          <textarea onChange={(e)=>setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border border-gray-300 rounded' type='text' placeholder='Write About Doctor' rows={5} required />
        </div>


        <button className='bg-[#07BC] px-10 py-3 text-white mt-4 rounded-full' >Add Doctor</button>
      </div>
    </form>
  )
}

export default AddDoctor