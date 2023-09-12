"use client";
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import data from "../../data/projects";
import { useRouter } from "next/router";
export default function ProjectName({}) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // get project from params
  const router = useRouter();
  const { projectName } = router.query;

  // get project data
  const project = data.find(
    (project) => project.slug === projectName.toLowerCase()
  );

  if (!project) return null;
  debugger;
  return (
    <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>{projectName} • work</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='  max-w-screen '>
        <div className=' mx-auto pt-16 -pb-10 max-w-7xl'>
          <div className=' mx-auto flex flex-col text-center justify-center'>
            <Image
              loading='lazy'
              src={project?.image}
              alt=''
              height={150}
              className='drop-shadow-2xl mt-10 justify-self-center self-center'
            />
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-blue-900 via-blue-400 to-blue-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              {project.title}
            </h1>
          </div>
          <div className=' mx-auto flex flex-col text-center justify-center'>
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}>
              {project?.subtext}
            </h4>
          </div>
          <div className='flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4'>
            <div className='group border-blue-400 hover:bg-blue-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300 '>
              <Link
                href={project?.liveURL}
                target='_blank'
                className='flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base'>
                <FiFileText className='dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white ' />
                <p>Live Site</p>
              </Link>
            </div>
            <div className=' group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300'>
              <Link
                href={
                  project?.githubURL === undefined ? "/" : project?.githubURL
                }
                target='_blank'
                disabled={project?.githubURL === undefined}
                className='flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base  '>
                <FaGithub className=' dark:stroke-white stroke-blue-400 stroke-2 group-hover:stroke-white ' />
                <p>
                  Code
                  {project?.githubURL === undefined ? " (Closed Source)" : ""}
                </p>
              </Link>
            </div>
          </div>
          <div className=' mx-auto flex flex-col '>
            {project?.paragraphs?.map((pg, index) => {
              return (
                <h4
                  key={`${project?.title}-${index}`}
                  className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}>
                  {pg}
                </h4>
              );
            })}
          </div>
          {project?.productShots?.map((shot, index) => (
            <Image
              key={`product-shot-${index}`}
              loading='lazy'
              src={shot}
              alt=''
              width='max'
              className='drop-shadow-2xl mt-10'
            />
          ))}
        </div>
      </main>
    </div>
  );
}
