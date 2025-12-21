import { TfiLinkedin } from "react-icons/tfi";

const Contact = () => {
  return (
    <div className='p-8 md:p-12 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-200 dark:border-gray-700'>
      <h2 className='text-gray-900 dark:text-white text-2xl md:text-3xl font-bold font-deca mb-4'>
        Get in touch
      </h2>
      <p className='text-base md:text-lg text-gray-600 dark:text-gray-400 mb-6'>
        I would love to hear from you!
      </p>
      <a
        href='https://www.linkedin.com/in/tannerhallman'
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center font-medium space-x-2 text-sm md:text-base bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-5 py-2.5 transition-colors'>
        <TfiLinkedin className='h-4 w-4' />
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  );
};

export default Contact;
