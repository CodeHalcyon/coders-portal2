import React, { useState, useEffect } from 'react';

const Hero = () => {
  // State to track window width
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Update windowWidth state when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <main className='relative'>
        <div className='flex flex-col items-center justify-center w-screen h-screen text-center'>
          <h1 className='mb-4 text-3xl font-bold sm:text-4xl md:text-5xl'>
            We <span className='text-primary'>develop</span> the developers
          </h1>
          <p className='max-w-2xl px-4 mx-auto mb-6 text-lg opacity-80 sm:px-6'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure consequuntur ullam magni culpa provident repudiandae magnam, quia totam similique saepe dolorem natus ratione dolore soluta tenetur odit reprehenderit cum eligendi accusamus. Minima ipsa officiis explicabo eaque. Reiciendis, incidunt quod.
          </p>
          <a 
            href="https://www.google.com" 
            className='px-6 py-3 text-xl text-white transition duration-300 bg-black rounded-lg w-[200px] hover:bg-white hover:text-black hover:border-black border-2 border-transparent'
          >
            Join us!
          </a>
        </div>

        {/* Conditionally render images based on window width */}
        {windowWidth >= 1024 && (
          <>
            {/* Large Screens: Illustrator Image */}
            <img 
              src="./images/illustrator.jpg" 
              className='w-[500px] absolute top-20 -z-10' 
              alt="Illustrator" 
            />
            {/* Large Screens: Arrow Image */}
            <img 
              src="./images/arrow.png" 
              className='w-[500px] absolute top-[300px] rotate-12 right-20 -z-10' 
              alt="Arrow" 
            />
          </>
        )}

        {windowWidth < 1024 && (
          <>
            
          </>
        )}
      </main>
    </>
  );
}

export default Hero;
