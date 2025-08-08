type EducationItem = {
  dateRange: string;
  degree: string;
  school: string;
  schoolUrl?: string;
  description: string;
};

const Education = () => {
  const items: EducationItem[] = [
    {
      dateRange: "Oct 2023 - Oct 2026",
      degree: "Bachelor of Science, Computer Science",
      school: "Holon Institute of Technology",
      schoolUrl: "https://www.hit.ac.il/",
      description: "Currently pursuing a B.Sc. in Computer Science.",
    },
    {
      dateRange: "Sep 2019 - Jun 2021",
      degree: "Practical Software Engineer, Computer Science",
      school: "ORT Singalovski, Tel Aviv",
      schoolUrl: "https://c.ort.org.il/singalovski-telaviv/",
      description:
        "Graduated with a degree in Practical Software Engineering with distinction.",
    },
  ];

  return (
    <div className="w-full pt-10 text-primary">
      <h1 className="text-lg font-medium">📚 Education</h1>

      <hr className="w-full" />

      {items.map((item, index) => {
        const { dateRange, degree, school, schoolUrl, description } = item;
        return (
          <div
            className="p-1 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-8 mb-6"
            key={index}
          >
            <div className="text-md text-gray-500 w-full sm:w-40 shrink-0">
              {dateRange}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary">{degree}</h3>
              <p className="text-gray-300 flex items-center gap-1">
                {school}
                {schoolUrl && (
                  <a href={schoolUrl} target="_blank" rel="noopener noreferrer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-external-link-icon lucide-external-link"
                    >
                      <path d="M15 3h6v6" />
                      <path d="M10 14 21 3" />
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    </svg>
                  </a>
                )}
              </p>
              <p className="text-gray-400 text-sm">{description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Education;
