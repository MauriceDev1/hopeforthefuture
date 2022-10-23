import Head from 'next/head'
import Hero from '../components/common/Hero'
import SignUp from '../components/forms/SignUp'

export default function Programs() {
  return (
    <div>
      <Head>
        <title>HFTF - Programs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height="h-96 -mt-16"/>
      <SignUp />
    </div>
  )
}