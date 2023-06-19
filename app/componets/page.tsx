import Image from 'next/image'
import Head from 'next/head'
import { BsMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import profilePic from '../public/profPic.png'
import React, { useState } from 'react';

function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div>
      <Head>
        <title>Gaston Zampaglione</title>
      </Head>
      <main className=" bg-white max-w-screen px-10" data-test='background'>
        <section data-test='mainBody' className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-2xl font-LouisBold' data-test='welcome'>Welcome</h1>
            <ul className='flex items-center' data-test='topButons'>
              <li data-test='darkThemeIcon'><BsMoonStarsFill className='cursor-pointer text-2xl' /></li>
              <li data-test='linkedinIcon'><a href='https://www.linkedin.com/in/gastonzampaglione/' target="_blank"> <button type="button" className="text-2xl bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500  px-4 py-2 rounded-xl ml-8">
                <div>
                  <AiFillLinkedin />
                </div>
              </button> </a></li>
            </ul>
          </nav>
          <div data-test='info' className='text-center p-3'>
            <h2 className='text-5xl font-LouisLight' data-test='firstName'>Gastón Alberto</h2>
            <h3 className='text-6xl font-LouisBold font-bold' data-test='lastName'>Zampaglione Mujica</h3>
            <h4 className='text-2xl p-6 font-LouisLight' data-test='position'> QA Automation | QA Manual</h4>
          </div>
          <div className="mx-auto items-center justify-center" data-test='profilePic'>
            <div className="mx-auto h-80 w-80 rounded-s-full rounded-e-full bg-gradient-to-r from-blue-800 via-red-700 to-orange-800 p-1">
              <div className="bg-gray-800 rounded-full overflow-hidden">
                <Image src={profilePic} alt='profile picture' />
              </div>
            </div>
          </div>
          <section className='flex pb-10 ml-20 mb-20 mt-10'>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-white dark:border-gray-700  m-2" data-test='cypressCard'>
            <div className="flex flex-col items-center p-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Cypress.io</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Cypress</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
              </div>
            </div>
          </div>
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow dark:bg-white dark:border-gray-700  m-2" data-test='seleniumCard'>
            <div className="flex flex-col items-center p-10">
              <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="image" />
              <h5 className="mb-1 text-xl font-medium text-gray-900">Selenium</h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">Selenium</span>
              <div className="flex mt-4 space-x-3 md:mt-6">
                <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
              </div>
            </div>
          </div>
        </section>
        </section>

      </main>
    </div>
  )
}

export default Home