import { useState } from "react";


const Login = () => {
  const [mobileNumber, setMobileNumber] = useState("");

  const handleMobileNumberChange = (event) => {
    const input = event.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    setMobileNumber(input.slice(0, 10)); // Limit to 10 digits
  };

  return (
    <div>
       <div className=' bg-rose-50 h-screen flex flex-col justify-center items-center'>
       <div className='h-96 w-96 bg-white'> 
       {/* <img src={} className='w-auto min-h-[150px]'/> */}
          <div className="mx-auto w-[340px] my-9">
          <h1 className='font-extrabold text-2xl mt-4 text-gray-700'>Login <span className=' font-normal text-sm'> or</span><span className='font-extrabold text-2xl mt-4'> Signup </span></h1>
           
            
            <div className="relative">
              <span className="absolute left-3 top-2 text-gray-500">+91 </span>
             <div className='mt-7'>
               <input 
                type="tel"
                id="mobileNumber"
                value={mobileNumber}
                onChange={handleMobileNumberChange}
                maxLength="10" // Maximum length excluding the +91 code
                placeholder="   Mobile Number*"
                className="pl-10 w-full h-10 border-[1px] focus:border-[#353535] focus:border-[1px] focus:outline-none border-[#6a696993] p-2 web appearance-none"
              />
              </div>
            </div>
            <h1 className=' mt-7 text-xs text-gray-600'>By continuing,I agree to the <span className
             =' mt-4 text-rose-500 font-bold'>Terms of Use</span> & <span className='mt-4 text-rose-500 font-bold'>Privacy Policy</span></h1>
            <div className='mt-4'>
              <button type="submit"
              className='bg-black text-white w-full font-semibold text-lg py-[6px] my-5 hover:bg-red-500'            >
              CONTINUE
            </button>
            </div>
            <h1 className="font1 text-sm">
              Have trouble logging in?{" "}
              <span className="text-[#ee5f73]">Get help</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;