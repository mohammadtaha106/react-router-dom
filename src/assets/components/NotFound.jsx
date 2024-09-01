import React from 'react';

function NotFound() {
  return (
    <section className="bg-white text-gray-900 h-screen flex flex-col justify-center items-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-purple-700">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-xl font-light text-gray-600 mt-6">
          Sorry, the page you're looking for doesn't exist. It might have been removed or the URL might be incorrect.
        </p>
        <p className="text-xl font-light text-gray-600 mt-2">
          Please check the URL or return to the homepage.
        </p>
        <a
          href="/"
          className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 mt-8 inline-block"
        >
          Go to Homepage
        </a>
      </div>
    </section>
  );
}

export default NotFound;
