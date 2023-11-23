const UpcomingEvent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">
          <a href="blog/this-is-latest-post.html">
            <img
              src="https://i.ibb.co/hmRX8Y7/upcoming.jpg"
              className="w-full max-w-md h-[300px]"
            />
          </a>
        </div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              This will be our next medical event on March 2024
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              Join us for an upcoming medical event that promises insightful
              discussions, cutting-edge advancements, and networking
              opportunities. Esteemed speakers will share their expertise,
              fostering a collaborative environment to shape the future of
              healthcare. Dont miss this enriching experience!
            </p>
            <a
              href="blog/this-is-latest-post.html"
              className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white"
            >
              Booking now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvent;
