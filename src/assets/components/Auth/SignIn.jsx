import React from 'react';

function SignIn() {
  return (
    <>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-purple-700">
            <div className="text-3xl font-extrabold text-purple-700">
              <span style={{ fontFamily: 'Cursive, sans-serif' }}>&lt;MUSA /&gt;</span>
            </div>
          </a>
          <div className="w-full sm:max-w-md xl:p-0">
            <div className="p-6 space-y-6">
              <h1 className="text-2xl font-bold leading-tight tracking-tight text-purple-900 md:text-3xl dark:text-gray-800">
                Sign In Here
              </h1>
              <form className="space-y-6" action="#">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-2xl font-medium text-purple-900"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-2xl font-medium text-purple-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full p-2.5"
                    required=""
                  />
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                >
                  Sign In
                </button>
                <p className="text-lg font-light text-gray-500">
                  Don't have an account?{' '}
                  <a
                    href="#"
                    className="font-medium text-purple-600 hover:underline"
                  >
                    Click here to Sign Up and create an account
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SignIn;
