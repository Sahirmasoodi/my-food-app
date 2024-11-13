import React from "react";

const Contact = () => {
  function handleSubmit(e){
   e.preventDefault()
  }
  return (
    <div className="flex justify-center my-20 p-6">
      <div className=" rounded-lg bg-gray-200 shadow-gray-500 p-8 max-w-md w-full min-w-80">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Name"
            />
          </div>
          <div>
            <input
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Email"
            />
          </div>
          <div>
            <textarea
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-gray-500"
              placeholder="Enter Message"
            />
          </div>
          <button
            className="w-full bg-gray-500 text-white font-semibold py-2 rounded-lg hover:bg-gray-600 transition duration-200"
          >Send Message </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
