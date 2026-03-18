import { Cloud, Code, Cpu } from "lucide-react";
import { useState } from "react";

const PhotoCard = () => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: "1000px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg) scale(${hovered ? 1.04 : 1})`,
          transition: hovered
            ? "transform 0.1s ease"
            : "transform 0.5s ease",
          transformStyle: "preserve-3d",
          borderRadius: "1.25rem",
          overflow: "hidden",
          position: "relative",
          width: "100%",
          maxWidth: "380px",
          aspectRatio: "3/4",
          boxShadow: hovered
            ? "0 0 40px 8px hsl(var(--primary) / 0.45), 0 20px 60px rgba(0,0,0,0.4)"
            : "0 8px 32px rgba(0,0,0,0.25)",
          cursor: "pointer",
        }}
      >
        {/* Photo — replace src with your actual image path */}
        <img
          src="/projects/profile1.jpeg"
          alt="Profile"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s ease",
            transform: hovered ? "scale(1.07)" : "scale(1)",
          }}
          onError={(e) => {
            // Fallback placeholder if image not found
            e.target.style.display = "none";
            e.target.parentNode.querySelector(".photo-fallback").style.display =
              "flex";
          }}
        />

        {/* Fallback placeholder */}
        <div
          className="photo-fallback"
          style={{
            display: "none",
            position: "absolute",
            inset: 0,
            background: "linear-gradient(135deg, hsl(var(--primary)/0.15), hsl(var(--primary)/0.35))",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              background: "hsl(var(--primary)/0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2.5rem",
            }}
          >
            👤
          </div>
          <span style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.9rem" }}>
            Your Photo Here
          </span>
        </div>

        {/* Shine overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `radial-gradient(circle at ${50 + tilt.x * 2}% ${50 - tilt.y * 2}%, rgba(255,255,255,0.12) 0%, transparent 65%)`,
            pointerEvents: "none",
            transition: "background 0.1s ease",
            borderRadius: "1.25rem",
          }}
        />

        {/* Bottom gradient overlay with name tag — slides up on hover */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "2rem 1.5rem 1.5rem",
            background:
              "linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.5) 50%, transparent 100%)",
            transform: hovered ? "translateY(0)" : "translateY(30%)",
            opacity: hovered ? 1 : 0.7,
            transition: "transform 0.4s ease, opacity 0.4s ease",
          }}
        >
          {/* <p
            style={{
              color: "hsl(var(--primary))",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "4px",
              fontWeight: 600,
            }}
          >
            MERN · Cloud · DevOps
          </p> */}
          {/* <h3
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.25rem",
              margin: 0,
            }}
          >
            Your Name
          </h3> */}
        </div>

        {/* Border glow ring */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "1.25rem",
            border: `1.5px solid hsl(var(--primary) / ${hovered ? 0.6 : 0.2})`,
            pointerEvents: "none",
            transition: "border-color 0.4s ease",
          }}
        />
      </div>
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT — Photo */}
          <div className="flex flex-col items-center gap-6">
            <PhotoCard />

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>
              <a
                href="/cv/Mern_as_train.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-center"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT — Cards only */}
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