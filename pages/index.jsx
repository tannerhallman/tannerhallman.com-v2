import Contact from "@/components/Contact";
import Experience from "@/components/Experience";

import { useTheme } from "next-themes";

import Image from "next/image";
import Head from "next/head";

import { useEffect } from "react";

import Avatar_Black from "../public/Avatar.jpg";
import Avatar_White from "../public/Avatar.jpg";

export default function Home() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Tanner Hallman %c %c🚀 %c\n",
      "color: #fff; background: #3b82f6; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c I am currently looking for my next venture.\n",
      "color: #fff; background: #3b82f6; padding:5px 0;",
    ]);
  }, []);

  return (
    <>
      <Head>
        <title>Tanner Hallman • Software Engineer</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
        <div className='mb-24 max-w-[90rem] mx-auto'>
          <div className='flex flex-row justify-start items-center mt-20'>
            {currentTheme === "dark" ? (
              <Image
                src={Avatar_White}
                className='rounded-lg border-white border-2'
                alt='tanner'
                width='100'
                height='100'
              />
            ) : (
              <Image
                src={Avatar_Black}
                className='rounded-lg'
                alt='tanner'
                width='100'
                height='100'
              />
            )}
            <div className='flex flex-col ml-4'>
              <h3 className='font-medium text-gray-500 dark:text-gray-400 sm:text-lg md:text-lg lg:text-xl'>
                Welcome
              </h3>
              <h2 className='font-bold sm:text-2xl md:text-2xl lg:text-4xl text-gray-900 dark:text-white'>
                I'm Tanner Hallman
              </h2>
              <h4 className='text-gray-500 dark:text-gray-400 font-medium sm:text-lg md:text-lg lg:text-xl'>
                Software Engineer (Ex-Founder & CTO)
              </h4>
            </div>
          </div>
          <div className='mt-12 text-base md:text-lg lg:text-xl'>
            <p className='font-normal text-gray-700 dark:text-gray-300 leading-relaxed'>
              I'm a software engineer with a passion for building products that make a difference.
              Currently at <span className='font-semibold text-gray-900 dark:text-white'>Liquibase</span>,
              building cloud-native database migration tools. Previously, I co-founded{" "}
              <span className='font-semibold text-gray-900 dark:text-white'>Coworks</span> -
              a SaaS platform for coworking spaces that grew to ~$500k ARR, hundreds of customers,
              and ~$1M in seed funding. I specialize in full-stack development,
              cloud architecture, and turning complex problems into elegant solutions.
            </p>
          </div>
        </div>
        <div className='mt-4 mx-auto'>
          <Experience />
        </div>
        <div className='mt-4 mx-auto '>
          <Contact />
        </div>
      </div>
    </>
  );
}
