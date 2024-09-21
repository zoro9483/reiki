// src/App.jsx
import React from "react";
import Booking from "./Booking.jsx";
import AboutMe from "./AboutMe.jsx";
import Gallery from "./Gallery.jsx";

const App = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 min-h-screen">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          Reiki: What It Is, How It Works, Symbols and Benefits
        </h1>
        <p className="text-lg text-gray-600">
          Learn more about Reiki, an integrative practice that brings energetic balance.
        </p>
      </header>

      <section className="space-y-8">
        {/* What is Reiki */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            What is Reiki?
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Reiki is a technique for channeling universal energy transmitted through touch and the laying on of hands. It means Vital Energy (Ki), directed by Universal Energy (Rei). The objective is to reestablish the vital energetic balance of the person receiving treatment.
          </p>
        </div>

        {/* History of Reiki */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            History of Reiki
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Rediscovered in Japan by Mikao Usui in the early 20th century, Reiki dates back to ancient Buddhist practices.
          </p>
        </div>

        {/* How Does Reiki Work */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            How Does Reiki Work?
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Reiki is taught in levels:
            <ul className="list-disc ml-5 mt-2">
              <li>
                <strong>Level I:</strong> Self-application and history of Reiki.
              </li>
              <li>
                <strong>Level II:</strong> Symbols and their applications for remote work.
              </li>
              <li>
                <strong>Level III:</strong> Advanced symbols, deeper techniques, and mastery.
              </li>
              <li>
                <strong>Master Level:</strong> Ability to teach and attune new practitioners.
              </li>
            </ul>
          </p>
        </div>

        {/* Application of Reiki */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            Application of Reiki
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Reiki activates and recomposes the person’s vibrational energy, cleansing and reactivating energy centers. It works in harmony to restore a natural flow.
          </p>
        </div>

        {/* Contraindications */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            Contraindications
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            While Reiki can complement all treatments, caution is advised in specific situations, such as pregnancy or surgery.
          </p>
        </div>

        {/* Remote Reiki */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            Remote Reiki
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Yes, practitioners can send Reiki energy remotely, given permission from the recipient or their guardians.
          </p>
        </div>

        {/* Music for Reiki */}
        <div className="group">
          <h2 className="text-2xl font-semibold cursor-pointer group-hover:text-yellow-500 transition duration-300 transform group-hover:scale-105 animate-fade-in-down">
            Music for Reiki
          </h2>
          <p className="hidden group-hover:block text-gray-700 mt-2 transition duration-300">
            Relaxing music with a high frequency, like classical music, can enhance the Reiki experience.
          </p>
        </div>
      </section>

      {/* Additional Components */}
      <Booking />
      <AboutMe />
      <Gallery />

      <footer className="text-center mt-12">
        <p className="text-gray-600">
          For more information, explore our courses and resources on Reiki!
        </p>
      </footer>
    </div>
  );
};

export default App;
