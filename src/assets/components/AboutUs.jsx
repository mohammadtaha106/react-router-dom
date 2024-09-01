import React from 'react';

function AboutUs() {
  return (
    <>
      <section className="bg-white p-6">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full sm:max-w-md xl:p-0">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-purple-700 md:text-3xl">
                About Us
              </h1>
              <p className="text-xl font-light text-gray-700 ">
                Welcome to <span className="font-semibold text-purple-600 ">&lt;MUSA /&gt;</span>, a leading company in the freelancing sector. Established in 1973, our company has been providing a wide range of services to meet the diverse needs of our clients.
              </p>
              <p className="text-xl font-light text-gray-700">
                <span className="font-semibold text-purple-600">MUSA</span> was founded by Musa, who envisioned a platform that would revolutionize the way freelancing services are delivered. Our commitment to excellence and innovation has made us a trusted name in the industry.
              </p>
              <p className="text-xl font-light text-gray-700">
                We offer a variety of freelancing services, including but not limited to, graphic design, web development, content writing, and digital marketing. Our team of skilled professionals is dedicated to delivering high-quality results that exceed client expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutUs;
