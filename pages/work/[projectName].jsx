"use client";
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { useTheme } from "next-themes";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import aizen from "../../public/work/aizen.png";
import data from "../../data/work";
import { useRouter } from "next/router";
export default function ProjectName({}) {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // get project from params
  const router = useRouter();
  const { projectName } = router.query;

  // get project data
  const project = data.find((project) => project.title === projectName);
  return (
    <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>{projectName} • work</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='  max-w-screen '>
        <div className=' mx-auto pt-16 -pb-10 max-w-7xl'>
          <div className=' mx-auto flex flex-col text-center justify-center'>
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}>
              {projectName}
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
                <p>See It</p>
              </Link>
            </div>
            <div className=' group border-blue-400 hover:bg-blue-400 text-blue-500 hover:text-white hover:drop-shadow-2xl rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-blue-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-blue-300'>
              <Link
                href={project?.githubURL}
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
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}>
              I developed an advanced tool using ReactJS and TypeScript that
              empowers users to effortlessly generate eye-catching images and
              GIFs of their source code. Leveraging the powerful GIF Shot
              library, the tool allows users to capture and convert their source
              code into dynamic and shareable GIFs, providing an engaging and
              interactive way to showcase their code.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}>
              In addition to the GIF Shot integration, the tool features a
              user-friendly code editor. By incorporating technologies like Code
              Editor, users can enjoy a seamless coding experience while
              creating stunning visuals of their source code. The code editor
              provides a familiar and intuitive interface with syntax
              highlighting, auto-completion, and other helpful features that
              enhance the coding workflow.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}>
              With this feature-rich tool, users can not only write code but
              also transform it into visually appealing images and GIFs. Whether
              it's for sharing on social media, presenting code snippets in
              presentations, or simply adding visual interest to their projects,
              this tool provides a seamless and efficient solution. By combining
              ReactJS, TypeScript, GIF Shot, and Code Editor technologies, the
              tool offers a powerful and versatile platform for developers to
              showcase their coding skills and create captivating visuals of
              their source code.
            </h4>
          </div>
          <Image
            loading='lazy'
            src={aizen}
            alt=''
            width='max'
            className='drop-shadow-2xl mt-10'
          />
        </div>
      </main>
    </div>
  );
}
