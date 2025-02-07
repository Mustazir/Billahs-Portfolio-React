import logo from "../../../assets/Ms w-01.png";

import resume from "../../../assets/cv.pdf";

const NavBarr = () => {
  const nav = (
    <>
      <li>
        <a href="#Home">Home</a>
      </li>
      <li>
        <a href="#About">About</a>
      </li>
      <li>
        <a href="#sections">Services</a>
      </li>
      <li>
        <a href="#Skill">Skills</a>
      </li>
      <li>
        <a href="#Education">Educations & Experience</a>
      </li>
      
      <li>
        <a href="#Project">Projects</a>
      </li>
      <li>
        <a href="#Contact">Contact</a>
      </li>
    </>
  );

  return (
    <div className="bg-amber-800">
      <div className="navbar items-center p-3 px-7 justify-between w-screen flex  text-white fixed z-10">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <div className="w-10 hidden lg:flex">
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="bg-gray-700 opacity-45 rounded-2xl  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="">
          <a
            href="/public/Billah's Resume.jpg"
            download="Billah's Resume.jpg"
            className="btn"
          >
            Resume
          </a>
        </div>
      </div>
      
    </div>
  );
};

export default NavBarr;
