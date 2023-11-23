const Hospitality = () => {
  return (
    <>
      <div>
        <div className="max-w-xl mx-auto text-center py-24 md:py-32">
          <div className="w-24 h-2 bg-yellow-800 mb-4 mx-auto"></div>
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-6">
            We love to care
          </h2>
          <p className="font-light text-gray-600 mb-6 leading-relaxed">
            Compassionate care embraces hearts, healing wounds with kindness,
            fostering strength, and illuminating the path to wellness.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap bg-black">
        <a
          href=""
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">Special Care</div>
          <img
            src="https://i.ibb.co/bbt5jBc/hospitality7.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
        <a
          href=""
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">People Heart</div>
          <img
            src="https://i.ibb.co/926tQDm/hospitality2.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
        <a
          href=""
          className="bg-black relative w-full md:w-auto md:flex-1 flex items-center justify-center h-72 font-heading text-white uppercase tracking-widest hover:opacity-75"
        >
          <div className="relative z-10">City Streets</div>
          <img
            src="https://i.ibb.co/X5KSK8v/hospitality5.jpg"
            className="absolute inset-0 w-full h-full object-cover opacity-50"
          />
        </a>
      </div>
    </>
  );
};

export default Hospitality;
