const timelineData = [
  {
    year: "2009",
    title: "First Line of Code",
    description: "Wrote my first line of code in high school using Java and Python.",
    tags: ["Java", "Python"],
  },
  {
    year: "2012",
    title: "Mobile Development",
    description: "Started learning Android development and building mobile applications.",
    tags: ["Android", "Java"],
  },
  {
    year: "2014",
    title: "First Published App",
    description: "Published my first Android application to the Google Play Store.",
    tags: ["Android", "Java"],
  },
  {
    year: "2015",
    title: "Started Professional Career",
    description: "Joined Credit Suisse as a Disaster Recovery Software Engineer.",
    tags: ["JavaScript", "Enterprise"],
  },
  {
    year: "2016",
    title: "Frontend Development",
    description: "Started working with React and modern frontend development.",
    tags: ["React", "JavaScript"],
  },
  {
    year: "2017",
    title: "Backend Development",
    description: "Picked up Ruby on Rails and expanded into full backend development.",
    tags: ["Rails", "Ruby"],
  },
  {
    year: "2018",
    title: "Full Stack",
    description: "Added Node.js to the toolkit, becoming a true full-stack developer.",
    tags: ["Node.js", "Full Stack"],
  },
  {
    year: "2019",
    title: "Co-Founded Coworks",
    description: "Co-founded Coworks and joined Techstars Proptech Accelerator.",
    tags: ["Startup", "CTO"],
  },
  {
    year: "2023",
    title: "Sika Health",
    description: "Joined Sika Health as Senior Software Engineer, working on healthcare fintech.",
    tags: ["TypeScript", "GCP"],
  },
  {
    year: "2024",
    title: "Liquibase",
    description: "Joined Liquibase to build cloud-native database migration tools.",
    tags: ["Cloud", "AI"],
  },
];

const Timeline = () => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
        My Journey
      </h2>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

        {timelineData.map((item, index) => (
          <div
            key={item.year}
            className={`relative flex items-start mb-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Year bubble */}
            <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center z-10">
              <div className="w-3 h-3 bg-white rounded-full" />
            </div>

            {/* Content card */}
            <div
              className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                index % 2 === 0 ? "md:pr-8" : "md:pl-8"
              }`}
            >
              <div className="bg-white dark:bg-gray-800 p-4 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                  {item.year}
                </span>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
