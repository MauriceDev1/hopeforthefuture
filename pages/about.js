import Head from 'next/head'
import Hero from '../components/common/Hero'
import SignUp from '../components/forms/SignUp'
import Intro from '../components/site/about/Intro'

export default function About() {
  return (
    <div>
      <Head>
        <title>HFTF - About</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero height="h-96 -mt-16"/>
      <Intro />
      <SignUp />
    </div>
  )
}
