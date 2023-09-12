import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }) => {
  if (!project) return null;

  return (
    <Link
      href={project.link}
      target={project.target}
      onClick={() => {
        project.title === "Portfolio"
          ? alert("You are already on this site! 🤩")
          : "";
      }}
      key={project.id}
      className='flex flex-col items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-300 lg:dark:hover:bg-slate-50/50   dark:border-gray-700 bg-gradient-to-tr dark:from-[#dbfefe25] dark:via-[#f9f2ff10] dark:to-[#fff2ec20] from-[#dbfefe] via-[#f9f2ff] to-[#fff2ec]  dark:hover:bg-gray-900'>
      <Image
        loading='lazy'
        src={project.image}
        alt={project.title}
        height='200'
        className='p-6 w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg'
      />
      <div class='flex flex-col justify-between p-4 leading-normal'>
        <h5 class='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
          {project.title}
        </h5>
        <p class='mb-3 font-normal text-gray-700 dark:text-white'>
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