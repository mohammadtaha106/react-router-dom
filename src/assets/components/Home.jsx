import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="mt-6 bg-white text-gray-900 h-screen flex flex-col">
        <div className="flex flex-col items-end justify-start px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full sm:max-w-xl xl:p-0">
            <div className="p-6 space-y-6">
              <div className="text-right">
                <h1 className="text-5xl font-bold leading-tight tracking-tight text-purple-700 md:text-6xl">
                  Welcome to MUSA
                </h1>
              </div>
              <div className="text-center mt-10">
                <p className="text-2xl font-light text-gray-700 mb-4">
                  At MUSA, we are dedicated to providing top-notch freelancing services that meet your needs. Established in 1973, our company has been a leader in the industry, offering a wide range of services including graphic design, web development, content writing, and more.
                </p>
                <p className="text-2xl font-light text-gray-700 mb-8">
                  Whether you are looking to enhance your online presence or need professional assistance with your projects, we have the expertise to help you achieve your goals.
                </p>
                <div className="flex justify-center">
                  <Link
                    to="contact"
                    className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-6 py-3 text-center "
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
