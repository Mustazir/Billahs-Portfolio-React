import React from "react";

const PortfolioSection = () => {
  return (
    <div className="p-8 " id="Education">
      {/* About Section */}

      {/* Education & Work Section */}
      <div className="mt-16">
        <h2 className="text-lg font-semibold text-white text-center">
          Education & Work
        </h2>
        <h1 className="text-3xl font-bold text-white text-center mt-2">
          My <span className="text-blue-800">Education</span> &{" "}
          <span className="text-blue-800">Work Experience</span>
        </h1>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* Education Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">
              🎓 Education
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold">
                    Bsc. in Computer Science & Engineering
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Daffodil International University
                  </p>
                </div>
                <span className="text-gray-700">Present</span>
              </div>
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold">
                    Higher Secondary Certificate
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Biam Model School & College
                  </p>
                </div>
                <span className="text-gray-700">2018 - 2020</span>
              </div>
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold">
                    Secondary School Certificate
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Mithapukur Model High School
                  </p>
                </div>
                <span className="text-gray-700">2017 - 2018</span>
              </div>
            </div>
          </div>

          {/* Work Experience Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-bold text-blue-800 flex items-center gap-2">
              💼 Work Experience
            </h2>
            <div className="mt-4 space-y-4">
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold">DWSI</h3>
                  <p className="text-gray-500 text-sm">Designer</p>
                </div>
                <span className="text-gray-700">2020 - 2024</span>
              </div>
              <div className="flex justify-between bg-gray-100 p-4 rounded-md">
                <div>
                  <h3 className="font-semibold">Zahra Shop</h3>
                  <p className="text-gray-500 text-sm">Designer</p>
                </div>
                <span className="text-gray-700">2022 - Present</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
