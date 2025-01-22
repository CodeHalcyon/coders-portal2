import React from 'react';

const CommunityCard = (props) => {
  return (
    <div className="w-full p-6 border-2 border-gray-200 sm:w-80 md:w-96 rounded-xl">
      <div className="mb-4 overflow-hidden rounded-lg">
        <img
          className="object-cover w-full h-56 transition-all duration-500 ease-in-out transform rounded-lg hover:scale-110"
          src={props.image} // Fallback image if no prop is provided
          alt="Community"
        />
      </div>
      <div>
        <h1 className="mb-2 text-2xl font-semibold text-gray-800">{props.name} Community</h1>
        <p className="text-sm leading-relaxed text-gray-600">
          {props.desc && props.desc.length > 0 ? (
            props.desc
          ) : (
            <span className="italic text-gray-400">No description available.</span>
          )}
        </p>
        <a
          className="block w-full py-3 mt-6 text-lg font-semibold text-center text-white transition-colors bg-green-500 rounded-full hover:bg-green-600"
          href={props.link || "https://discord.com/invite/bluelearn"} // Link prop for flexibility
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Community
        </a>
      </div>
    </div>
  );
};

export default CommunityCard;
