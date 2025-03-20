import React from "react";
import cta from "../assets/images/Cta.png";
export default function Cta() {
  return (
    <div className="cta w-[100%] flex flex-col md:flex-row content-center px-2 md:px-30 py-15 md:py-20">
      <div className="max-w-5xl mx-auto bg-gray-800 rounded-lg overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-white p-5 md:p-8 relative">
            <img
              src={cta}
              alt="Electric motors"
              className="w-full h-55 object-cover rounded-md mb-8"
            />

            <div className="text-black">
              <h1 className="font-600  text-xl md:text-2xl my-3">CONTACT US</h1>

              <h1 className="font-600 text-[#6383aa] text-3xl md:text-5xl my-5">
                Share your requirements.
              </h1>

              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p>+91 7096428461</p>
              </div>

              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>Subhashcyadav9@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-5 md:p-8 mt-5 md:mt-0">
            <form className="space-y-6">
              <div>
                <label
                  //   for="name"
                  className="block text-sm font-medium text-gray-400"
                >
                  Your name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Your e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="2"
                  className="mt-1 block w-full p-3 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none text-white"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-[#6383aa] hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300 pointer"
                >
                  Send a message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
