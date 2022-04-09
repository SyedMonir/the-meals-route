import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
  const { signInWithGoogle } = useFirebase();
  return (
    <section className="bg-[#1f2937] h-screen">
      <h1 className="text-center text-4xl font-semibold text-cyan-500 py-4">
        LOGIN
      </h1>

      <form className="md:w-2/4 w-3/4 mx-auto">
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="demo@example.com"
            required=""
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter your password"
            required=""
          />
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Login
        </button>

        <div className="flex items-center justify-center my-5 text-white">
          <div className=" w-36 h-[1px] bg-white" />
          <p className="mx-3">or</p>
          <div className=" w-36 h-[1px] bg-white" />
        </div>
      </form>
      <div className="text-center mb-4">
        <button onClick={signInWithGoogle}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z"
              fill="#4285F4"
            />
            <path
              d="M16.2862 30C20.1433 30 23.3814 28.7555 25.7465 26.6089L21.2386 23.1865C20.0322 24.011 18.4132 24.5865 16.2862 24.5865C12.5085 24.5865 9.30219 22.1444 8.15923 18.7688L7.9917 18.7827L3.58202 22.1272L3.52435 22.2843C5.87353 26.8576 10.6989 30 16.2862 30Z"
              fill="#34A853"
            />
            <path
              d="M8.16007 18.7689C7.85848 17.8978 7.68395 16.9644 7.68395 16C7.68395 15.0355 7.85849 14.1022 8.1442 13.2311L8.13621 13.0455L3.67126 9.64737L3.52518 9.71547C2.55696 11.6133 2.0014 13.7444 2.0014 16C2.0014 18.2555 2.55696 20.3866 3.52518 22.2844L8.16007 18.7689Z"
              fill="#FBBC05"
            />
            <path
              d="M16.2863 7.4133C18.9688 7.4133 20.7783 8.54885 21.8101 9.4978L25.8418 5.64C23.3657 3.38445 20.1434 2 16.2863 2C10.699 2 5.87354 5.1422 3.52435 9.71549L8.14339 13.2311C9.30223 9.85555 12.5086 7.4133 16.2863 7.4133Z"
              fill="#EB4335"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Login;
