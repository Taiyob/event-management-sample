const Donate = () => {
  return (
    <div>
      <div className="relative w-full py-12 px-12">
        <div className="relative z-10 text-center py-12 md:py-24">
          <h1 className="text-red-950 text-center text-6xl md:text-4xl lg:text-5xl xl:text-6xl font-display font-bold mb-6">
            Extend a blood donation
          </h1>
          <p className="text-red-950 mb-10 text-2xl md:text-lg font-bold">
            Be a life-changer, donate blood today. Your selfless act can bring
            hope and healing to someone in need, creating a legacy of compassion
            and kindness.
          </p>
          <a
            href=""
            className="inline-block bg-yellow-800 text-white uppercase text-sm tracking-widest font-heading px-8 py-4"
          >
            Donate
          </a>
        </div>
        <img
          src="https://i.ibb.co/f4fT8bd/donate.jpg"
          className="w-full h-full absolute inset-0 object-cover"
        />
      </div>
    </div>
  );
};

export default Donate;
