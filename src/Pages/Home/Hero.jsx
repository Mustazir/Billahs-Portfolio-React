const Hero = () => {
  return (
    <div id="Home">
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="/public/6129958684596487528.jpg"
            className="max-w-sm rounded-lg shadow-2xl md:ml-16"
          />
          <div className="text-white items-center text-center">
            <h1 className="text-5xl font-bold">S.M.Mustazir Billah</h1>
            <h3 className="text-4xl">Web Developer & Graphics Designer</h3>
            
            <button className="mt-11 ml"  >
              <a
                href="/public/Billah's Resume.jpg"
                download="Billah's Resume.jpg"
                className="btn"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
