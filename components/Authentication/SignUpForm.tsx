'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import CommunityComponentCSS from '../../style/Home.module.css';
import { UserAPI } from '@/APIcalling/userAPI';

const SignUpForm: React.FC = () => {
  const router = useRouter();
  
  const [name, setName] = useState(''); 
  const [email, setEmail] = useState(''); 
  const [phone, setPhone] = useState(''); 
  const [address, setAddress] = useState(''); 
  const [password, setPassword] = useState(''); 
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [role, setRole] = useState(''); 


  const handleUserSignup = async () => {
    const userData = {
      name: name, email: email, phone: phone, address: address, password: password, role: role
    }
    await UserAPI.handleCreateuserToDB(userData).then(res => {
      console.log(res);
    })

  }



  return (
    <div style={{
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }} className='mt-[100px] w-[60%]'>

      <img className={`${CommunityComponentCSS.loginUserAvatar} block mx-auto mt-[-100px]`} src="https://i.ibb.co/vdbSRwB/8380015.png" alt="Image" />

      <div className='mb-6'>
        <h2 className='text-2xl mb-2 lg:text-5xl md:text-3xl text-white flex justify-center'>Sign up Form</h2>
      </div>

      <div className='p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5'>
        <div>
          <h1 className='mb-1'>Full name<span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center`}>
            <input onChange={(e)=> setName(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your full name"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>


        <div className='my-2'>
          <h1 className='mb-1'>Email Address<span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center`}>
            <input onChange={(e)=> setEmail(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your email address"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="email"
              name=""
              id=""
            />
          </div>
        </div>


        <div className='my-2'>
          <h1 className='mb-1'>Phone number<span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center`}>
            <input onChange={(e)=> setPhone(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your phone number"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="number"
              name=""
              id=""
            />
          </div>
        </div>


        {/* Address */}
        <div className='my-2'>
          <h1 className='mb-1'>Address<span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center`}>
            <input onChange={(e)=> setAddress(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your address"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="text"
              name=""
              id=""
            />
          </div>
        </div>


        <div className='my-2'>
          <h1 className='mb-1'>Password <span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center `}>

            <input onChange={(e)=> setPassword(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your password"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="password"
              name=""
              id=""
            />
          </div>
        </div>

        <div className='my-2'>
          <h1 className='mb-1'>Confirm Password <span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center `}>

            <input onChange={(e)=> setConfirmPassword(e.target.value)}
              style={{
                borderRadius: "4px",
                background: 'white',
              }}
              placeholder="Type your password again"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black"
              type="password"
              name=""
              id=""
            />
          </div>
        </div>

        {/* Role */}

        <div className='flex justify-between items-center my-4'>
          <h1 className='mb-1'>I am <span className='text-red-700 text-xl pt-1'> *</span></h1>

          <div className='flex gap-x-2'>
          <input  onChange={(e)=> setRole(e.target.value)}value='Seller' type="radio" name="radio-2" className="radio radio-warning" />
          <h1 className=''>Seller</h1>
          </div>

          <div className='flex gap-x-2'>
          <input onChange={(e)=> setRole(e.target.value)} value='Buyer' type="radio" name="radio-2" className="radio radio-warning" />
          <h1 className=''>Buyer</h1>
          </div>

          <div className='flex gap-x-2'>
          <input onChange={(e)=> setRole(e.target.value)} value='Lawer' type="radio" name="radio-2" className="radio radio-warning" />
          <h1 className=''>Lawer</h1>
          </div>

          <div className='flex gap-x-2'>
          <input  onChange={(e)=> setRole(e.target.value)}value='Renter' type="radio" name="radio-2" className="radio radio-warning" />
          <h1 className=''>Renter</h1>
          </div>

          <div className='flex gap-x-2'>
          <input onChange={(e)=> setRole(e.target.value)} value='Admin' type="radio" name="radio-2" className="radio radio-warning" />
          <h1 className=''>Admin</h1>
          </div>
        </div>

        <div className='my-4 flex justify-end'>
          <button onClick={handleUserSignup} className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Sign up</button>
        </div>

        <div className='flex justify-center'>
          <p onClick={() => router.push('/login')}>Already have an account? <span className='underline text-black hover:cursor-pointer'>Log in</span></p>
        </div>

      </div>
    </div>
  );
};

export default SignUpForm;