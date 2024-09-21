// src/Gallery.jsx
import React from "react";

const Gallery = () => {
  return (
    <div className="mt-12 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
      <p className="text-gray-700 mb-4">
        Explore images from our Reiki sessions and healing spaces.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <img
          src="https://via.placeholder.com/150"
          alt="Reiki Session 1"
          className="rounded shadow-md"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Reiki Session 2"
          className="rounded shadow-md"
        />
        <img
          src="https://via.placeholder.com/150"
          alt="Reiki Session 3"
          className="rounded shadow-md"
        />
        {/* Add more images as needed */}
      </div>
    </div>
  );
};

export default Gallery;
