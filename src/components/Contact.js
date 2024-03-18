import React from "react";

const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-10 px-4">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-6">Contact Us Page</h1>
        <div className="mb-4">
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name" />
        </div>
        <div className="mb-4">
          <textarea className="resize-none border rounded-md w-full h-24 px-3 py-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter Your Message"></textarea>
        </div>
        <button className="bg-green-500 hover:bg-green-600 w-full text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
