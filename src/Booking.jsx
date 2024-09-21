// src/Booking.jsx
import React from "react";

const Booking = () => {
  return (
    <div className="mt-12 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Book a Session</h2>
      <p className="text-gray-700 mb-4">
        Book your Reiki session with us today! Fill out the form below to schedule your session.
      </p>
      <form>
        <label className="block mb-2 text-lg text-gray-600">
          Name:
          <input
            type="text"
            className="w-full p-2 mt-1 border rounded"
            placeholder="Enter your name"
          />
        </label>

        <label className="block mb-2 text-lg text-gray-600">
          Email:
          <input
            type="email"
            className="w-full p-2 mt-1 border rounded"
            placeholder="Enter your email"
          />
        </label>

        <label className="block mb-4 text-lg text-gray-600">
          Date and Time:
          <input
            type="datetime-local"
            className="w-full p-2 mt-1 border rounded"
          />
        </label>

        <button
          type="submit"
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition duration-300"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default Booking;
