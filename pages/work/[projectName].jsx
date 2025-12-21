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
    (project) => project.slug === projectName?.toLowerCase()
  );

  if (!project) return null;
  return (
    <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>{project.title} • Tanner Hallman</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='max-w-screen'>
        <div className='mx-auto pt-16 -pb-10 max-w-7xl'>
          <div className='mx-auto flex flex-col text-center justify-center'>
            {project?.image && (
              <Image
                loading='lazy'
                src={project?.image}
                alt={project.title}
                height={150}
                className={`mt-10 justify-self-center self-center ${
                  project.slug === 'liquibase' ? 'liquibase-logo' : ''
                } ${project.slug === 'sikahealth' ? 'sika-logo' : ''}`}
              />
            )}
            <h1 className='mt-6 mb-4 font-deca text-gray-900 dark:text-white items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
              {project.title}
            </h1>
          </div>
          <div className='mx-auto flex flex-col text-center justify-center'>
            <p className='mb-8 font-medium text-gray-500 dark:text-gray-400 items-center mx-auto text-base md:text-lg'>
              {project?.subtext}
            </p>
          </div>
          <div className='flex justify-center space-x-3 md:space-x-4 items-center my-6'>
            <Link
              href={project?.liveURL}
              target='_blank'
              className='flex items-center font-medium space-x-2 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 transition-colors'>
              <FiFileText className='stroke-2' />
              <span>Live Site</span>
            </Link>
            {project?.githubURL && (
              <Link
                href={project?.githubURL}
                target='_blank'
                className='flex items-center font-medium space-x-2 text-sm md:text-base bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg px-4 py-2 transition-colors border border-gray-200 dark:border-gray-700'>
                <FaGithub />
                <span>View Code</span>
              </Link>
            )}
          </div>
          <div className='mx-auto flex flex-col max-w-3xl'>
            {project?.paragraphs?.map((pg, index) => {
              return (
                <p
                  key={`${project?.title}-${index}`}
                  className='mt-6 text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed'>
                  {pg}
                </p>
              );
            })}
          </div>
          {project?.productShots?.length > 0 && (
            <div className='mt-12 space-y-8'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white text-center'>Screenshots</h3>
              {project?.productShots?.map((shot, index) => (
                <Image
                  key={`product-shot-${index}`}
                  loading='lazy'
                  src={shot}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className='rounded-lg border border-gray-200 dark:border-gray-700 shadow-sm'
                />
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
