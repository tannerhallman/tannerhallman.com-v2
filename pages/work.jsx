import ProjectCard from "@/components/ProjectCard";
import Head from "next/head";
import data from "../data/projects";

export default function Work() {
  return (
    <div className='px-10 sm:px-20 md:px-32 md:-mb-52 lg:mb-0 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>work • tanner</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='min-h-screen max-w-screen'>
        <div className='pt-24 flex flex-col items-cen mx-auto'>
          <h2
            className={
              "selection:text-black/40 dark:selection:text-white/40 font-deca bg-gradient-to-tr from-teal-300 to-blue-500 bg-clip-text text-transparent items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
            }>
            My Work
          </h2>
          <p className='mt-8 max-w-xl text-center md:w-[70%] mx-auto text-sm font-normal md:text-base lg:text-lg mb-2 '>
            Every project I have worked on has been a learning experience. I
            love using new technologies, and finding out how to improve existing
            platforms, but have also supported many legacy projects.
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
