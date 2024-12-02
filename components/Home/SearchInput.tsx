import React from 'react';
import Image from 'next/image';

function SearchInput() {
  return (
    <div className="text-white flex flex-col items-center gap-4 p-4">
      {/* Heading */}
      <h2 className="text-center text-[20px] text-gray-500">
        Search Your Product
      </h2>

      {/* Search Bar Container */}
      <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden w-[90%] max-w-md shadow-md">
        {/* Search Icon */}
        <div className="p-3">
          <Image
            src="/search.svg"
            alt="Search Icon"
            width={24}
            height={24}
            className="object-contain"
            priority
          />
        </div>

        {/* Input Field */}
        <input
          type="text"
          placeholder="Type to search..."
          className="flex-grow p-2 outline-none bg-transparent text-white placeholder-gray-400"
        />
      </div>
    </div>
  );
}

export default SearchInput;
