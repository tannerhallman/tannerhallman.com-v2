import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";
import data from "../data/projects";

export default function Work() {
  return (
    <div className='px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>Work • Tanner Hallman</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='min-h-screen max-w-screen'>
        <div className='pt-24 flex flex-col items-center mx-auto'>
          <h2 className='font-deca text-gray-900 dark:text-white items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
            My Work
          </h2>

          <p className='mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2 text-gray-600 dark:text-gray-400'>
            A collection of projects I've built and contributed to, spanning
            enterprise SaaS platforms, healthcare technology, and blockchain applications.
          </p>
        </div>
        <div className='my-20'>
          <div className='grid sm:grid-cols-1 gap-y-8 items-center justify-items-center'>
            {data.map((project, index) => (
              <ProjectCard key={`project-${index}`} project={project} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
