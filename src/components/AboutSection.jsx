import { Briefcase, Code, User } from "lucide-react";

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
              Data Science & ML Engineer | MERN Stack Developer
            </h3>

            <p className="text-muted-foreground">
              I work at the intersection of <strong>Data Science</strong> and{" "}
              <strong>full-stack web development</strong>, focusing on building
              intelligent applications rather than isolated machine learning
              models. I enjoy transforming raw data into insights and deploying
              them through scalable web platforms.
            </p>

            <p className="text-muted-foreground">
              I use <strong>Machine Learning</strong> for prediction and
              analysis, and integrate these models into real-world applications
              using the <strong>MERN stack</strong>. React helps me design
              interactive user interfaces, while Node.js and Express allow me
              to expose ML models as APIs that can be consumed by web clients.
            </p>

            <p className="text-muted-foreground">
              This combination allows me to build end-to-end systems — from data
              collection and model training to deployment, visualization, and
              user interaction — making solutions practical, accessible, and
              impactful.
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
                  <h4 className="font-semibold text-lg">
                    Data Science & Machine Learning
                  </h4>
                  <p className="text-muted-foreground">
                    Data preprocessing, exploratory analysis, visualization,
                    and machine learning model development using Python,
                    Pandas, NumPy, Scikit-learn, and Matplotlib.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    MERN Stack Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Integrating machine learning models into web applications
                    using React for frontend, Node.js and Express for APIs, and
                    MongoDB for data storage.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    End-to-End Project Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building complete solutions by combining data analysis,
                    machine learning, backend APIs, and frontend interfaces
                    into production-ready applications.
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
