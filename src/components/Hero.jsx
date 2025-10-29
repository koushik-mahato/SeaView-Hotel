import React from "react";

const Hero = () => {
  return (
    <section
      className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/5608202/pexels-photo-5608202.jpeg')",
      }}
    >
      <h1 className="text-5xl font-bold">Welcome to SeaView Hotel</h1>
      <p className="mt-4 text-lg bg-black/50 px-4 py-2 rounded">
        Relax, unwind, and enjoy the beauty of the sea.
      </p>
    </section>
  );
};

export default Hero;
