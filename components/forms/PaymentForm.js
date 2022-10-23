import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';

export default function PaymentForm() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState()
    const [formLoading, setFormLoading] = useState(true)

    const onSubmit = async(data) => {
      const {name} = data;
      if(name){
        setFormData(data)
        setOpen(true)
      }else{
        setIsLoading(false)
      }
      // await axios.post("http://localhost:3000/api/contact",{data:data})
      // .then(res => console.log(res))
      // .catch(err => console.log(err));
    }; 


  return (
    <div className='w-10/12 flex flex-wrap m-auto'>
      <form 
        className='flex w-full'
        onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-wrap w-full px-3'>
          <div className='w-full md:w-1/2'>
            <div className='pb-1 text-sm'>Name</div>
            <input type="text" name="email" className='w-full md:w-11/12 rounded border p-2 border-gray-500' {...register("name", { required: true, maxLength: 20 })}/>
            <div className='pt-1 pb-2 text-sm'>Surname</div>
            <input type="text" name="firstName" className=' w-full md:w-11/12 rounded border p-2 border-gray-500' {...register("surname", { required: true, maxLength: 20, })}/>
            <div className='pt-1 pb-2 text-sm'>Email</div>
            <input type="email" name="lastName" className=' w-full md:w-11/12 rounded border p-2 border-gray-500' {...register("email", { required: true, maxLength: 20 })}/>      
            <div className='pt-1 pb-2 text-sm'>Contact</div>
            <input type="tel" className=' w-full md:w-11/12 rounded border p-2 border-gray-500' {...register("tel", { required: true, maxLength: 20 })}/>
          </div>
          <div className='w-full md:w-1/2'>
            <div className='text-sm pb-1 mt-1 md:mt-0'>Donation Amout</div>
            <input type="number" className=' w-full md:w-11/12 rounded border p-2 border-gray-500' {...register("amount", { required: true, maxLength: 20 })}/>
            <p className='border border-blue-400 p-3 mt-5 w-full md:w-11/12 rounded bg-blue-100 text-blue-500'>Please insure that the amout you have inserted is correct as this amount will be deducted from you credit/debit card. If you are happy you may proceed by clicking the donate button. </p>
            <button className='mt-6 flex bg-black w-full md:w-11/12 text-white py-2 rounded h-10'>
              <p className='m-auto'>Donate</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}