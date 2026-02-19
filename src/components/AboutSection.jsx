import { Briefcase, Cloud, Code, Cpu } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              MERN Stack Developer & Cloud DevOps Engineer
            </h3>

            <p className="text-muted-foreground">
              I build scalable, production-ready web applications using the{" "}
              <strong>MERN stack</strong> — crafting responsive React interfaces
              on the frontend and designing robust Node.js/Express APIs backed
              by MongoDB on the server side.
            </p>

            <p className="text-muted-foreground">
              On the infrastructure side, I work with <strong>Cloud & DevOps</strong> tools
              to deploy, monitor, and maintain applications — from hosting static
              sites on <strong>AWS S3</strong> to containerizing services and
              setting up CI/CD pipelines that keep things running smoothly.
            </p>

            <p className="text-muted-foreground">
              I also have a growing curiosity for{" "}
              <strong>Machine Learning</strong> — I've explored it through
              hands-on projects like spam detection, and I enjoy understanding
              how intelligent systems work, even if it's not my primary focus
              right now.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/cv/Mern_as_train.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">MERN Stack Development</h4>
                  <p className="text-muted-foreground">
                    Building full-stack web applications with React, Node.js,
                    Express, and MongoDB — from interactive UIs to RESTful APIs
                    and database design.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cloud className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Cloud & DevOps</h4>
                  <p className="text-muted-foreground">
                    Deploying and managing applications on AWS, working with S3,
                    EC2, and cloud hosting. Setting up CI/CD workflows and
                    containerizing apps with Docker for reliable delivery.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Cpu className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    ML Curiosity{" "}
                    <span className="text-xs font-normal text-muted-foreground ml-1">
                      — exploring on the side
                    </span>
                  </h4>
                  <p className="text-muted-foreground">
                    Curious about how machine learning models work under the
                    hood. I've built small projects with Scikit-learn and Python,
                    and enjoy integrating ML outputs into web apps when the
                    problem calls for it.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};