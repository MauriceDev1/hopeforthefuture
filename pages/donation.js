import Head from 'next/head'
import Hero from '../components/common/Hero'
import PaymentForm from '../components/forms/PaymentForm'

export default function Donation() {
  return (
    <div>
      <Head>
        <title>HFTF - Donation</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height="h-96 -mt-16"/>
      <div className='flex flex-wrap w-full py-10 bg-gray-50'>
        <div className='w-10/12 m-auto py-5 px-3'>
          <p className='text-gray-600'>Help us continue all the good work that we have done thus far, it is because of people such as yourself that allows us to continue providing our services in and around our community. We really appreciate your contribution</p>
        </div>
        <PaymentForm />
      </div>
    </div>
  )
}