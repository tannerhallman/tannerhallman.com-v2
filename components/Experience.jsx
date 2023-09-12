import Image from "next/image";

import { FiFileText } from "react-icons/fi";
import { BsArrowUpRight } from "react-icons/bs";

import Link from "next/link";

import PIN from "../public/PIN.jpg";
import Textures from "../public/Textures.jpg";

const Experience = () => {
  const years = new Date().getUTCFullYear() - 2015;
  return (
    <div className=' mt-8 lg:mt-8 flex flex-col justify-start space-y-12 mx-auto items-center'>
      <div className='bg-blue-300 w-36 h-36 rounded-lg p-4 select-none '>
        <div className='bg-blue-400  h-28 w-28 flex-col justify-end mx-auto blur-none z-40 items-center text-center text-xl text-white font-medium rounded-lg p-2'>
          <div className='basis-[60%] text-5xl font-black '>
            <h2 className='text-border mt-1 '>{years}</h2>
          </div>
          <div className='basis-[30%] text-xs mt-3 font-bold'>
            Years of Experience
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto'>
        <div className='text-center max-w-2xl mx-auto tracking-normal leading-5 text-base lg:text-lg'>
          During these {years} years, I have spent time developing, scaling a
          SaaS company, building a tech team, and managing many different
          projects. I have launched production apps in web, mobile, and backend
          technologies. I have developed a unique skill set that allows me to
          build for the long-term strategy while still making the day-to-day
          productive and efficient. I have enjoyed every minute of my journey.
        </div>
      </div>

      <div className='w-[80%] max-w-2xl mx-auto'>
        <div className='flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4'>
          <div className='group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl text-blue-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300 '>
            <Link
              href='/Resume-Tanner-Hallman.pdf'
              target='_blank'
              className='flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base'>
              <FiFileText className='dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white ' />
              <p>Download My Resume</p>
            </Link>
          </div>
          <div className=' group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300'>
            <Link
              href='/work'
              className='flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  '>
              <BsArrowUpRight className=' dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white ' />
              <p>See My Work</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
