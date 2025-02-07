import React from "react";

const Experience = () => {
  return (
    <div>
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold text-purple-600 flex items-center gap-2">
          💼 Work Experience
        </h2>
        <div className="mt-4 space-y-4">
          <div className="flex justify-between bg-gray-100 p-4 rounded-md">
            <div>
              <h3 className="font-semibold">Insightlancer</h3>
              <p className="text-gray-500 text-sm">Senior Product Designer</p>
            </div>
            <span className="text-gray-700">2018 - 2024</span>
          </div>
          <div className="flex justify-between bg-gray-100 p-4 rounded-md">
            <div>
              <h3 className="font-semibold">Self-Employed</h3>
              <p className="text-gray-500 text-sm">Visual Artist</p>
            </div>
            <span className="text-gray-700">2016 - 2018</span>
          </div>
          <div className="flex justify-between bg-gray-100 p-4 rounded-md">
            <div>
              <h3 className="font-semibold">KG Graphics Studio</h3>
              <p className="text-gray-500 text-sm">Web Designer</p>
            </div>
            <span className="text-gray-700">2014 - 2016</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
