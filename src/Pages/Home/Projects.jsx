import React from "react";

const projects = [
  {
    title: "LearnBridge",
    description:
      "LearnBridge is an interactive and engaging platform that connects students, tutors, and administrators to streamline study session scheduling, resource sharing, and user management. It enhances collaboration, improves access to study materials, and ensures effective management of educational activities.",
    tags: ["React.JS", "MongoDb", "Tailwind"],
    image: "/public/Screenshot_11.png", // Replace with actual image URL
    github: "https://github.com/Mustazir/SkillPathway-client.git"
  },
  {
    title: "RideFlow",
    description:
      "RideFlow is an innovative vehicle rental platform designed for seamless booking and management of cars. Built with modern web technologies, it ensures security, performance, and a smooth user experience. Whether you're a renter or an admin, RideFlow provides all the tools needed to manage vehicle rentals effortlessly.",
    tags: ["React.JS", "MongoDb", "Tailwind"],
    image: "/public/Screenshot_12.png", // Replace with actual image URL
    github: "https://github.com/Mustazir/RideFlow-Client.git"
  },
  {
    title: "Donate4Bangla",
    description:
      "A donation platform to help people contribute to various causes in Bangladesh.",
    tags: ["UI/UX Design", "App Design", "Wireframe"],
    image: "/public/Banner.png", // Replace with actual image URL
    github: "https://github.com/Mustazir/Donation4Bangla.git"
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div id="Project" className="bg-white p-6 rounded-2xl shadow-lg text-black flex flex-col md:flex-row items-center gap-6">
      <img
        src={project.image}
        alt={project.title}
        className="w-full md:w-1/3 rounded-xl"
      />
      <div>
        <div className="flex flex-wrap gap-2 mb-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm font-semibold"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="mt-2 text-black">{project.description}</p>
        <a href={project.github} target="_blank" rel="noopener noreferrer">
          <button className="mt-4 bg-blue-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-600 transition">
            ➕ View Details
          </button>
        </a>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section className="bg-black text-center py-12 px-4">
      <h2 className="text-4xl font-bold text-white mb-6">
        My <span className="text-blue-800">Latest Projects</span>
      </h2>
      <div className="max-w-5xl mx-auto flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
