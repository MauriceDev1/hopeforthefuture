import Link from 'next/link'
import React from 'react'
import { 
    FaFacebook,
    FaTiktok,
    FaInstagram,
    FaFacebookMessenger
} from 'react-icons/fa';

export default function Footer() {
  return (
    <div className='flex w-full bg-black py-10'>
        <div className='flex flex-wrap w-8/12 m-auto py-12'>
          <div className='w-full md:w-1/4 pr-8'>
            {/* <Image
              src={WhiteLogo} 
              alt="Company Logo" 
              width={200} 
              height={70} /> */}
            <p className='text-white pt-5 text-sm'>Community based NGO for </p>            
          </div>
          <div className='w-full md:w-1/4 mt-5'>
            <h3 className='text-white font-semibold'>Organization</h3>
            <ul className='text-white pt-3'>
              <Link href="/">
                <a>
                  <li>Home</li>
                </a>
              </Link>
              <Link href="/about">
                <a>
                  <li>About</li>
                </a>
              </Link>
              <Link href="/programs">
                <a>
                  <li>Programs</li>
                </a>
              </Link>
              <Link href="/donation">
                <a>
                  <li>Donate</li>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <li>Contact</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mt-5'>
            <h3 className='text-white font-semibold'>More</h3>
            <ul className='text-white pt-3'>
              <Link href="/blog">
                <a>
                  <li>Blog</li>
                </a>
              </Link>
              <Link href="/volunteer">
                <a>
                  <li>Volunteer </li>
                </a>
              </Link>
              <Link href="/events">
                <a>
                  <li>Eventes</li>
                </a>
              </Link>
            </ul>
          </div>
          <div className='w-full md:w-1/4 mt-5'>
            <h3 className='text-white font-semibold'>Social Media</h3>
            <div className='flex text-white mt-5 text-lg'>
              <div className='pr-5 mt-1'>
                <Link href="">
                  <FaFacebook /> 
                </Link>
              </div>
              <div className='px-5 mt-1'>
                <Link href="">
                  <FaTiktok />
                </Link>
              </div>
              <div className='px-5 mt-1'>
                <Link href="">
                  <FaInstagram />
                </Link>
              </div>
              <div className='px-5 mt-1'>
                <Link href="">
                  <FaFacebookMessenger />
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
