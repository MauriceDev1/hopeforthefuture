import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [loading,setLoading] = useState(false);
  
  const onSubmit = async(data) => {
    const {firstName,email,phone,subject,message} = data;
    if(firstName){
        setLoading(!loading)
        console.log(data)
        setTimeout(() => {
            setLoading(false)
        }, 5000);
    }else{
        setLoading(false)
    }
    await axios.post("http://localhost:5000/subform",{data:data})
    .then(res => console.log(res))
    .catch(err => console.log(err));
  }; 

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className='w-full'>
        <div className='text-gray-600'>Name</div>
        <input className='w-full  bg-cream-vanessa rounded p-2 my-2 border border-gray-500' type="text" {...register("firstName", { required: true, maxLength: 20 })} />
        {errors.firstName && <span className='text-red-600 text-sm'>This field is required</span>}
        <div className='text-gray-600'>Email</div>
        <input className='w-full bg-cream-vanessa rounded p-2 my-2 border border-gray-500' type="email" {...register("email", { required: true, maxLength: 20 })}/>
        {errors.email && <span className='text-red-600 text-sm'>This field is required</span>}
        <div className='text-gray-600'>Phone</div>
        <input className='w-full bg-cream-vanessa rounded p-2 my-2 border border-gray-500' type="tel" {...register("phone", { required: true, maxLength: 20 })}/>
        {errors.phone && <span className='text-red-600 text-sm'>This field is required</span>}
        <div className='text-gray-600'>Subject</div>
        <select className='w-full bg-cream-vanessa rounded p-2 my-2 border border-gray-500' {...register("subject", { required: true, maxLength: 20 })}>
            <option>Select</option>
            <option value="information">Information</option>
            <option value="complaint">Complaint</option>
            <option value="booking">Booking</option>
            <option value="help">Help</option>
        </select>
        {errors.subject && <span className='text-red-600'>This field is required</span>}
        <div className='text-gray-600'>Message</div>
        <textarea className='w-full bg-cream-vanessa rounded p-2 h-36 my-2 border border-gray-500' style={{resize:'none'}} {...register("message")}/>
        {errors.message && <span className='text-red-600 text-sm'>This field is required</span>}
        <button className="bg-black text-white w-full py-2 rounded">
        {loading ? <div className='flex w-full'><div class="loader2 m-auto"></div></div> : 'Send Message'}
        </button>
    </form>
  )
}