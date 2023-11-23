const LastEvent = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-start items-center">
          <a href="blog/my-third-big-post.html">
            <img
              src="https://i.ibb.co/p3kpr8V/event-management-4.jpg"
              className="w-full max-w-md h-[300px]"
            />
          </a>
        </div>
        <div className="md:order-first bg-gray-100 p-12 md:p-24 flex justify-end items-center">
          <div className="max-w-md">
            <div className="w-24 h-2 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              This was our last event
            </h2>
            <p className="font-light text-gray-600 text-sm md:text-base mb-6 leading-relaxed">
              The successful medical event brought together experts, fostering
              collaboration and knowledge exchange. Cutting-edge advancements
              were showcased, inspiring innovation. Attendees gained insights,
              forming lasting connections and contributing to healthcare
              progress.
            </p>
            <a
              href="blog/my-third-big-post.html"
              className="inline-block border-2 border-yellow-800 font-light text-yellow-800 text-sm uppercase tracking-widest py-3 px-8 hover:bg-yellow-800 hover:text-white"
            >
              See Details
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastEvent;
