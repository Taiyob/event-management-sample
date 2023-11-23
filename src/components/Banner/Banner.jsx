const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/FzpDcq6/slider2.jpg" className="w-full" />
        {/* transform translate-x-[-200%] transition-transform ease-in-out duration-500 */}
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-7xl font-bold mt-20 text-orange-700">
            Our Awesome Doctors
          </h1>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/ryKYs4T/slider6.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-7xl font-bold mt-20 text-orange-700">
            Donate Your Valuable Blood
          </h1>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/RH8z8nw/slider4.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-7xl font-bold mt-20 text-orange-700">
            Faith Their Responsibilities
          </h1>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/pW93pmc/slider3.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <h1 className="text-center text-7xl font-bold mt-20 text-orange-700">
            Happy Children Health
          </h1>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
