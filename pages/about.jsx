import CategoryCard from "@/components/CategoryCard";
import Timeline from "@/components/Timeline";

import Head from "next/head";
import Image from "next/image";

import { useTheme } from "next-themes";

import { useEffect } from "react";

import aboutImage from "../public/Avatar.jpg";

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
        <title>About • Tanner Hallman</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='  max-w-screen '>
        <div className=' mx-auto pt-16 -pb-10 max-w-7xl'>
          <div className=' mx-auto flex flex-col '>
            <h1
              className={`mt-6 mb-12 font-deca text-gray-900 dark:text-white selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
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
              <h3 className='mx-auto font-bold text-lg lg:text-xl xl:text-2xl text-gray-900 dark:text-white'>
                Tanner Hallman
              </h3>
              <p className='text-gray-500 dark:text-gray-400 font-deca font-normal text-xs sm:text-sm md:text-md lg:text-lg'>
                Software Engineer • Ex-Founder & CTO
              </p>
            </div>
          </div>
          <CategoryCard />
          <div className='text-base md:text-lg xl:text-xl mx-auto text-gray-700 dark:text-gray-300'>
            <p className='mt-6 mb-12 leading-relaxed font-normal'>
              I'm a software engineer who loves building products that make a difference.
              Currently at Liquibase, I'm building a greenfield SaaS platform for
              cloud-native database migrations, leading AI initiatives, and designing
              scalable microservices architecture.
            </p>
            <p className='mb-12 leading-relaxed font-normal'>
              Previously, I co-founded Coworks, where I built the entire technical platform
              from the ground up - React dashboards, Rails APIs, React Native mobile apps,
              and Node.js microservices. I've worn many hats: engineer, architect, DevOps,
              product manager, and technical leader.
            </p>
            <p className='mb-12 leading-relaxed font-normal'>
              My toolkit includes TypeScript, React, Node.js, Next.js, Ruby on Rails,
              GraphQL, PostgreSQL, AWS, GCP, Terraform, and Docker. I'm particularly
              passionate about AI/ML integration, developer experience, and building
              systems that scale.
            </p>
          </div>

          <div className='my-16'>
            <Timeline />
          </div>

          <div className='text-base md:text-lg xl:text-xl mx-auto text-gray-700 dark:text-gray-300'>
            <p className='text-gray-400 select-none font-semibold mb-1 dark:text-white/30 '>
              Contact
            </p>

            <p className=''>
              The best way to reach me is on{" "}
              <a
                href='https://linkedin.com/in/tannerhallman'
                className='underline underline-offset-4 decoration-2 decoration-blue-400 font-semibold dark:hover:text-blue-400 hover:text-blue-700 cursor-pointer text-blue-600 dark:text-blue-400'
                rel='noopener noreferrer'
                target='_blank'>
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
