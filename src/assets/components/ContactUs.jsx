import React from 'react';

function ContactUs() {
  return (
    <>
      <section className="bg-white p-6">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full sm:max-w-md xl:p-0">
            <div className="p-6 bg-white border border-gray-200 rounded-lg shadow-md space-y-6">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-purple-700 md:text-4xl">
                Contact Us
              </h1>
              <p className="text-xl font-light text-gray-700">
                If you have any questions or need assistance, feel free to reach out to us. We are here to help you!
              </p>
              <div className="space-y-4">
                <p className="text-xl font-medium text-gray-900">
                  <span className="font-semibold text-purple-600">Email:</span> support@musa.com
                </p>
                <p className="text-xl font-medium text-gray-900">
                  <span className="font-semibold text-purple-600">Phone:</span> (123) 456-7890
                </p>
                <p className="text-xl font-light text-gray-700">
                  Our team is available to assist you Monday through Friday, from 9:00 AM to 5:00 PM. Feel free to email us at any time, and we will get back to you as soon as possible. For urgent inquiries, please call us during business hours.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUs;
