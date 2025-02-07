import React, { useState } from "react";

const Skills = () => {
  // Skills data for each category
  const skills = {
    frontend: [
      { name: "HTML", image: "/public/Other-html-5-icon.png" },
      { name: "CSS", image: "/public/css3.png" },
      { name: "JAVASCRIPT", image: "/public/javascript-logo-javascript-icon.png" },
      { name: "REACT JS", image: "/public/React.js_logo-512.png" },
    ],
    backend: [
      { name: "NODE JS", image: "/public/node-js-icon-1817x2048-g8tzf91e.png" },
      { name: "Express Js", image: "/public/express-js.png" },
    ],
    database: [
      { name: "MONGODB", image: "/public/mongodb-icon.png" },
    ],
    graphics: [
      { name: "Adobe Illustrator", image: "/public/adobe-illustrator-icon.png" },
      { name: "After Effect", image: "/public/2101px-Adobe_After_Effects_CC_ic.png" },
      { name: "Photoshop", image: "/public/adobe-photoshop-express-editor-i.png" },
    ],
  };

  // State for active tab
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <div id="Skill">
      <div className="bg-black text-white flex flex-col items-center justify-center">
        <h2 className="text-yellow-400 text-3xl font-bold">Skills</h2>

        {/* Tabs */}
        <div className="mt-6 flex space-x-2 md:space-x-8">
          <button
            onClick={() => setActiveTab("frontend")}
            className={`${
              activeTab === "frontend" ? "bg-yellow-400 text-black" : "bg-gray-900"
            } py-2 px-4 rounded-lg transition duration-300`}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            className={`${
              activeTab === "backend" ? "bg-yellow-400 text-black" : "bg-gray-900"
            } py-2 px-4 rounded-lg transition duration-300`}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("database")}
            className={`${
              activeTab === "database" ? "bg-yellow-400 text-black" : "bg-gray-900"
            } py-2 px-4 rounded-lg transition duration-300`}
          >
            Database
          </button>
          <button
            onClick={() => setActiveTab("graphics")}
            className={`${
              activeTab === "graphics" ? "bg-yellow-400 text-black" : "bg-gray-900"
            } py-2 px-4 rounded-lg transition duration-300`}
          >
            Graphics
          </button>
        </div>

        {/* Skills Grid */}
        <div className="mt-6 flex">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ml-8 ">
            {skills[activeTab].map((skill, index) => (
              <div
                key={index}
                className="bg-gray-900 p-4 rounded-lg flex flex-col  items-center shadow-lg transform transition duration-300 hover:scale-110 hover:shadow-yellow-400"
              >
                <img src={skill.image} alt={skill.name} className="h-12 w-12" />
                <p className="mt-2 text-sm">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
