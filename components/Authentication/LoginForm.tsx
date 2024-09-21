'use client'

import React, { useState } from 'react';

import { useRouter } from 'next/navigation';

import CommunityComponentCSS from '../../style/Home.module.css';
import { UserAPI } from '@/APIcalling/userAPI';

const LoginForm: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState(''); 


  const handleUserLogin = async () => {
    const userData = {
      email: email, password: password
    }
    await UserAPI.handleUserLogin(userData).then(res => {
      console.log(res)
    })
    console.log(userData)
  }


  return (
    <div style={{
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }} className='mt-[100px]'>

      <img className={`${CommunityComponentCSS.loginUserAvatar} block mx-auto mt-[-100px]`} src="https://i.ibb.co/vdbSRwB/8380015.png" alt="Image" />

      <div className='mb-6'>
        <h2 className='text-2xl mb-2 lg:text-5xl md:text-3xl text-white flex justify-center'>Login Form</h2>
        <p style={{ color: 'white' }} className='flex justify-center mx-2 md:mx-3 lg:mx-4'>
          Welcome to Mail-Tym! Please log in to your account. We do appreciate your your decision to stay connected with us.</p>

        <p style={{ color: 'white' }} className='flex justify-center mx-2 md:mx-3 lg:mx-4'>
          We are glad to have you back!</p>
      </div>

      <div className='p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5'>
        <div>
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


        <div className='mt-4'>
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

        <div className='my-4 flex justify-end'>
          <button onClick={handleUserLogin} className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`}>Login</button>
        </div>

        <div className='flex justify-center'>
          <p onClick={()=> router.push('/signup')}>New here? <span className='underline text-black hover:cursor-pointer'>Sign up</span></p>
        </div>

      </div>
    </div>
  );
};

export default LoginForm;