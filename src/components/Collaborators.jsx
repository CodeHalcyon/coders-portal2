import React from 'react'

const Collaborators = () => {
  return (
    <>
      <section className="py-12">
        <h1 className='mb-8 text-3xl font-bold text-center sm:text-4xl md:text-5xl'>
          Our Collaborators
        </h1>
        <div className='flex flex-wrap items-center justify-center w-full gap-6'>
          {/* Image 1 */}
          <img
            className='w-[180px] sm:w-[200px] md:w-[250px] my-4 border-solid'
            src="https://upload.wikimedia.org/wikipedia/commons/4/40/T-Hub_Logo-PNG.png"
            alt="T-Hub"
            loading="lazy"
          />
          {/* Image 2 */}
          <img
            className='w-[180px] sm:w-[200px] md:w-[250px] my-4 border-solid'
            src="https://s2.coinmarketcap.com/static/img/coins/200x200/11976.png"
            alt="Aleph Zero"
            loading="lazy"
          />
          {/* Image 3 */}
          <img
            className='w-[180px] sm:w-[200px] md:w-[250px] my-4 border-solid'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2ELnl5LucGCNoa6Arhd5ZqeRyv1VK8vrrgA&s"
            alt="Knowation Learnings"
            loading="lazy"
          />
          {/* Image 4 */}
          <img
            className='w-full sm:w-[400px] my-4 border-solid aspect-video'
            src="https://linktr.ee/og/image/flutterhyderabad.jpg"
            alt="Flutter Hyderabad"
            loading="lazy"
          />
          {/* Image 5 */}
          <img
            className='w-[180px] sm:w-[200px] md:w-[250px] my-4 border-solid aspect-video'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/720px-Google_Gemini_logo.svg.png"
            alt="Gemini Logo"
            loading="lazy"
          />
          {/* Image 6 */}
          <img
            className='w-full sm:w-[600px] my-4 border-solid'
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/TensorFlow_logo.svg/600px-TensorFlow_logo.svg.png"
            alt="TensorFlow"
            loading="lazy"
          />
        </div>
      </section>
    </>
  )
}

export default Collaborators;
