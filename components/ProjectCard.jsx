import Image from "next/image";
import Link from "next/link";

import data from "../data/work";
const ProjectCard = () => {
  return (
    <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3'>
      {data.map((project) => {
        return (
          <div
            className='rounded-lg mb-12 flex flex-col items-center'
            key={project.id}>
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}>
              <Image
                loading='lazy'
                src={project.image}
                alt={project.title}
                width='200'
                className='rounded-md drop-shadow-2xl hover:scale-110'
              />
            </Link>
            <div className='flex flex-col items-center'>
              <h1 className='font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white'>
                {project.title}
              </h1>
              <p className='max-w-[90%] text-gray-400 font-light text-center'>
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
