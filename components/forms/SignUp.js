import axios from 'axios';
import React, { useState } from 'react'

export default function SignUp() {
  const [email,setEmail] = useState();
  const [loading,setLoading] = useState(false);

  const subscribe = async() => {
    setLoading(!loading)
    if(email){
        console.log('Maurice')
        setTimeout(() => {
            setLoading(false);
        }, 4000);
    }else{
        setLoading(false);
    }
    await axios.post("http://localhost:5000/subscribe",{email:email})
    .then(res => {
        console.log(res)
        setEmail('')
    })
    .catch(err => {
        console.log(err)
        setEmail('')
    });
  }

  return (
    <div 
    className='flex flex-wrap w-full py-5 bg-gray-100'>
    <div className='flex flex-wrap w-10/12 md:w-7/12 m-auto'>
      <div className='flex w-full'>
        <h1 
            className='text-5xl md:text-5xl font-semibold m-auto pb-10 text-cream-vanessa'>Subscribe to our Newsletters</h1>
      </div>
      <div className='flex w-full md:w-9/12 m-auto pb-1'>
      <input
       type="email" 
       name="email"
       onChange={(e) => setEmail(e.target.value)} 
       placeholder="your@emai.com" 
       value={email} 
       className='text-center outline-none border border-gray-300 text-normal md:text-lg w-9/12 h-12 rounded-l-lg'/>
      <button 
        className='w-4/12 md:w-3/12 h-12 rounded-r-lg text-white text-md md:text-lg bg-black'
        onClick={subscribe}
      >
        {loading ? <div className='flex w-full'><div class="loader m-auto"></div></div> : 'Subscribe'}</button>
      </div>
    </div>
  </div>
  )
}