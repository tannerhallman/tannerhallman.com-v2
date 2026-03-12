import Head from "next/head";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { MdCalendarToday, MdCheckCircle, MdAccessTime } from "react-icons/md";

export default function Meet() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  useEffect(() => {
    console.clear();
  }, []);

  const handleSchedule = () => {
    window.location.href = "https://cal.com/tannerhallman/meet?duration=30";
  };

  return (
    <div className='px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]'>
      <Head>
        <title>Schedule a Meeting • Tanner Hallman</title>
        <link rel='icon' href='/Avatar-white.svg' />
      </Head>
      <main className='max-w-screen'>
        <div className='mx-auto pt-16 max-w-7xl'>
          <div className='mx-auto flex flex-col'>
            <h1 className='mt-6 mb-12 font-deca text-gray-900 dark:text-white selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
              Schedule a Meeting
            </h1>

            <div className='mx-auto mb-16 w-full max-w-2xl'>
              <button
                onClick={handleSchedule}
                className='w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-3'>
                <MdCalendarToday className='w-6 h-6' />
                Schedule a 30-minute meeting
              </button>
            </div>

            <div className='text-base md:text-lg xl:text-xl mx-auto text-gray-700 dark:text-gray-300 max-w-2xl'>
              <p className='mb-8 leading-relaxed font-normal'>
                I'm happy to chat about software engineering, product development,
                or anything else you'd like to discuss. Whether you're interested in collaboration,
                seeking advice, or just want to connect – I'm here to help.
              </p>

              <div className='space-y-6 mb-12'>
                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0'>
                    <MdCheckCircle className='w-6 h-6 text-blue-500 mt-1' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>
                      Quick & Easy
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400'>
                      Pick a time that works for you. No back-and-forth emails needed.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0'>
                    <MdAccessTime className='w-6 h-6 text-blue-500 mt-1' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>
                      30 Minutes
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400'>
                      Perfect for introductions, quick questions, or initial conversations.
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 items-start'>
                  <div className='flex-shrink-0'>
                    <MdCalendarToday className='w-6 h-6 text-blue-500 mt-1' />
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 dark:text-white mb-1'>
                      Flexible Schedule
                    </h3>
                    <p className='text-gray-600 dark:text-gray-400'>
                      See my available times and book directly without any hassle.
                    </p>
                  </div>
                </div>
              </div>

              <p className='text-gray-500 dark:text-gray-400 text-sm'>
                If you need more time or have a specific topic in mind, feel free to add a note when scheduling.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
