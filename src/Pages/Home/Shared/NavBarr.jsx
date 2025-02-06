import logo from "../../../assets/Ms w-01.png";

import resume from "../../../assets/cv.pdf";

const NavBarr = () => {
  const nav = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>About</a>
      </li>
      <li>
        <a>Skills</a>
      </li>
      <li>
        <a>Educations</a>
      </li>
      <li>
        <a>Experience</a>
      </li>
      <li>
        <a>Projects</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
    </>
  );

  return (
    <div className="">
      <div className=" items-center p-3 px-7 justify-between w-screen flex  text-white">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <div className="w-10">
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
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBarr;
