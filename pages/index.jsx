import Blob from "@/components/Blob";
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
        <title>tanner • cto & co-founder</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <div className='lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
        <div className='lg:h-screen 2xl:h-max max-w-[90rem] mx-auto'>
          <Blob />
          <div className='flex flex-row justify-start items-center mt-20'>
            {currentTheme === "dark" ? (
              <Image
                src={Avatar_White}
                className='rounded-lg'
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
              <h2 className='font-bold sm:text-2xl md:text-2xl lg:text-4xl'>
                tanner hallman
              </h2>
              <h4 className='text-gray-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl'>
                🚀
              </h4>
            </div>
          </div>
          <div className='mt-12 m:text-xl md:text-xl lg:text-2xl'>
            <p className='font-light sm:leading-6 md:leading-6 lg:leading-8'>
              With a fervent passion for technology and innovation, I have
              carved a niche for myself in native mobile app development,
              immersive web app experiences, and intricate backend application
              constructions. My journey includes co-founding and building{" "}
              <span className='font-medium select-none animate-text bg-gradient-to-br from-[#33475B] dark:from-[#1a6c6c] via-[#fff4f4] dark:via-[#fff] dark:text-black  text-border2 to-[#269796] dark:to-[#269796] rounded px-2 py-[0.05rem] '>
                Coworks
              </span>{" "}
              - a groundbreaking SaaS product tailored for coworking spaces.
              Under my leadership, Coworks transcended from a mere idea to a
              venture boasting an ARR of ~500k, hundreds of loyal customers, and
              an impressive ~$1 million seed funding.
            </p>
          </div>
        </div>
        <div className='mt-28 mx-auto'>
          <Experience />
        </div>
        <div className='mt-28 mx-auto '>
          <Contact />
        </div>
      </div>
    </>
  );
}
