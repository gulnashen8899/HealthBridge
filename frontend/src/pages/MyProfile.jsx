import React from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/App.context.jsx'
import axios from 'axios';
import { toast } from "react-toastify";




const MyProfile = () => {
  const{ userData, setUserData,token, backendURL, loadUserProfileData } = React.useContext(AppContext);
  // const [userData, setUserData] = React.useState({
  //   name: "Baby Gulnasheen",
  //   image: assets.profile_pic,
  //   email: 'babygulnasheen9922@gmail.com',
  //   phone: '+91 6290521536',
  //   address: {
  //     line1: "Bidhanagar, salt lake sector V",
  //     line2: "kolkata,west Bengal, India"
  //   },
  //   gender: 'Female',
  //   dob: '2004-07-29'
  // })
  const [isEdit, setIsEdit] = React.useState(false);
  const [image,setImage]=React.useState(false);
  const updateUserProfileData=async()=>{
   try{
     const formData=new FormData();
     formData.append('name',userData.name);
     formData.append('phone',userData.phone);
     formData.append('address',userData.address);
     formData.append('dob',userData.dob);
     formData.append('gender',userData.gender);

     image && formData.append('image',image);

     const {data} = await axios.post(backendURL+'/api/user/update-profile',formData,{headers:{token}});

     if(data.success){
      toast.success(data.message)
      await loadUserProfileData();
      setIsEdit(false);
      setImage(false);
     }else{
      toast.error(data.message)
     }
   }catch(error){
    console.error(error);
    toast.error(error.message);
   }
  }
  return userData && (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>
      {
        isEdit
        ?<label htmlFor='image'>
            <div className='inline-block relative cursor-pointer'>
              <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image):userData.image} alt=''/>
              <img className='w-10 absolute bottom-12 right-12' src={image?'':assets.upload_icon} alt=''/>
            </div>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id='image' hidden/>
        </label>
        :
           <img className='w-36 rounded md:max-w-[250px]' src={userData.image} alt="" />
        
      }
      {
        isEdit
          ? < input className='bg-gray-50 text-3xl font-medium max-w-60 mt-4' type='text' value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className='font-medium text-3xl text-neutral-800 mt-4'>{userData.name}</p>
      }
      <hr className='bg-zinc-400 h-[1px] border-none'/>
      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-[#07BC]'>{userData.email}</p>
          <p className='font-medium'>Phone:</p>
          {
            isEdit
              ? <input className='bg-gray-50 max-w-52' type='text' value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-[#07BC]'>{userData.phone}</p>
          }
          <p className='font-medium'>Address:</p>
          {
            isEdit
              ? <p>
                <input className='bg-gray-50' type='text' value={userData.address} onChange={e => setUserData(prev => ({...prev,address: e.target.value } ))} />
                <br />
                {/* <input className='bg-gray-50' type='text' value={userData.address.line2} onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} /> */}
              </p>
              : <p className='text-gray-700'>
                {userData.address}
                {/* ,<br />{userData.address.line2} */}
              </p>
          }
        </div>
      </div>
      <div>
        <p className='text-neutral-700 underline mt-3'>PERSONAL INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
          {
            isEdit
              ? <select onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-gray-700'>{userData.gender}</p>
          }
          <p className='font-medium'>Birthday:</p>
          {
            isEdit
              ? <input className='max-w-28 bg-gray-50' type='date' value={userData.dob} onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} />
              : <p className='text-gray-700'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-10'>
       {
          isEdit
            ? <button className='border  border-[#07BC] px-8 py-2 rounded-full hover:bg-[#07BC] hover:text-white transition-all' onClick={updateUserProfileData}>Save</button>
            : <button className='border  border-[#07BC] px-8 py-2 rounded-full hover:bg-[#07BC] hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
       }
      </div>

    </div>
  )
}

export default MyProfile