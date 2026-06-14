import React from "react";

function App() {
  return (
    <div className="min-h-screen bg-hero grain">

      {/* HERO SECTION */}

      <div className="flex flex-col justify-center items-center text-center min-h-screen px-6">

        <p className="text-primary uppercase tracking-[0.3em] mb-4">
          Welcome To My Portfolio
        </p>

        <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">
          Hi, I'm Abhinand T V
        </h1>

        <h2 className="text-2xl md:text-4xl text-muted-foreground mb-4">
             Full-Stack Developer
        </h2>

          <p className="text-lg md:text-xl text-primary mb-8">
             React • Node.js • Express • MongoDB
          </p>

        <p className="max-w-2xl text-lg text-muted-foreground leading-8 mb-10">
          Full-Stack Developer passionate about building modern, scalable, and user-friendly web applications. Experienced in React.js, Node.js, Express.js, MongoDB, REST APIs, and cloud deployment, with a strong focus on creating impactful digital solutions and continuous learning.

        </p>

        <div className="flex gap-5 flex-wrap justify-center">

          <a
             href="#projects"
             className="bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
          >
           View Projects
          </a>
          <a
            href="#contact"
            className="border border-border px-8 py-4 rounded-xl hover:bg-card transition-all duration-300"
          >
           Contact Me
          </a>
        </div>

      </div>


      {/* ABOUT SECTION */}

      <div className="py-24 px-6 bg-card">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gradient mb-12">
            About Me
          </h2>

          <p className="text-lg text-muted-foreground leading-9 text-center">

            I am a passionate MERN Stack Developer who enjoys building
            modern and responsive web applications.

            I have experience working with React.js, Node.js,
            Express.js, MongoDB, Python, Flask, Git, GitHub,
            Tailwind CSS, and deployment platforms like
            Vercel and Render.

            

          </p>

        </div>

      </div>


      {/* SKILLS SECTION */}

      <div className="py-24 px-6">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gradient mb-16">
            Skills
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            {[
              ["React", "Frontend Development"],
              ["Node.js", "Backend Runtime"],
              ["Express.js", "REST API Development"],
              ["MongoDB", "Database Management"],
              ["Python", "Backend Development"],
              ["Flask", "REST API Backend"],
              ["MySQL", "Relational Database"],
              ["REST APIs", "API Integration"],
              ["Git", "Version Control"],
              ["GitHub", "Repository Hosting"],
              ["Tailwind CSS", "Modern UI Styling"],
              ["Vercel", "Frontend Deployment"],
            ].map((item) => (

              <div
                key={item[0]}
                className="bg-card shadow-card rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300"
              >

                <h3 className="text-2xl font-semibold mb-3">
                  {item[0]}
                </h3>

                <p className="text-muted-foreground">
                  {item[1]}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>


      {/* PROJECTS SECTION */}

      <div id="projects" className="py-24 px-6 bg-card">

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gradient mb-16">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-10">


            {/* AI FITNESS TRACKER */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                AI Fitness Tracker
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                A full-stack fitness tracking application built using the MERN stack.
                Features secure JWT authentication, workout CRUD operations,
                BMI and calorie analysis, progress analytics, interactive charts,
                MongoDB Atlas integration, and cloud deployment using Render and Vercel.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "JWT",
                  "Tailwind CSS",
                  "Recharts",
                  "REST API",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://ai-fitness-black.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/abhinand-ab/AI-FITNESS"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>

            {/* BLOOD DONATION SYSTEM */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                Blood Donation System
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                A complete full-stack MERN application developed for
                managing blood donors and recipients efficiently.

                Includes donor registration, donor search by blood group,
                CRUD operations, MongoDB Atlas cloud database,
                and deployment using Render and Vercel.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "React.js",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "REST API",
                  "Axios",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://blood-donation-system-beta-three.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/abhinand-ab/blood-donation-system"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>


            {/* WEATHER DASHBOARD */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                Weather Dashboard
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                A responsive weather forecasting application that provides
                real-time weather conditions, temperature, humidity,
                wind speed, and forecast data using weather APIs.
                Designed with a modern UI and optimized user experience.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "React.js",
                  "JavaScript",
                  "Weather API",
                  "REST API",
                  "CSS",
                  "Responsive Design",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://weather-dashboard-ten-tan.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/abhinand-ab/Weather_Dashboard.git"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>



            {/* CETAA WEBSITE */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                CETAA Website
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                A responsive educational and renovation-themed website
                developed using HTML, CSS, and JavaScript.
                Focused on responsive layouts and clean UI design.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://github.com/abhinand-ab/cetaa-website"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>



            {/* BUS RESERVATION */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                Bus Reservation System
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                Frontend bus booking system developed using
                HTML, CSS, and JavaScript.

                Includes booking confirmation,
                local storage handling,
                and interactive user interface features.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "HTML",
                  "CSS",
                  "JavaScript",
                  "Local Storage",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://github.com/abhinand-ab/Bus-reservation"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>



            {/* DHAMANI BACKEND */}

            <div className="bg-background rounded-3xl p-8 shadow-card hover:scale-[1.02] transition-all duration-300">

              <h3 className="text-3xl font-bold mb-4">
                Dhamani Backend
              </h3>

              <p className="text-muted-foreground leading-8 mb-6">

                Flask backend application with donor
                and recipient registration APIs,
                validation logic,
                SQLite database integration,
                and nearby donor mapping features.

              </p>

              <div className="flex flex-wrap gap-3 mb-8">

                {[
                  "Python",
                  "Flask",
                  "SQLite",
                  "REST API",
                ].map((tech) => (

                  <span
                    key={tech}
                    className="bg-primary px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              <div className="flex flex-wrap gap-5">

                <a
                  href="https://github.com/abhinand-ab/Dhamani-backend"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-border px-6 py-3 rounded-xl hover:bg-muted transition-all duration-300"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    {/* CONTACT SECTION */}

   <div id="contact" className="py-24 px-6">

  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold text-gradient mb-12">

      Contact Me

    </h2>

    <p className="text-lg text-muted-foreground mb-12 leading-8">

      I'm always open to opportunities, collaborations,
      internships, and exciting projects.

      Feel free to connect with me through the platforms below.

    </p>


    <div className="flex flex-wrap justify-center gap-6">


      <a
        href="mailto:abhinandtvvelam@gmail.com"
        className="bg-primary text-primary-foreground px-8 py-4 rounded-xl shadow-glow hover:scale-105 transition-all duration-300"
      >

        Email Me

      </a>


      <a
        href="https://github.com/abhinand-ab"
        target="_blank"
        rel="noreferrer"
        className="border border-border px-8 py-4 rounded-xl hover:bg-card transition-all duration-300"
      >

        GitHub

      </a>


      <a
        href="https://linkedin.com/in/abhinand-tv-"
        target="_blank"
        rel="noreferrer"
        className="border border-border px-8 py-4 rounded-xl hover:bg-card transition-all duration-300"
      >

        LinkedIn

      </a>

    </div>

    </div>

  </div>

  </div>
  );
}

export default App;