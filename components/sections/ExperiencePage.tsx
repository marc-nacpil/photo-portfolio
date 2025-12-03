import { Download } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";

const ExperiencePage = () => {
  const experience = [
    {
      period: "Aug 2025 - Present",
      title: "Associate Software Developer",
      description:
        "Built and maintained multiple client websites and e-commerce platforms. Collaborated with design teams to implement pixel-perfect UI/UX designs.",
      company: "Cloudstaff",
    },
    {
      period: "Nov 2024 - March 2025",
      title: "Full Stack Developer Intern",
      description:
        "Developed responsive web applications using modern JavaScript frameworks. Optimized performance and accessibility across multiple projects.",
      company: "IT Squarehub",
    },
    {
      period: "Jun 2019 - Dec 2020",
      title: "Parish Media Volunteer",
      description:
        "Assisted in building web applications and learning modern development practices. Contributed to team projects and code reviews.",
      company: "Parroquia De San Agustin - Lubao",
    },
  ];

  return (
    <section
      className="py-32 px-36 justify-center items-center flex flex-col dark:text-white"
      id="experience"
    >
      <div className="container space-y-10 lg:space-y-20">
        <div className="flex w-full items-end justify-between">
          <h1 className="text-5xl font-semibold tracking-tighter lg:text-6xl">
            Experience
          </h1>
          <Button variant="ghost" size="lg" className="font-semibold">
            Download CV <Download className="size-4" />
          </Button>
        </div>

        <ul>
          {experience.map((exp, index) => (
            <li
              key={index}
              className="flex flex-col justify-between border-b py-10 md:flex-row"
            >
              <div className="max-w-lg text-xl font-semibold tracking-tighter lg:w-1/3">
                {exp.period}
              </div>
              <div className="lg:w-1/3">
                <h2 className="mb-4 text-2xl font-semibold tracking-tighter">
                  {exp.title}
                </h2>
                <p className="text-foreground/50">{exp.description}</p>
              </div>
              <div className="text-right lg:w-1/4">{exp.company}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export { ExperiencePage };
