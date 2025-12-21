const CategoryCard = () => {
  return (
    <div className='flex select-none max-w-lg text-[0.65rem] md:text-sm lg:text-[0.9rem] xl:text-base items-center font-medium justify-between w-[80%] sm:w-[75%] md:w-[70%] lg:w-[65%] xl:w-[60%] mx-auto mt-6 mb-8 gap-2'>
      <div className='bg-blue-50 dark:bg-blue-900/30 rounded-full px-3 py-1 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800'>
        Developer
      </div>
      <div className='bg-emerald-50 dark:bg-emerald-900/30 rounded-full px-3 py-1 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'>
        Entrepreneur
      </div>
      <div className='bg-violet-50 dark:bg-violet-900/30 rounded-full px-3 py-1 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-800'>
        Leader
      </div>
      <div className='bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-1 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700'>
        Strategist
      </div>
    </div>
  );
};

export default CategoryCard;
