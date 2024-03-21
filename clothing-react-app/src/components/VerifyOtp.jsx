import React, { useState } from 'react';

const OTPVerification = () => {
  const [otp, setOTP] = useState('');

  
  return(
    <>
     
       <div className=' bg-rose-50 h-screen flex flex-col justify-center items-center'>
       <div className='h-1/2 w-2/4 bg-white'>
       <div className="mx-auto  w-[340px] my-9">
       <h1 className='font-extrabold mt-6 text-4xl text-gray-700'>Verify with OTP</h1>
      
       <div className='w-65 flex flex-row my-20 mx-10' >
      <input type='text' className='border-2 border-black w-12 h-12 text-2xl rounded-xl m-auto text-center  '/>
      <input type='text' className='border-2 border-black w-12 h-12 text-2xl rounded-xl m-auto text-center  '/>
      <input type='text' className='border-2 border-black w-12 h-12 text-2xl rounded-xl m-auto text-center  '/>
      <input type='text' className='border-2 border-black w-12 h-12 text-2xl rounded-xl m-auto text-center  '/>
    </div>

       <div className='font-medium '><h1 className='text-xl sscroll-mb-96'>
              Didn't get OTP?{" "}
              <span className="text-[#ee5f73]">RESEND OTP</span>
            </h1>
            </div>
      
         <div className='mt-7 font-medium'><h1 className='font1 text-xl scroll-mb-96'>
              Have trouble logging in?{" "}
              <span className="text-[#ee5f73]">Get help</span>
            </h1>
            </div>
       </div>
       </div>
       </div>
       
    
    </>
    
      
)
}


export default OTPVerification;
