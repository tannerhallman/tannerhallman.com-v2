import CategoryCard from "@/components/CategoryCard";

import Head from "next/head";
import Image from "next/image";

import { useTheme } from "next-themes";

import { useEffect } from "react";

import aboutImage from "../public/Avatar.jpg";
import Flash from "../public/Flash.svg";
import Rocket from "../public/Rocket.svg";
import Sparkles from "../public/Sparkles.svg";

export default function About() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
    console.log.apply(console, [
      "%c Welcome to my portfolio. Enjoy it!",
      "color: #fff; background: #3b82f6; padding:5px 0;",
    ]);
  }, []);

  return (
    <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>about • tanner</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='  max-w-screen '>
        <div className=' mx-auto pt-16 -pb-10 max-w-7xl'>
          <div className=' mx-auto flex flex-col '>
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              About Me
            </h1>
            <div className='mx-auto transition-all duration-1000 ease-in-out -mt-8 dark:shadow-xs shadow-2xl dark:shadow-blue-50/10 shadow-blue-200 '>
              <Image
                src={aboutImage}
                placeholder='blur'
                height={600}
                width={600}
                className='rounded-2xl select-none drop-shadow-md shadow-blue-200 dark:shadow-orange-100/60 dark:drop-shadow-sm shadow-2xl h-28 w-28 md:h-32 md:w-32 lg:h-40 lg:w-40 border-white border-2'
                alt='tanner hallman'
                priority
              />
            </div>
            <div className='text-center mx-auto mt-8 z-20'>
              <h3 className='mx-auto  font-bold text-lg lg:text-xl xl:text-2xl'>
                Tanner Hallman{" "}
                <span className='inline-flex items-baseline'>
                  <Image
                    src={Rocket}
                    alt='rocket'
                    className='self-center w-8 h-8 mx-1'
                  />
                </span>{" "}
              </h3>
              <p className='text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg '>
                CTO • Co-founder • Entrepreneur
              </p>
            </div>
          </div>
          <CategoryCard />
          <div className=' text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 '>
            <p className='mt-6 mb-12 leading-10 font-normal'>
              A hard-working and dedicated Engineer who loves to build modern
              and user-friendly web applications, scalable & robust APIs, and
              experiences that spark user joy.{" "}
              <span className='inline-flex items-baseline'>
                <Image
                  src={Rocket}
                  alt='rocket'
                  className='self-center w-8 h-8 mx-1'
                />
              </span>{" "}
              I Believe a perfect blend of UI architecture is one, where the
              goals and needs are accounted for in an elegant, efficient, and
              robust design of the UI{" "}
              <span className='inline-flex items-baseline'>
                <Image
                  src={Sparkles}
                  alt='rocket'
                  className='self-center w-8 h-8 mx-1'
                />
              </span>{" "}
              Experience in ReactJS, React Native, NextJS, and state management
              like Redux with proficiency in web technologies like HTML5, CSS3,
              and JavaScript, building large-scale web applications,
              cross-browser platforms, and design constraints on the web, and
              building responsive user interfaces.{" "}
              <span className='inline-flex items-baseline'>
                <Image
                  src={Flash}
                  alt='rocket'
                  className='self-center w-8 h-8 mx-1'
                />
              </span>{" "}
            </p>

            <p className='text-gray-400 select-none font-semibold mb-1 dark:text-white/30 '>
              Contact
            </p>

            <p className=''>
              You can contact me at{" "}
              <span className='text-red-700 font-bold'>Gmail</span>{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("tanner.hallman@gmail.com")
                }
                className=' underline underline-offset-4 decoration-2 decoration-blue-400 group select-all font-semibold dark:hover:text-blue-400 hover:text-blue-700 cursor-pointer select '
                href='mailto:tanner.hallman@gmail.com'>
                {" "}
                tanner.hallman@gmail.com
              </a>{" "}
              or <span className='text-blue-700 font-bold'>LinkedIn</span>{" "}
              <a
                href='http://linkedin.com/in/tannerhallman'
                className=' underline underline-offset-4 decoration-2 decoration-blue-400 font-semibold dark:hover:text-blue-400 hover:text-blue-700 cursor-pointer select'
                rel='noopener noreferrer'
                target='blank'>
                {" "}
                Tanner Hallman{" "}
              </a>{" "}
              or you can DM me on{" "}
              <span className='text-pink-500 font-bold'>Instagram</span>{" "}
              <a
                href='https://instagram.com/tannerhallman'
                target='blank'
                rel='noopener noreferrer'
                className=' font-semibold underline underline-offset-4 decoration-2 decoration-blue-400 dark:hover:text-blue-400 hover:text-blue-700 cursor-pointer select '>
                {" "}
                @tannerhallman{" "}
              </a>{" "}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
