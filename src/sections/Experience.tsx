import Chip from "../components/Chip";

type ExperienceItem = {
  dateRange: string;
  title: string;
  company: string;
  description: string;
  skills?: string[];
};

const Experience = () => {
  const items: ExperienceItem[] = [
    {
      dateRange: "Mar 2023 - May 2025",
      title: "Team Leader & Full Stack Developer",
      company: "IAF",
      description:
        "Led a team in developing advanced full-stack platforms that replaced legacy processes with streamlined, data-driven solutions. Emphasized scalability, usability, and real-time insights to support faster, more informed decision-making across the organization.",
      skills: [
        "Node.js",
        "TypeScript",
        "GraphQL",
        "Next.js",
        "Tailwind CSS",
        "Prisma ORM",
        "PostgreSQL",
        "Git",
        "Team Leadership",
      ],
    },
    {
      dateRange: "Jun 2021 - Mar 2023",
      title: "Full Stack Developer",
      company: "IAF",
      description:
        "Focused on developing full-stack applications for large-scale personnel and operations management. Built efficient, user-friendly systems that streamlined complex workflows and handled data across multiple databases to improve accuracy and convenience.",
      skills: [
        "TypeScript",
        "Node.js",
        "Express.js",
        "React.js",
        "ASP.NET Web API",
        "Microsoft SQL Server",
        "MongoDB",
        "Git",
      ],
    },
    {
      dateRange: "Jul 2020 - Jun 2021",
      title: "Full Stack Developer - Part Time",
      company: "IAF",
      description:
        "Developed an end-to-end system to streamline investigation and decision-making processes by improving accessibility and efficiency in handling complex operational data.",
      skills: [
        "React.js",
        "JavaScript",
        "ASP.NET Web API",
        "Python",
        "Flask",
        "MongoDB",
        "Research Skills",
      ],
    },
  ];

  return (
    <div className="w-full pt-10 text-primary">
      <h1 className="text-lg font-medium">👨‍💻 Experience</h1>

      <hr className="w-full" />
      {items.map((item, index) => {
        const { dateRange, title, company, description, skills } = item;
        return (
          <div
            className="p-1 flex flex-col sm:flex-row gap-y-2 sm:gap-y-0 gap-x-8 mb-6"
            key={index}
          >
            <div className="text-md text-gray-500 w-full sm:w-40 shrink-0">
              {dateRange}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-secondary">
                {title} - {company}
              </h3>
              <p className="text-gray-300">{description}</p>
              {skills && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {skills.map((skill, skillIndex) => (
                    <Chip
                      key={skillIndex}
                      label={skill}
                      variant="default"
                      size="small"
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
