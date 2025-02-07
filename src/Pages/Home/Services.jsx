const Services = () => {
  return (
    <div className=" mx-auto flex flex-col items-center gap-5" id="sections">

      <div className="text-7xl text-white ">
      <h1>Services</h1>
      </div>
      <div className=" flex flex-col lg:flex-row  gap-6 mx-auto ">
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="/public/development.jpg"
              alt="WebDevelopment"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">Custom Websites & Web Apps</h2>
            <p>
              build responsive, high-performance websites and web applications
              tailored to your needs. From sleek portfolios to dynamic business
              platforms, I ensure clean code, fast loading, and seamless user
              experiences.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="/public/graphics.jpg"
              alt="Graphics Design"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">Graphics Design</h2>
            <p>
              
              Elevate your brand with eye-catching designs! I specialize in
              logos, banners, social media posts, and marketing materials that
              capture attention and leave a lasting impression.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-96 shadow-xl">
          <figure>
            <img
              src="/public/uiux.jpg"
              alt="UX-UI"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl">UI/UX Solutions</h2>
            <p>
              
              Craft intuitive, engaging, and aesthetically pleasing user
              interfaces. My designs prioritize user experience, ensuring
              seamless navigation and interaction for web and mobile
              applications.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
