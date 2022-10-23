import Head from 'next/head'
import Link from 'next/link'
import Hero from '../components/common/Hero'
import SignUp from '../components/forms/SignUp'

export default function Home() {
  return (
    <div>
      <Head>
        <title>HFTF - Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height="h-screen -mt-16"/>
      <div className='flex w-full md:h-[55vh] text-gray-600 py-16 sm:py-0 bg-gray-50'>
        <div className='flex flex-wrap w-11/12 md:w-4/6 m-auto'>
          <h1 
            className='text-5xl md:text-6xl font-bold m-auto pb-7'>
              Who Are We...</h1>
          <h3 className='text-normal md:text-xl w-11/12 m-auto text-center pb-10'>We provide concierge service to pet parents and their fur babies. Making every experience stress free. We do all the running around for you, with the utmost love and respect for each pet we meet. Striving to always engage with them at their level in respect to their unique personalities, likes and preferences in mind.</h3>
          <Link href="/about">
          <a
            className='bg-black after:text-black after:duration-300 relative after:absolute after:top-0 after:right-full after:bg-white after:z-10 after:w-full after:h-full overflow-hidden hover:after:translate-x-full after:bg-opacity-50 text-white m-auto text-lg py-2 px-5 rounded-lg'>
              Get To Know Us
          </a>
          </Link>
        </div>
      </div>
      <div className='flex w-full text-gray-600 py-16  bg-gray-50'>
        <div className='flex w-10/12 m-auto sm:py-36'>
        <div className='w-1/2'>
          <h1 className='text-5xl md:text-6xl font-bold'>How We Started...</h1>
          <p className='text-normal md:text-xl py-10'>We provide concierge service to pet parents and their fur babies. Making every experience stress free. We do all the running around for you, with the utmost love and respect for each pet we meet. Striving to always engage with them at their level in respect to their unique personalities, likes and preferences in mind.</p>
        </div>
        <div className='w-1/2 px-20'>
            <div className='bg-gray-500 h-[70vh] -mt-[18vh] rounded-xl border-white border-4 shadow'>

            </div>
        </div>
        </div>
      </div>
      <div className='flex w-full text-gray-600 py-16 sm:py-26  bg-gray-50'>
        <div className='flex w-10/12 m-auto'>
        <div className='w-1/2 px-12 mr-16'>
          <div className='bg-gray-500 h-[70vh] -mt-[12vh] rounded-xl border-white border-4 shadow'>

          </div>
        </div>
        <div className='w-1/2'>
          <h1 className='text-5xl md:text-6xl font-bold'>What we Do...</h1>
          <p className='text-normal md:text-xl py-10'>We provide concierge service to pet parents and their fur babies. Making every experience stress free. We do all the running around for you, with the utmost love and respect for each pet we meet. Striving to always engage with them at their level in respect to their unique personalities, likes and preferences in mind.</p>
          <Link href="/volunteer">
          <a
            className='bg-black text-white m-auto text-lg py-2 px-5 rounded-lg'>
              Want To Help
          </a>
          </Link>
        </div>
        </div>
      </div>
      <SignUp />
    </div>
  )
}
