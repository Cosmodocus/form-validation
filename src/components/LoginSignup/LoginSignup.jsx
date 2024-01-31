import React, { useState } from 'react'
import user_icon from '../assets/person.png'
import email_icon from '../assets/email.png'
import password_icon from '../assets/password.png'

const LoginSignup = () => {

  const[action, setAction] = useState("Sign Up");


  return (
    <div className='w-[600px] bg-[#36453B] mx-auto mt-28 rounded-xl '>
        <div className='flex justify-center  flex-col items-center gap-2 mt-8'>
            <div className='text-5xl mt-6 text-[#D3D0C9] font-bold'>{action}</div>
            <div className='w-[61px] h-[6px] bg-[#8C785D] rounded-lg mt-4'></div>
        </div>
        <div className='mt-5 flex flex-col gap-6'>
            {action === "Login" ? <div></div> :  
            <div className='flex items-center mx-auto w-[480px] h-20 bg-[#D3D0C9] rounded-md'>
                <img src={user_icon} alt="/" className='mx-12'/>
                <input type="text" placeholder='Name'className='h-[50px] w-[400px] bg-transparent border-none outline-none text[#D3D0C9] text-lg' />
            </div>}
           
            <div className='flex items-center mx-auto w-[480px] h-20 bg-[#D3D0C9] rounded-md'>
                <img src={email_icon} alt="/" className='mx-12'/>
                <input type="email" placeholder='Email'className='h-[50px] w-[400px] bg-transparent border-none outline-none text[#D3D0C9] text-lg' />
            </div>
            <div className='flex items-center mx-auto w-[480px] h-20 bg-[#D3D0C9] rounded-md'>
                <img src={password_icon} alt="/" className='mx-12'/>
                <input type="password" placeholder='Password'className='h-[50px] w-[400px] bg-transparent border-none outline-none text[#D3D0C9] text-lg' />
            </div>
        </div>
        {action === "Sign Up" ? <div></div> : 
        <div className='pl-[62px] mt-7 text-[#797979] text-lg'>Forgot your password? <span className='text-[#8C785D] cursor-pointer underline'>Click here!</span></div>}
        <div className='flex gap-7  justify-center'>
            <div className={action === "Login" ? "bg-[#D3D0C9] text-[#676767] flex justify-center items-center w-56 h-[59px]   rounded-[50px] text-lg font-bold cursor-pointer my-12" : 'flex justify-center items-center w-56 h-[59px] text-[#F5F5F5] bg-[#548C77] rounded-[50px] text-lg font-bold cursor-pointer my-12'}
            onClick={() => setAction("Sign Up")}
            >Sign Up</div>
            <div className={action === "Sign Up" ? "bg-[#D3D0C9] text-[#676767] flex justify-center items-center w-56 h-[59px]   rounded-[50px] text-lg font-bold cursor-pointer my-12" : 'flex justify-center items-center w-56 h-[59px] text-[#F5F5F5] bg-[#548C77] rounded-[50px] text-lg font-bold cursor-pointer my-12'} 
            onClick={() => setAction("Login")}

            >Login</div>
        </div>

    </div>
  )
}

export default LoginSignup
