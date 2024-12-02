import React from 'react';

function Hero() {
  return (
    <section className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 py-24 lg:flex lg:h-screen items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-4xl text-white font-extrabold sm:text-6xl">
            Welcome to <span className="text-red-600">Gamer Gaun</span>
          </h1>
          <strong>
            <p className='text-red-600 text-3xl font-semibold'>Your Ultimate Gaming Destination</p>
          </strong>

          <p className="mt-6 text-lg text-gray-300 sm:text-xl sm:leading-relaxed">
            Level up your gaming setup with cutting-edge accessories. From pro gaming gear to
            immersive experiences, we have everything you need to dominate the game.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#shop"
            >
              Shop Now
            </a>

            <a
              className="block w-full rounded border border-red-600 px-12 py-3 text-sm font-medium text-red-600 shadow hover:bg-red-700 hover:text-white focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
              href="#about"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
