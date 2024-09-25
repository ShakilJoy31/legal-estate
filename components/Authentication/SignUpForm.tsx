'use client'

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

import CommunityComponentCSS from '../../style/Home.module.css';
import HomeComponentCss from '../../style/ComponentStyle.module.css';
import { UserAPI } from '@/APIcalling/userAPI';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { IoEye, IoEyeOff } from 'react-icons/io5';

const SignUpForm: React.FC = () => {
  const router = useRouter();

  // The states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('');
  const [picture, setPicture] = useState<File | null>(null);
  const [hostedImage, setHostedImage] = useState('');
  const [passwordVasibility, setPasswordVasibility] = useState(true); 
  const [confirmPasswordVasibility, setConfirmPasswordVasibility] = useState(true); 


  const handleUserSignup = async () => {
    const userData = {
      name: name, email: email, phone: phone, address: address, password: password, role: role, photo: hostedImage
    }
    await UserAPI.handleCreateuserToDB(userData).then(res => {
      if(res.data.code === 11000){
        alert('This email is already exists! Try another one.')
      }else{
        localStorage.setItem("legalEstateUser", JSON.stringify(res));
        router.push('/dashboard');
      }
    })
  }


  // Hosting the image to the third party. 
  if (picture) {
    const formDataImage = new FormData();
    formDataImage.append("image", picture);
    fetch('https://api.imgbb.com/1/upload?key=1f2e07ae412954d520f52351b07dee66', {
      method: 'POST',
      body: formDataImage,
    })
      .then((res) => res.json())
      .then((result) => {
        setHostedImage(result.data.display_url);
      });
    setPicture(null);
  }

  return (
    <div style={{
      borderRadius: "5px",
      backgroundImage: "linear-gradient(to right top, rgb(139, 92, 246), rgb(253, 186, 116))",
      backgroundSize: "100%",
      backgroundRepeat: "repeat",
    }} className='mt-[100px] md:w-[70%] lg:w-[60%] w-full'>

      <img className={`${CommunityComponentCSS.loginUserAvatar} block mx-auto mt-[-100px]`} src="https://i.ibb.co/vdbSRwB/8380015.png" alt="Image" />

      <div className='mb-6'>
        <h2 className='text-2xl mb-2 lg:text-5xl md:text-3xl text-white flex justify-center'>Sign up Form</h2>
      </div>

      <div className='p-1 sm:p-2 md:p-3 lg:p-4 xl:p-5'>
        <div>
          <h1 className='mb-1'>Full name<span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div className={`flex items-center`}>
            <input onChange={(e) => setName(e.target.value)}
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
            <input onChange={(e) => setEmail(e.target.value)}
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
            <input onChange={(e) => setPhone(e.target.value)}
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
            <input onChange={(e) => setAddress(e.target.value)}
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


        <div className='mt-4'>
          <h1 className='mb-1'>Password <span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div style={{
                borderRadius: "4px",
                background: 'white',
              }} className={`flex items-center px-2`} >
            <input onChange={(e) => setPassword(e.target.value)}
              placeholder="Type your password"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black bg-white"
              type={passwordVasibility ? 'password' : 'text'}
              name=""
              id=""
            />
            {
              passwordVasibility ? <IoEye onClick={()=> setPasswordVasibility(!passwordVasibility)} color={'black'} size={25}></IoEye> : <IoEyeOff onClick={()=> setPasswordVasibility(!passwordVasibility)} color={'black'} size={25}></IoEyeOff>
            }
            
          </div>
        </div>




        <div className='mt-4'>
          <h1 className='mb-1'>Confirm Password <span className='text-red-700 text-xl pt-1'> *</span></h1>
          <div style={{
                borderRadius: "4px",
                background: 'white',
              }} className={`flex items-center px-2`} >
            <input onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Type your password"
              className="w-full h-[45px] focus:outline-none border-0 pl-1 text-black bg-white"
              type={confirmPasswordVasibility ? 'password' : 'text'}
              name=""
              id=""
            />
            {
              confirmPasswordVasibility ? <IoEye onClick={()=> setConfirmPasswordVasibility(!confirmPasswordVasibility)} color={'black'} size={25}></IoEye> : <IoEyeOff onClick={()=> setConfirmPasswordVasibility(!confirmPasswordVasibility)} color={'black'} size={25}></IoEyeOff>
            }
            
          </div>
        </div>

        {/* Role */}

        <div className='grid md:flex justify-between items-center my-4 gap-y-2'>
          <h1 className='mb-1'>I am <span className='text-red-700 text-xl pt-1'> *</span></h1>

          <div className='flex gap-x-2'>
            <input onChange={(e) => setRole(e.target.value)} value='Seller' type="radio" name="radio-2" className="radio radio-warning" />
            <h1 className=''>Seller</h1>
          </div>

          <div className='flex gap-x-2'>
            <input onChange={(e) => setRole(e.target.value)} value='Buyer' type="radio" name="radio-2" className="radio radio-warning" />
            <h1 className=''>Buyer</h1>
          </div>

          <div className='flex gap-x-2'>
            <input onChange={(e) => setRole(e.target.value)} value='Lawer' type="radio" name="radio-2" className="radio radio-warning" />
            <h1 className=''>Lawer</h1>
          </div>

          <div className='flex gap-x-2'>
            <input onChange={(e) => setRole(e.target.value)} value='Renter' type="radio" name="radio-2" className="radio radio-warning" />
            <h1 className=''>Renter</h1>
          </div>

          <div className='flex gap-x-2'>
            <input onChange={(e) => setRole(e.target.value)} value='Admin' type="radio" name="radio-2" className="radio radio-warning" />
            <h1 className=''>Admin</h1>
          </div>
        </div>


        {/* The iamge upload  */}
        <div className='flex items-center'>
          <div className='w-full'>
            <span>Upload Profile Picture</span>

            <div className='flex justify-between items-center my-2'>
              <div className=''>     
                <div
                  style={{
                    borderRadius: '8px',
                    border: '1px solid rgba(18, 18, 18, 0.16)',
                    background: 'purple',
                    color: 'black'
                  }}
                  className={`$${HomeComponentCss.customInputImageUpload} w-[120px] h-[120px] hover:cursor-pointer`}
                >

                  <input
                    onChange={(e) => {
                      if (e.target.files && e.target.files.length > 0) {
                        setPicture(e.target.files[0]);
                      }
                    }}
                    style={{ position: "absolute", opacity: "0" }}
                    type="file"
                    className="h-[120px]"
                  />

                  <span className='flex justify-center mt-[32px]'><AiOutlineCloudUpload size={35} color={'white'}></AiOutlineCloudUpload></span>
                  <p className="flex justify-center text-white">
                    Click to upload
                  </p>
                </div>
              </div>

              <div className=''>
                {
                 hostedImage && <div style={{ position: 'relative' }}>
                    <span onClick={() =>setHostedImage('')} style={{ position: 'absolute', top: '5px', right: '5px' }}><RxCross1 size={25} color={'red'}></RxCross1></span>
                    <img
                      className="w-[120px] h-[120px] rounded-sm"
                      src={hostedImage}
                      alt=""
                    />
                  </div>
                }
              </div>
            </div>

          </div>

        </div>

        <div className='my-4 flex justify-end'>
          <button onClick={handleUserSignup} className={`btn border-0 btn-md w-[200px] normal-case ${CommunityComponentCSS.orderExtraItemButton}`} disabled={(password !== confirmPassword) || (!name || !email || !phone || !password || !address || !role)}>Sign up</button>
        </div>

        <div className='flex justify-center'>
          <p onClick={() => router.push('/login')}>Already have an account? <span className='underline text-black hover:cursor-pointer'>Log in</span></p>
        </div>

      </div>
    </div>
  );
};

export default SignUpForm;