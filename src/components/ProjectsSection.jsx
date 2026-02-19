import { ArrowRight, ExternalLink, Github } from "lucide-react";
//import financeImg from "./finance-mgmt.png";

const projects = [
  {
    id: 1,
    title: "Finance Tracker",
    description:
      "A personal finance tracking app with real-time data sync, expense categorization, and insightful spending summaries powered by Firebase.",
    image:"/projects/finance-mgmt.png",
    tags: ["React", "Firebase", "TailwindCSS"],
    demoUrl: "https://finance-tracker-zeta-opal.vercel.app",
    githubUrl: "https://github.com/raghav-ri/Finance-Tracker.git",
  },
  {
    id: 2,
    title: "Study Planner App",
    description:
      "A browser-based study planner with task scheduling, progress tracking, and persistent storage using localStorage — no frameworks needed.",
    image: "/projects/proj5.png",
    tags: ["HTML", "CSS", "JavaScript", "localStorage"],
    demoUrl: "https://study-smart-amber.vercel.app",
    githubUrl: "https://github.com/raghav-ri/StudySmart.git",
  },
  {
    id: 3,
    title: "Static Website on AWS S3",
    description:
      "A fully static website hosted on Amazon S3 with a custom index page and error handling page, deployed for fast and reliable global access.",
    image: "/projects/proj6.png",
    tags: ["AWS S3", "HTML", "Static Hosting"],
    demoUrl: "http://raghav-static-wbpage.s3-website.us-east-2.amazonaws.com/",
    githubUrl: "https://github.com/raghav-ri/Static-webpage-using-s3.git",
  },
  {
    id: 4,
    title: "Spam Detection Application",
    description:
      "An intelligent SMS spam detection app built with machine learning and React, delivering a clean and responsive UI powered by Tailwind CSS.",
    image: "/projects/proj1.png",
    tags: ["React", "TailwindCSS", "Machine Learning", "Python"],
    demoUrl: "https://spam-detection-two.vercel.app",
    githubUrl: "https://github.com/raghav-ri/Spam-Detection.git",
  },
  {
    id: 5,
    title: "Notesphere",
    description:
      "A full-stack note-taking platform built on the MERN stack with user authentication, rich text editing, and organized note management.",
    image: "/projects/proj3.png",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "https://summer-internship-project-3.onrender.com/",
    githubUrl: "https://github.com/raghav-ri/Summer-Internship-Project.git",
  },
  {
    id: 6,
    title: "Literacy Analytics Dashboard",
    description:
      "An interactive Power BI dashboard visualizing literacy trends across regions, enabling data-driven insights into education outcomes.",
    image: "/projects/proj4.png",
    tags: ["Power BI", "Data Analysis", "DAX"],
    demoUrl: "#",
    githubUrl: "https://github.com/raghav-ri/Literacy-Dashboard.git",
  },
  
  
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/raghav-ri"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
