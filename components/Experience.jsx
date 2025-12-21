import { BsArrowUpRight } from "react-icons/bs";
import Link from "next/link";

const Experience = () => {
  const years = new Date().getUTCFullYear() - 2015;
  return (
    <div className='mt-8 lg:mt-8 flex flex-col justify-start space-y-8 mx-auto items-center'>
      <div className='bg-gray-100 dark:bg-gray-800 w-32 h-32 rounded-xl p-3 select-none border border-gray-200 dark:border-gray-700'>
        <div className='bg-blue-600 h-full w-full flex-col justify-center mx-auto items-center text-center text-white font-medium rounded-lg p-2'>
          <div className='text-4xl font-bold mt-2'>
            <h2>{years}</h2>
          </div>
          <div className='text-xs mt-2 font-medium opacity-90'>
            Years of Experience
          </div>
        </div>
      </div>
      <div className='w-[80%] mx-auto'>
        <p className='text-center max-w-2xl mx-auto tracking-normal leading-relaxed text-base lg:text-lg text-gray-600 dark:text-gray-400'>
          {years} years of building products, scaling teams, and shipping code.
          From co-founding a SaaS startup to architecting enterprise platforms,
          I've worked across the full stack and led teams through every stage of product development.
        </p>
      </div>

      <div className='w-[80%] max-w-2xl mx-auto'>
        <div className='flex justify-center items-center'>
          <Link
            href='/work'
            className='flex items-center font-medium space-x-2 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 transition-colors'>
            <BsArrowUpRight className='stroke-2' />
            <span>See My Work</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
