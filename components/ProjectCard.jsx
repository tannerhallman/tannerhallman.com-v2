import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  const isLiquibase = project.slug === "liquibase";
  const isSika = project.slug === "sikahealth";

  return (
    <Link
      href={project.link}
      target={project.target}
      key={project.id}
      className='flex flex-col items-center border border-gray-200 rounded-xl md:flex-row md:max-w-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors duration-200 w-full'>
      {project.image ? (
        <Image
          loading='lazy'
          src={project.image}
          alt={project.title}
          height='200'
          className={`p-6 w-full rounded-t-lg h-48 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg object-contain ${
            isLiquibase ? 'liquibase-logo' : ''
          } ${isSika ? 'sika-logo' : ''}`}
        />
      ) : (
        <div className='p-6 w-full md:w-48 h-48 md:h-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-t-xl md:rounded-l-xl md:rounded-tr-none'>
          <span className='text-4xl font-bold text-gray-300 dark:text-gray-600'>
            {project.title.charAt(0)}
          </span>
        </div>
      )}
      <div className='flex flex-col justify-between p-6 leading-normal'>
        <h5 className='mb-1 text-xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {project.title}
        </h5>
        <p className='mb-2 text-sm text-gray-500 dark:text-gray-400 font-medium'>
          {project.subtext}
        </p>
        <p className='text-gray-600 dark:text-gray-300 text-sm'>
          {project.description}
        </p>
      </div>
    </Link>
  );
};

export default ProjectCard;

// return (
//   <div
//     className='rounded-lg mb-12 flex flex-col items-center hover:scale-110'
//     key={project.id}>
//     <Link
//       href={project.link}
//       target={project.target}
//       onClick={() => {
//         project.title === "Portfolio"
//           ? alert("You are already on this site! 🤩")
//           : "";
//       }}>
//       <Image
//         loading='lazy'
//         src={project.image}
//         alt={project.title}
//         height='200'
//         className='rounded-md drop-shadow-2xl '
//       />
//     </Link>
//     <div className='flex flex-col items-center'>
//       <h1 className='font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white'>
//         {project.title}
//       </h1>
//       <p className='max-w-[90%] text-gray-400 font-light text-center'>
//         {project.description}
//       </p>
//     </div>
//   </div>
// );